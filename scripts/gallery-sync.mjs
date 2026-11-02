// Sync src/gallery/* into src/content/gallery/photos.json.
// New files get EXIF data and a mono flag. Existing entries are kept.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const GALLERY_DIR = path.join(ROOT, 'src/gallery');
const DATA_FILE = path.join(ROOT, 'src/content/gallery/photos.json');
const IMAGE_RE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

const EXHIBITION_DIR = path.join(ROOT, 'src/content/exhibitions');

// Ids listed in the photos block of every exhibition file, bare or with a title
// nested under them (`- DSCF0955:`).
function hungPhotos() {
	if (!fs.existsSync(EXHIBITION_DIR)) return new Set();
	const ids = new Set();
	for (const f of fs.readdirSync(EXHIBITION_DIR).filter((f) => f.endsWith('.md'))) {
		const body = fs.readFileSync(path.join(EXHIBITION_DIR, f), 'utf8');
		for (const m of body.matchAll(/^\s*-\s*([A-Za-z0-9][A-Za-z0-9_-]*):?\s*$/gm)) ids.add(m[1]);
	}
	return ids;
}

const existing = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) : [];
const known = new Set(existing.map((p) => p.id));
const files = fs.readdirSync(GALLERY_DIR).filter((f) => IMAGE_RE.test(f)).sort();

function readExif(files) {
	try {
		const args = [
			'-json', '-Make', '-Model', '-LensMake', '-LensModel', '-FocalLength',
			'-FocalLengthIn35mmFormat', '-FNumber', '-ExposureTime', '-ISO',
			'-ExposureCompensation', '-ExposureProgram', '-MeteringMode', '-DateTimeOriginal',
			'-Software', '-XMP-rolloc:FilmStock',
			// Fujifilm maker notes: the simulation and its recipe.
			'-FilmMode', '-Saturation', '-DynamicRangeSetting', '-DevelopmentDynamicRange',
			'-HighlightTone', '-ShadowTone', '-GrainEffectRoughness', '-GrainEffectSize',
			'-ColorChromeEffect', '-ColorChromeFXBlue', '-Clarity', '-NoiseReduction',
			'-Sharpness', '-WhiteBalance', '-WhiteBalanceFineTune', '-BWAdjustment', '-BWMagentaGreen',
			...files,
		];
		const out = execFileSync('exiftool', args, { encoding: 'utf8', maxBuffer: 64e6 });
		return Object.fromEntries(JSON.parse(out).map((e) => [path.basename(e.SourceFile), e]));
	} catch {
		console.warn('exiftool not found or failed. Camera data will be empty.');
		return {};
	}
}

// Mean chroma of a small thumbnail. Low values mean a mono image.
async function isMono(file) {
	const { data, info } = await sharp(file)
		.resize(64, 64, { fit: 'inside' })
		.removeAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });
	let sum = 0;
	const px = info.width * info.height;
	for (let i = 0; i < data.length; i += 3) {
		const r = data[i], g = data[i + 1], b = data[i + 2];
		sum += Math.max(r, g, b) - Math.min(r, g, b);
	}
	return sum / px < 6;
}

function shutter(t) {
	if (t === undefined || t === '') return undefined;
	const n = Number(t);
	return Number.isNaN(n) ? String(t) : `${n}s`;
}

// Fujifilm mono simulations (Acros, Monochrome) live in the Saturation tag.
function simulation(e) {
	const sat = String(e.Saturation ?? '');
	if (/acros|monochrome|sepia/i.test(sat)) return sat.replace(/^.*?(Acros|Monochrome|Sepia)/i, '$1');
	return e.FilmMode || undefined;
}

function titleCase(s) {
	return s ? s.charAt(0) + s.slice(1).toLowerCase() : s;
}

// "+1 (medium hard)" -> "+1", 1.5 -> "+1.5", 0 -> "0".
function signed(v) {
	if (v === undefined || v === '') return undefined;
	const s = String(v).replace(/\s*\(.*\)$/, '').trim();
	const n = Number(s);
	return Number.isNaN(n) || n <= 0 || s.startsWith('+') ? s : `+${s}`;
}

// Fujifilm shooting settings. Each field is left out when the camera did not write it.
function recipe(e, sim) {
	if (!/fujifilm/i.test(e.Make ?? '')) return undefined;
	const known = (v) => (v === undefined || v === '' || v === 'n/a' ? undefined : String(v));
	const dr = known(e.DevelopmentDynamicRange);
	const rough = known(e.GrainEffectRoughness);
	const size = known(e.GrainEffectSize);
	const tune = known(e.WhiteBalanceFineTune);
	const r = {
		dynamicRange: dr && `DR${dr}${e.DynamicRangeSetting === 'Auto' ? ' (auto)' : ''}`,
		highlights: signed(e.HighlightTone),
		shadows: signed(e.ShadowTone),
		grain: rough && (rough === 'Off' || !size || size === 'Off' ? rough : `${rough}, ${size.toLowerCase()}`),
		colorChrome: known(e.ColorChromeEffect),
		colorChromeBlue: known(e.ColorChromeFXBlue),
		clarity: signed(e.Clarity),
		noiseReduction: signed(e.NoiseReduction),
		sharpness: known(e.Sharpness),
		// Fine tune only when it moves off zero, e.g. "Auto, Red +20, Blue -40".
		whiteBalance: known(e.WhiteBalance) && (tune && /[1-9]/.test(tune) ? `${e.WhiteBalance}, ${tune}` : String(e.WhiteBalance)),
		// Warm/cool and magenta/green toning, only for the mono simulations.
		monoTone: /acros|monochrome/i.test(sim ?? '') && e.BWAdjustment !== undefined
			? `WC ${signed(e.BWAdjustment)} · MG ${signed(e.BWMagentaGreen) ?? '0'}`
			: undefined,
	};
	const set = Object.fromEntries(Object.entries(r).filter(([, v]) => v));
	return Object.keys(set).length > 0 ? set : undefined;
}

// In thirds of a stop: -1 -> "-1 EV", -0.67 or "-2/3" -> "-2/3 EV", 1.33 -> "+1 1/3 EV".
// Zero means no compensation.
function compensation(v) {
	if (v === undefined || v === '') return undefined;
	const [num, den = 1] = String(v).split('/').map(Number);
	const thirds = Math.round((num / den) * 3);
	if (!thirds) return undefined;
	const whole = Math.trunc(Math.abs(thirds) / 3);
	const rest = Math.abs(thirds) % 3;
	const body = [whole || (rest ? '' : '0'), rest ? `${rest}/3` : ''].filter(Boolean).join(' ');
	return `${thirds < 0 ? '-' : '+'}${body} EV`;
}

function mm(v) {
	return v ? `${Math.round(parseFloat(v))}mm` : undefined;
}

const FILM_MAKERS = ['Kodak', 'Fujifilm', 'Fuji', 'Ilford', 'Kentmere', 'Harman', 'Foma', 'Agfa', 'AgfaPhoto', 'Rollei', 'Adox', 'CineStill', 'Lomography', 'Ferrania', 'Bergger', 'Polaroid'];

// Rolloc writes the stock as one string, e.g. "Ilford Delta 400".
function film(e) {
	const name = String(e.FilmStock ?? '').trim();
	if (!name) return undefined;
	const maker = FILM_MAKERS.find((m) => name.toLowerCase().startsWith(`${m.toLowerCase()} `));
	return {
		manufacturer: maker,
		stock: maker ? name.slice(maker.length + 1) : name,
		iso: e.ISO || undefined,
		scan: e.Software || undefined,
	};
}

function exifDate(s) {
	if (!s) return undefined;
	const m = String(s).match(/^(\d{4}):(\d{2}):(\d{2})/);
	return m ? `${m[1]}-${m[2]}-${m[3]}` : undefined;
}

// Photos show only inside an exhibition, so report the ones with no room.
function reportUnhung(all) {
	const hung = hungPhotos();
	const loose = all.filter((p) => !hung.has(p.id)).map((p) => p.id);
	if (loose.length > 0) {
		console.warn(`\n${loose.length} photos are in no exhibition and will not show:`);
		console.warn(loose.join(', '));
		console.warn('Add them to a file in src/content/exhibitions/.');
	}
}

const fresh = files.filter((f) => !known.has(path.parse(f).name));
if (fresh.length === 0) {
	console.log('Gallery is in sync. Nothing to add.');
	reportUnhung(existing);
	process.exit(0);
}

const exif = readExif(fresh.map((f) => path.join(GALLERY_DIR, f)));
const added = [];

for (const file of fresh) {
	const abs = path.join(GALLERY_DIR, file);
	const e = exif[file] ?? {};
	const meta = await sharp(abs).metadata();
	// Orientation 5-8 turns the photo on its side, so store the display size.
	const turned = (meta.orientation ?? 1) >= 5;
	const camera = [titleCase(e.Make), e.Model].filter(Boolean).join(' ') || undefined;
	const lensMake = titleCase(e.LensMake);
	const lens = e.LensModel && lensMake && !e.LensModel.toLowerCase().startsWith(lensMake.toLowerCase())
		? `${lensMake} ${e.LensModel}`
		: e.LensModel || undefined;
	const focalLength = mm(e.FocalLength);
	const focalLength35 = mm(e.FocalLengthIn35mmFormat);
	const sim = simulation(e);
	const roll = film(e);
	const entry = {
		id: path.parse(file).name,
		src: `../../gallery/${file}`,
		alt: '',
		date: exifDate(e.DateTimeOriginal),
		mono: await isMono(abs),
		camera,
		lens,
		focalLength,
		focalLength35: focalLength35 !== focalLength ? focalLength35 : undefined,
		aperture: typeof e.FNumber === 'number' ? `f/${e.FNumber}` : undefined,
		shutter: shutter(e.ExposureTime),
		// On a scan the ISO is the film's, so it goes with the film.
		iso: roll ? undefined : e.ISO || undefined,
		exposureCompensation: compensation(e.ExposureCompensation),
		mode: e.ExposureProgram || undefined,
		metering: e.MeteringMode || undefined,
		simulation: sim,
		recipe: recipe(e, sim),
		film: roll,
		tags: [],
		width: turned ? meta.height : meta.width,
		height: turned ? meta.width : meta.height,
	};
	added.push(entry);
	console.log(`+ ${entry.id}  ${camera ?? '?'}  ${roll ? [roll.manufacturer, roll.stock].filter(Boolean).join(' ') : sim ?? ''}  ${entry.mono ? 'b&w' : 'color'}`);
}

// Newest first. Photos with no capture date go last, by id.
const all = [...existing, ...added].sort((a, b) =>
	a.date === b.date ? a.id.localeCompare(b.id) : !a.date ? 1 : !b.date ? -1 : a.date < b.date ? 1 : -1,
);
fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, '\t') + '\n');
console.log(`Wrote ${all.length} photos to ${path.relative(ROOT, DATA_FILE)}`);
reportUnhung(all);
