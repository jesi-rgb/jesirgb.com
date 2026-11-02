// Dev-only palette comparison tool. Layout.astro imports this behind an
// import.meta.env.DEV guard, so the bundle drops it from production builds.
import { CONTRAST_PAIRS, PALETTES, TOKEN_GROUPS, TOKEN_KEYS } from './palettes';
import type { Mode, Palette, Scheme, TokenKey } from './palettes';

// The picker keeps its own colours so the site preview stays readable.
const CSS = `/* The picker keeps its own colours so the preview stays readable. */
	#pp {
		--pp-bg: #14161a;
		--pp-bg-2: #1c1f25;
		--pp-line: #2b2f37;
		--pp-fg: #e8eaed;
		--pp-fg-dim: #969ba5;
		--pp-tint: #7dd3a8;
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		z-index: 9999;
		font-family: ui-sans-serif, system-ui, sans-serif;
		font-size: 12px;
		color: var(--pp-fg);
	}

	#pp-toggle {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		margin-left: auto;
		border: 1px solid var(--pp-line);
		border-radius: 999px;
		background: var(--pp-bg);
		cursor: pointer;
		box-shadow: 0 6px 20px rgb(0 0 0 / 0.3);
	}

	.pp-toggle-disc {
		width: 1rem;
		height: 1rem;
		border-radius: 999px;
		background: linear-gradient(90deg, var(--base) 50%, var(--primary) 50%);
		outline: 1px solid var(--pp-line);
	}

	#pp-panel {
		display: none;
		flex-direction: column;
		width: min(24rem, calc(100vw - 2rem));
		max-height: min(80vh, 44rem);
		margin-bottom: 0.5rem;
		border: 1px solid var(--pp-line);
		border-radius: 0.75rem;
		background: var(--pp-bg);
		box-shadow: 0 16px 50px rgb(0 0 0 / 0.45);
		overflow: hidden;
	}

	#pp[data-open='true'] #pp-panel {
		display: flex;
	}

	.pp-head {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.625rem 0.75rem;
		border-bottom: 1px solid var(--pp-line);
	}

	.pp-head strong {
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.pp-name {
		flex: 1;
		color: var(--pp-fg-dim);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.pp-tabs {
		display: flex;
		gap: 0.25rem;
		padding: 0.5rem 0.75rem 0;
	}

	.pp-tab-btn {
		padding: 0.25rem 0.5rem;
		border: 1px solid transparent;
		border-radius: 0.375rem;
		background: none;
		color: var(--pp-fg-dim);
		cursor: pointer;
		font-size: 11px;
	}

	.pp-tab-btn[data-active='true'] {
		border-color: var(--pp-line);
		background: var(--pp-bg-2);
		color: var(--pp-fg);
	}

	.pp-glow {
		padding: 0.625rem 0.75rem 0;
	}

	.pp-body {
		flex: 1;
		padding: 0.75rem;
		overflow-y: auto;
	}

	.pp-cards {
		display: grid;
		gap: 0.5rem;
	}

	.pp-card {
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem;
		border: 1px solid var(--pp-line);
		border-radius: 0.5rem;
		background: var(--pp-bg-2);
		cursor: pointer;
		text-align: left;
		color: inherit;
		font: inherit;
	}

	.pp-card[data-active='true'] {
		border-color: var(--pp-tint);
	}

	.pp-card-head {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.pp-card-head b {
		font-size: 12px;
	}

	.pp-card-head span {
		flex: 1;
		color: var(--pp-fg-dim);
		font-size: 10px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.pp-previews {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}

	.pp-prev {
		display: grid;
		gap: 0.375rem;
		padding: 0.5rem;
		border: 1px solid;
		border-radius: 0.375rem;
	}

	.pp-prev-title {
		font-size: 15px;
		font-weight: 600;
		line-height: 1;
	}

	.pp-prev-sub {
		font-size: 10px;
		line-height: 1.3;
	}

	.pp-prev-row {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.pp-pill {
		padding: 0.125rem 0.375rem;
		border-radius: 999px;
		font-size: 9px;
	}

	.pp-chip {
		padding: 0.125rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 9px;
	}

	.pp-dot {
		width: 0.625rem;
		height: 0.625rem;
		border-radius: 999px;
	}

	.pp-group {
		margin-bottom: 0.75rem;
	}

	.pp-group h4 {
		margin: 0 0 0.375rem;
		color: var(--pp-fg-dim);
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.pp-token {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.1875rem 0;
	}

	.pp-token input[type='color'] {
		width: 1.5rem;
		height: 1.5rem;
		padding: 0;
		border: 1px solid var(--pp-line);
		border-radius: 0.25rem;
		background: none;
		cursor: pointer;
	}

	.pp-token input[type='color']::-webkit-color-swatch-wrapper {
		padding: 2px;
	}

	.pp-token input[type='color']::-webkit-color-swatch {
		border: none;
		border-radius: 0.125rem;
	}

	.pp-token-label {
		flex: 1;
		min-width: 0;
	}

	.pp-token-label b {
		display: block;
		font-family: ui-monospace, Menlo, monospace;
		font-size: 11px;
		font-weight: 400;
	}

	.pp-token-label span {
		color: var(--pp-fg-dim);
		font-size: 10px;
	}

	.pp-token input[type='text'],
	.pp-token select {
		width: 5.25rem;
		padding: 0.1875rem 0.375rem;
		border: 1px solid var(--pp-line);
		border-radius: 0.25rem;
		background: var(--pp-bg-2);
		color: var(--pp-fg);
		font-family: ui-monospace, Menlo, monospace;
		font-size: 10px;
	}

	.pp-token input[type='range'] {
		width: 3.75rem;
		margin: 0;
		accent-color: var(--pp-tint);
	}

	.pp-range-value {
		width: 1.25rem;
		color: var(--pp-fg-dim);
		font-family: ui-monospace, Menlo, monospace;
		font-size: 10px;
		text-align: right;
	}

	.pp-token[data-dirty='true'] .pp-token-label b::after {
		content: ' •';
		color: var(--pp-tint);
	}

	.pp-revert {
		visibility: hidden;
		width: 1.25rem;
		padding: 0;
		border: none;
		background: none;
		color: var(--pp-fg-dim);
		cursor: pointer;
		font-size: 12px;
		line-height: 1;
	}

	.pp-revert:hover {
		color: var(--pp-fg);
	}

	.pp-token[data-dirty='true'] .pp-revert {
		visibility: visible;
	}

	.pp-cr {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.1875rem 0;
		font-size: 11px;
	}

	.pp-cr-label {
		flex: 1;
		font-family: ui-monospace, Menlo, monospace;
		font-size: 10px;
		color: var(--pp-fg-dim);
	}

	.pp-cr-value {
		font-variant-numeric: tabular-nums;
	}

	.pp-badge {
		padding: 0.0625rem 0.3125rem;
		border-radius: 0.25rem;
		font-size: 9px;
		letter-spacing: 0.04em;
	}

	.pp-badge[data-level='AAA'] {
		background: #16351f;
		color: #7ee0a0;
	}

	.pp-badge[data-level='AA'] {
		background: #143045;
		color: #79c0ff;
	}

	.pp-badge[data-level='ok'] {
		background: #143045;
		color: #79c0ff;
	}

	.pp-badge[data-level='low'] {
		background: #3d2a12;
		color: #f0b866;
	}

	.pp-badge[data-level='fail'] {
		background: #401c1c;
		color: #f28b82;
	}

	.pp-badge[data-level='info'] {
		background: #24272d;
		color: #969ba5;
	}

	.pp-foot {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.625rem 0.75rem;
		border-top: 1px solid var(--pp-line);
	}

	.pp-btn {
		padding: 0.25rem 0.625rem;
		border: 1px solid var(--pp-line);
		border-radius: 0.375rem;
		background: var(--pp-bg-2);
		color: var(--pp-fg);
		cursor: pointer;
		font-size: 11px;
	}

	.pp-btn:hover {
		border-color: var(--pp-tint);
	}

	.pp-btn-ghost {
		background: none;
	}

	.pp-status {
		flex: 1;
		text-align: right;
		color: var(--pp-fg-dim);
		font-size: 10px;
	}

	.pp-hint {
		margin: 0 0 0.5rem;
		color: var(--pp-fg-dim);
		font-size: 10px;
		line-height: 1.4;
	}`;

const HTML = `<div id="pp" data-open="false" data-tab="compare">
	<button id="pp-toggle" type="button" aria-label="Open the palette picker" title="Palette picker (Alt+P)">
		<span class="pp-toggle-disc"></span>
	</button>

	<section id="pp-panel" aria-label="Palette picker">
		<header class="pp-head">
			<strong>Palette</strong>
			<span id="pp-name" class="pp-name"></span>
			<button id="pp-theme" type="button" class="pp-btn pp-btn-ghost" title="Toggle the site theme">Dark</button>
			<button id="pp-close" type="button" class="pp-btn pp-btn-ghost" aria-label="Close">✕</button>
		</header>

		<div id="pp-glow" class="pp-glow"></div>

		<nav class="pp-tabs">
			<button type="button" class="pp-tab-btn" data-tab="compare">Compare</button>
			<button type="button" class="pp-tab-btn" data-tab="tokens">Tokens</button>
			<button type="button" class="pp-tab-btn" data-tab="contrast">Contrast</button>
		</nav>

		<div class="pp-body">
			<div id="pp-compare" class="pp-pane"></div>
			<div id="pp-tokens" class="pp-pane" hidden></div>
			<div id="pp-contrast" class="pp-pane" hidden></div>
		</div>

		<footer class="pp-foot">
			<button id="pp-copy" type="button" class="pp-btn">Copy CSS</button>
			<button id="pp-reset" type="button" class="pp-btn pp-btn-ghost">Reset</button>
			<span id="pp-status" class="pp-status"></span>
		</footer>
	</section>
</div>`;

const mount = document.createElement('div');
mount.innerHTML = HTML;
const sheet = document.createElement('style');
sheet.textContent = CSS;
document.head.append(sheet);
document.body.append(mount.firstElementChild!);

const STORE = 'pp:state';

interface State {
	paletteId: string;
	edit: Mode;
	overrides: { light: Partial<Scheme>; dark: Partial<Scheme> };
	// Texture settings over the page glow, per scheme. Unset keys fall back to global.css.
	glow: Record<Mode, Partial<Record<GlowKey, string>>>;
}

type GlowKey = '--glow-blend' | '--glow-texture-opacity' | '--glow-texture-fade';

// Used when global.css doesn't declare the key either.
const GLOW_FALLBACK: Record<GlowKey, string> = {
	'--glow-blend': 'normal',
	'--glow-texture-opacity': '1',
	'--glow-texture-fade': '70%',
};

const GLOW_SLIDERS: { key: GlowKey; note: string; min: number; max: number; step: number; unit: string }[] = [
	{ key: '--glow-texture-opacity', note: 'Texture strength', min: 0, max: 1, step: 0.05, unit: '' },
	{ key: '--glow-texture-fade', note: 'Texture gone at this % of the glow', min: 10, max: 100, step: 5, unit: '%' },
];

const BLENDS = [
	'normal',
	'multiply',
	'screen',
	'overlay',
	'darken',
	'lighten',
	'color-dodge',
	'color-burn',
	'hard-light',
	'soft-light',
	'difference',
	'exclusion',
	'hue',
	'saturation',
	'color',
	'luminosity',
	'plus-lighter',
];

const root = document.getElementById('pp');
if (root) {
	const state: State = load();
	let palette = PALETTES.find((p) => p.id === state.paletteId) ?? PALETTES[0];

	const styleTag = document.createElement('style');
	styleTag.id = 'pp-overrides';
	document.head.append(styleTag);

	// --- state ---------------------------------------------------------
	function load(): State {
		const fallback: State = {
			// Start on the palette the hour picked, so the picker matches the page.
			paletteId: document.documentElement.dataset.palette ?? PALETTES[0].id,
			edit: 'light',
			overrides: { light: {}, dark: {} },
			glow: { light: {}, dark: {} },
		};
		try {
			const raw = localStorage.getItem(STORE);
			return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
		} catch {
			return fallback;
		}
	}

	function save() {
		state.paletteId = palette.id;
		localStorage.setItem(STORE, JSON.stringify(state));
	}

	function schemeOf(source: Palette, mode: Mode): Scheme {
		return { ...source[mode], ...state.overrides[mode] } as Scheme;
	}

	// The value global.css gives a custom property under `selector`, skipping the picker's own overrides.
	function cssDefault(selector: string, property: string): string | undefined {
		const scan = (rules: CSSRuleList): string | undefined => {
			for (const rule of Array.from(rules)) {
				if (rule instanceof CSSStyleRule && rule.selectorText === selector) {
					// Tailwind nests an @supports block in :root for color-mix, so declarations after it land in
					// CSSNestedDeclarations children rather than the rule's own style.
					const blocks = [rule, ...Array.from(rule.cssRules).filter((child) => child.constructor.name === 'CSSNestedDeclarations')];
					for (const block of blocks) {
						const value = (block as CSSStyleRule).style.getPropertyValue(property).trim();
						if (value) return value;
					}
				}
				if ('cssRules' in rule) {
					const found = scan((rule as CSSGroupingRule).cssRules);
					if (found) return found;
				}
			}
		};
		for (const sheet of Array.from(document.styleSheets)) {
			if (sheet.ownerNode === styleTag) continue;
			try {
				const found = scan(sheet.cssRules);
				if (found) return found;
			} catch {
				// Cross-origin sheets refuse cssRules.
			}
		}
	}

	function glowOf(mode: Mode, key: GlowKey) {
		return state.glow[mode][key] ?? cssDefault(mode === 'dark' ? ':root.dark' : ':root', key) ?? GLOW_FALLBACK[key];
	}

	function siteMode(): Mode {
		return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	}

	// --- colour maths ---------------------------------------------------
	function rgb(hex: string): [number, number, number] {
		const value = hex.replace('#', '');
		const full = value.length === 3 ? value.replace(/./g, (c) => c + c) : value;
		const n = parseInt(full.slice(0, 6), 16);
		return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
	}

	function luminance(hex: string) {
		const channels = rgb(hex).map((c) => {
			const s = c / 255;
			return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
		});
		return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
	}

	function contrast(a: string, b: string) {
		const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
		return (x + 0.05) / (y + 0.05);
	}

	function grade(ratio: number, pair: (typeof CONTRAST_PAIRS)[number]) {
		if (pair.info) return 'info';
		if (pair.ui) return ratio >= 3 ? 'ok' : 'fail';
		if (ratio >= 7) return 'AAA';
		if (ratio >= 4.5) return 'AA';
		if (ratio >= 3) return 'low';
		return 'fail';
	}

	function failCount(scheme: Scheme) {
		return CONTRAST_PAIRS.filter((pair) => {
			return grade(contrast(scheme[pair.fg], scheme[pair.bg]), pair) === 'fail';
		}).length;
	}

	// --- apply ----------------------------------------------------------
	function apply() {
		const block = (mode: Mode, selector: string) => {
			const scheme = schemeOf(palette, mode);
			const lines = TOKEN_KEYS.map((key) => `--${key}: ${scheme[key]};`).join('');
			const glow = Object.entries(state.glow[mode]).map(([key, value]) => `${key}: ${value};`).join('');
			return `${selector}{${lines}${glow}}`;
		};
		// Extra :root repeats outrank global.css's scheduled palettes (:root.dark[data-palette=…]).
		styleTag.textContent = `${block('light', ':root:root:root')}${block('dark', ':root:root:root.dark')}`;
	}

	function cssText() {
		const order = TOKEN_GROUPS.map((group) => group.tokens.map((token) => token.key));
		const block = (mode: Mode, selector: string) => {
			const scheme = schemeOf(palette, mode);
			const groups = order.map((keys) =>
				keys
					.map((key) => {
						const value = key === 'focus' && scheme.focus === scheme.primary ? 'var(--primary)' : scheme[key];
						return `\t--${key}: ${value};`;
					})
					.join('\n'),
			);
			const glow = (Object.keys(GLOW_FALLBACK) as GlowKey[]).map((key) => `\t${key}: ${glowOf(mode, key)};`).join('\n');
			return `${selector} {\n${groups.join('\n\n')}\n\n${glow}\n}`;
		};
		return `/* ${palette.name} */\n${block('light', ':root')}\n\n${block('dark', ':root.dark')}\n`;
	}

	// --- rendering ------------------------------------------------------
	function preview(scheme: Scheme, mode: Mode) {
		return `<div class="pp-prev" style="background:${scheme.base};border-color:${scheme.line};color:${scheme.content}">
			<div class="pp-prev-title">Aa <span style="font-size:9px;opacity:.6">${mode}</span></div>
			<div class="pp-prev-sub" style="color:${scheme['content-muted']}">Body text sits here.</div>
			<div class="pp-prev-row">
				<span class="pp-pill" style="background:${scheme.primary};color:${scheme['primary-content']}">Button</span>
				<span class="pp-chip" style="background:${scheme['base-subtle']};color:${scheme['content-subtle']}">chip</span>
				<span class="pp-dot" style="background:${scheme['line-strong']}"></span>
				<span class="pp-dot" style="background:${scheme['primary-muted']}"></span>
			</div>
		</div>`;
	}

	function renderCompare() {
		compareStale = false;
		const pane = document.getElementById('pp-compare')!;
		const cards = PALETTES.map((item) => {
			const light = { ...item.light, ...(item.id === palette.id ? state.overrides.light : {}) } as Scheme;
			const dark = { ...item.dark, ...(item.id === palette.id ? state.overrides.dark : {}) } as Scheme;
			const fails = failCount(light) + failCount(dark);
			const badge = fails
				? `<span class="pp-badge" data-level="fail">${fails} fail</span>`
				: '<span class="pp-badge" data-level="AA">passes</span>';
			return `<button type="button" class="pp-card" data-palette="${item.id}" data-active="${item.id === palette.id}">
				<div class="pp-card-head"><b>${item.name}</b><span>${item.note}</span>${badge}</div>
				<div class="pp-previews">${preview(light, 'light')}${preview(dark, 'dark')}</div>
			</button>`;
		}).join('');
		pane.innerHTML = `<p class="pp-hint">Pick a pairing. Edits you make in Tokens stay on top of it until you reset.</p><div class="pp-cards">${cards}</div>`;
		pane.querySelectorAll<HTMLButtonElement>('[data-palette]').forEach((button) => {
			button.onclick = () => {
				palette = PALETTES.find((p) => p.id === button.dataset.palette)!;
				save();
				apply();
				renderAll();
			};
		});
	}

	function renderTokens() {
		const pane = document.getElementById('pp-tokens')!;
		const mode = state.edit;
		const scheme = schemeOf(palette, mode);
		const groups = TOKEN_GROUPS.map((group) => {
			const rows = group.tokens
				.map((token) => {
					const dirty = state.overrides[mode][token.key] !== undefined;
					return `<div class="pp-token" data-row="${token.key}" data-dirty="${dirty}">
						<input type="color" value="${scheme[token.key]}" data-token="${token.key}" aria-label="--${token.label}" />
						<span class="pp-token-label"><b>--${token.label}</b><span>${token.note}</span></span>
						<input type="text" value="${scheme[token.key]}" data-text="${token.key}" spellcheck="false" />
						<button type="button" class="pp-revert" data-revert="${token.key}" title="Back to the palette value">↺</button>
					</div>`;
				})
				.join('');
			return `<div class="pp-group"><h4>${group.name}</h4>${rows}</div>`;
		}).join('');
		pane.innerHTML = `<p class="pp-hint">Editing the <b>${mode}</b> scheme. Use the header switch to change scheme.</p>${groups}`;

		pane.querySelectorAll<HTMLInputElement>('[data-token]').forEach((input) => {
			input.oninput = () => setToken(input.dataset.token as TokenKey, input.value);
		});
		pane.querySelectorAll<HTMLInputElement>('[data-text]').forEach((input) => {
			input.onchange = () => {
				if (/^#[0-9a-f]{3,8}$/i.test(input.value)) setToken(input.dataset.text as TokenKey, input.value);
			};
		});
		pane.querySelectorAll<HTMLButtonElement>('[data-revert]').forEach((button) => {
			button.onclick = () => revertToken(button.dataset.revert as TokenKey);
		});
	}

	// Sits above the tabs so the texture settings are always in reach while comparing palettes.
	function renderGlow() {
		const bar = document.getElementById('pp-glow')!;
		const mode = state.edit;
		const blend = glowOf(mode, '--glow-blend');
		const options = BLENDS.map((value) => `<option value="${value}"${value === blend ? ' selected' : ''}>${value}</option>`).join('');
		const dirty = (key: GlowKey) => state.glow[mode][key] !== undefined;
		const sliders = GLOW_SLIDERS.map(({ key, note, min, max, step }) => {
			const value = glowOf(mode, key);
			return `<div class="pp-token" data-glow="${key}" data-dirty="${dirty(key)}">
				<span class="pp-token-label"><b>${key}</b><span>${note} (${mode})</span></span>
				<input type="range" min="${min}" max="${max}" step="${step}" value="${parseFloat(value)}" aria-label="${key}" />
				<output class="pp-range-value">${value}</output>
				<button type="button" class="pp-revert" title="Back to the global.css value">↺</button>
			</div>`;
		}).join('');
		bar.innerHTML = `<div class="pp-token" data-glow="--glow-blend" data-dirty="${dirty('--glow-blend')}">
			<span class="pp-token-label"><b>--glow-blend</b><span>Texture over the glow (${mode})</span></span>
			<select aria-label="--glow-blend">${options}</select>
			<button type="button" class="pp-revert" title="Back to the global.css value">↺</button>
		</div>${sliders}`;

		const set = (key: GlowKey, value: string) => {
			state.glow[mode][key] = value;
			save();
			apply();
		};
		bar.querySelector<HTMLSelectElement>('select')!.onchange = (event) => {
			set('--glow-blend', (event.target as HTMLSelectElement).value);
			renderGlow();
		};
		// Patched in place: re-rendering mid-drag would drop the slider under the pointer.
		GLOW_SLIDERS.forEach(({ key, unit }) => {
			const row = bar.querySelector<HTMLElement>(`[data-glow="${key}"]`)!;
			row.querySelector<HTMLInputElement>('input')!.oninput = (event) => {
				const value = `${(event.target as HTMLInputElement).value}${unit}`;
				set(key, value);
				row.dataset.dirty = 'true';
				row.querySelector('output')!.textContent = value;
			};
		});
		bar.querySelectorAll<HTMLElement>('[data-glow]').forEach((row) => {
			row.querySelector<HTMLButtonElement>('.pp-revert')!.onclick = () => {
				delete state.glow[mode][row.dataset.glow as GlowKey];
				save();
				apply();
				renderGlow();
			};
		});
	}

	// Patches the row in place. A re-render here would drop the <input> that the
	// colour picker is anchored to, which closes it on the first drag.
	function setToken(key: TokenKey, value: string) {
		state.overrides[state.edit][key] = value;
		save();
		apply();
		syncRow(key, value, true);
		renderContrast();
		compareStale = true;
	}

	function revertToken(key: TokenKey) {
		delete state.overrides[state.edit][key];
		save();
		apply();
		syncRow(key, schemeOf(palette, state.edit)[key], false);
		renderContrast();
		compareStale = true;
	}

	// Mirrors a value across the row's two inputs without touching the focused one.
	function syncRow(key: TokenKey, value: string, dirty: boolean) {
		const row = document.querySelector<HTMLElement>(`#pp-tokens [data-row="${key}"]`);
		if (!row) return;
		row.dataset.dirty = String(dirty);
		row.querySelectorAll<HTMLInputElement>('input').forEach((input) => {
			if (input !== document.activeElement && input.value.toLowerCase() !== value.toLowerCase()) {
				input.value = value;
			}
		});
	}

	function renderContrast() {
		const pane = document.getElementById('pp-contrast')!;
		const sections = (['light', 'dark'] as Mode[])
			.map((mode) => {
				const scheme = schemeOf(palette, mode);
				const rows = CONTRAST_PAIRS.map((pair) => {
					const ratio = contrast(scheme[pair.fg], scheme[pair.bg]);
					const level = grade(ratio, pair);
					return `<div class="pp-cr">
						<span class="pp-dot" style="background:${scheme[pair.fg]};outline:1px solid ${scheme[pair.bg]}"></span>
						<span class="pp-cr-label">${pair.label}</span>
						<span class="pp-cr-value">${ratio.toFixed(2)}</span>
						<span class="pp-badge" data-level="${level}">${level}</span>
					</div>`;
				}).join('');
				return `<div class="pp-group"><h4>${mode}</h4>${rows}</div>`;
			})
			.join('');
		pane.innerHTML = `<p class="pp-hint">WCAG ratios. Borders and rings target 3:1, text targets 4.5:1.</p>${sections}`;
	}

	function renderAll() {
		document.getElementById('pp-name')!.textContent = palette.name;
		document.getElementById('pp-theme')!.textContent = siteMode() === 'dark' ? 'Dark' : 'Light';
		renderCompare();
		renderTokens();
		renderContrast();
		renderGlow();
	}

	// --- chrome ----------------------------------------------------------
	let compareStale = false;

	function setTab(tab: string) {
		if (tab === 'compare' && compareStale) renderCompare();
		root.dataset.tab = tab;
		root.querySelectorAll<HTMLElement>('.pp-tab-btn').forEach((button) => {
			button.dataset.active = String(button.dataset.tab === tab);
		});
		(['compare', 'tokens', 'contrast'] as const).forEach((name) => {
			(document.getElementById(`pp-${name}`) as HTMLElement).hidden = name !== tab;
		});
	}

	function status(message: string) {
		const node = document.getElementById('pp-status')!;
		node.textContent = message;
		setTimeout(() => (node.textContent = ''), 1600);
	}

	root.querySelectorAll<HTMLElement>('.pp-tab-btn').forEach((button) => {
		button.onclick = () => setTab(button.dataset.tab!);
	});

	document.getElementById('pp-toggle')!.onclick = () => {
		root.dataset.open = root.dataset.open === 'true' ? 'false' : 'true';
	};

	document.getElementById('pp-close')!.onclick = () => {
		root.dataset.open = 'false';
	};

	document.getElementById('pp-theme')!.onclick = () => {
		const next = siteMode() === 'dark' ? 'light' : 'dark';
		document.documentElement.classList.toggle('dark', next === 'dark');
		localStorage.setItem('theme', next);
	};

	// Follow the theme wherever it flips (this switch or the site header), so edits land on the visible scheme.
	new MutationObserver(() => {
		if (state.edit === siteMode()) return;
		state.edit = siteMode();
		save();
		renderAll();
	}).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

	document.getElementById('pp-copy')!.onclick = async () => {
		const css = cssText();
		try {
			await navigator.clipboard.writeText(css);
			status('CSS copied');
		} catch {
			console.log(css);
			status('CSS logged to console');
		}
	};

	document.getElementById('pp-reset')!.onclick = () => {
		state.overrides = { light: {}, dark: {} };
		state.glow = { light: {}, dark: {} };
		save();
		apply();
		renderAll();
		status('Edits cleared');
	};

	addEventListener('keydown', (event) => {
		if (event.altKey && event.key.toLowerCase() === 'p') {
			root.dataset.open = root.dataset.open === 'true' ? 'false' : 'true';
		}
	});

	state.edit = siteMode();
	setTab('compare');
	apply();
	renderAll();
}
