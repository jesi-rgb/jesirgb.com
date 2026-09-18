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

// Ids listed in the photos block of every exhibition file.
function hungPhotos() {
	if (!fs.existsSync(EXHIBITION_DIR)) return new Set();
	const ids = new Set();
	for (const f of fs.readdirSync(EXHIBITION_DIR).filter((f) => f.endsWith('.md'))) {
		const body = fs.readFileSync(path.join(EXHIBITION_DIR, f), 'utf8');
		for (const m of body.matchAll(/^\s*-\s*([A-Za-z0-9][A-Za-z0-9_-]*)\s*$/gm)) ids.add(m[1]);
	}
	return ids;
}

const existing = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) : [];
const known = new Set(existing.map((p) => p.id));
const files = fs.readdirSync(GALLERY_DIR).filter((f) => IMAGE_RE.test(f)).sort();

function readExif(files) {
	try {
		const args = [
			'-json', '-Make', '-Model', '-LensModel', '-FocalLength', '-FNumber',
			'-ExposureTime', '-ISO', '-DateTimeOriginal', '-FilmMode', '-Saturation',
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
	const entry = {
		id: path.parse(file).name,
		src: `../../gallery/${file}`,
		alt: '',
		date: exifDate(e.DateTimeOriginal) ?? fs.statSync(abs).mtime.toISOString().slice(0, 10),
		mono: await isMono(abs),
		camera,
		lens: e.LensModel || undefined,
		focalLength: e.FocalLength ? `${Math.round(parseFloat(e.FocalLength))}mm` : undefined,
		aperture: typeof e.FNumber === 'number' ? `f/${e.FNumber}` : undefined,
		shutter: shutter(e.ExposureTime),
		iso: e.ISO || undefined,
		simulation: simulation(e),
		tags: [],
		width: turned ? meta.height : meta.width,
		height: turned ? meta.width : meta.height,
	};
	added.push(entry);
	console.log(`+ ${entry.id}  ${camera ?? '?'}  ${entry.mono ? 'b&w' : 'color'}`);
}

const all = [...existing, ...added].sort((a, b) => (a.date < b.date ? 1 : -1));
fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, '\t') + '\n');
console.log(`Wrote ${all.length} photos to ${path.relative(ROOT, DATA_FILE)}`);
reportUnhung(all);
