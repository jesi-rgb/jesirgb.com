// Palette data for the dev-only picker. Each palette gives a full light and
// dark pairing of the semantic tokens declared in global.css.

export type Mode = 'light' | 'dark';

export type TokenKey =
	| 'base'
	| 'base-muted'
	| 'base-subtle'
	| 'base-elevated'
	| 'base-hover'
	| 'line'
	| 'line-strong'
	| 'content'
	| 'content-muted'
	| 'content-subtle'
	| 'primary'
	| 'primary-hover'
	| 'primary-muted'
	| 'primary-subtle'
	| 'primary-content'
	| 'focus';

export type Scheme = Record<TokenKey, string>;

export interface TokenMeta {
	key: TokenKey;
	label: string;
	note: string;
}

export interface TokenGroup {
	name: string;
	tokens: TokenMeta[];
}

export interface Palette {
	id: string;
	name: string;
	note: string;
	light: Scheme;
	dark: Scheme;
}

export const TOKEN_GROUPS: TokenGroup[] = [
	{
		name: 'Surfaces',
		tokens: [
			{ key: 'base', label: 'base', note: 'Page background' },
			{ key: 'base-muted', label: 'base-muted', note: 'Alternate band or card' },
			{ key: 'base-subtle', label: 'base-subtle', note: 'Tinted block, code chip' },
			{ key: 'base-elevated', label: 'base-elevated', note: 'Panel above the page' },
			{ key: 'base-hover', label: 'base-hover', note: 'Hover fill for rows' },
			{ key: 'line', label: 'line', note: 'Default border' },
			{ key: 'line-strong', label: 'line-strong', note: 'Emphasised border' },
		],
	},
	{
		name: 'Content',
		tokens: [
			{ key: 'content', label: 'content', note: 'Primary text' },
			{ key: 'content-muted', label: 'content-muted', note: 'Body text' },
			{ key: 'content-subtle', label: 'content-subtle', note: 'Labels and metadata' },
		],
	},
	{
		name: 'Primary',
		tokens: [
			{ key: 'primary', label: 'primary', note: 'Brand fill and links' },
			{ key: 'primary-hover', label: 'primary-hover', note: 'Hover of primary fill' },
			{ key: 'primary-muted', label: 'primary-muted', note: 'Secondary brand tone' },
			{ key: 'primary-subtle', label: 'primary-subtle', note: 'Brand tinted surface' },
			{ key: 'primary-content', label: 'primary-content', note: 'Text on primary' },
		],
	},
	{
		name: 'State',
		tokens: [{ key: 'focus', label: 'focus', note: 'Focus ring' }],
	},
];

export const TOKEN_KEYS: TokenKey[] = TOKEN_GROUPS.flatMap((group) => group.tokens.map((token) => token.key));

export const PALETTES: Palette[] = [
	{
		id: 'mint',
		name: 'Mint',
		note: 'Current site palette, carried over from 2024.',
		light: {
			base: '#f6fffb',
			'base-muted': '#ecfbf4',
			'base-subtle': '#e5fdf2',
			'base-elevated': '#ffffff',
			'base-hover': '#dff7ec',
			line: '#cfeadd',
			'line-strong': '#9fd0bd',
			content: '#042b24',
			'content-muted': '#3f5f56',
			'content-subtle': '#677471',
			primary: '#226e48',
			'primary-hover': '#1a5637',
			'primary-muted': '#2e8a5c',
			'primary-subtle': '#e5fdf2',
			'primary-content': '#f6fffb',
			focus: '#226e48',
		},
		dark: {
			base: '#021713',
			'base-muted': '#04211b',
			'base-subtle': '#073128',
			'base-elevated': '#06251e',
			'base-hover': '#0a3a2f',
			line: '#0e3d32',
			'line-strong': '#1d6151',
			content: '#f6fffb',
			'content-muted': '#a9c4bb',
			'content-subtle': '#677471',
			primary: '#a7f3d0',
			'primary-hover': '#c7f9e2',
			'primary-muted': '#73e0b4',
			'primary-subtle': '#0b2e24',
			'primary-content': '#021714',
			focus: '#a7f3d0',
		},
	},
	{
		id: 'electric',
		name: 'Electric',
		note: 'Warm white paper with a true electric blue.',
		light: {
			base: '#fffefb',
			'base-muted': '#faf8f3',
			'base-subtle': '#f4f2ec',
			'base-elevated': '#ffffff',
			'base-hover': '#edeae2',
			line: '#e9e5dc',
			'line-strong': '#c3bdb0',
			content: '#14130f',
			'content-muted': '#4d4a42',
			'content-subtle': '#746f66',
			primary: '#0040ff',
			'primary-hover': '#0032cc',
			'primary-muted': '#3b6bff',
			'primary-subtle': '#e8edff',
			'primary-content': '#ffffff',
			focus: '#0040ff',
		},
		dark: {
			base: '#0d0c0a',
			'base-muted': '#131210',
			'base-subtle': '#1c1a16',
			'base-elevated': '#151311',
			'base-hover': '#24211c',
			line: '#242118',
			'line-strong': '#423d33',
			content: '#fbfaf7',
			'content-muted': '#b5b0a6',
			'content-subtle': '#8a857a',
			primary: '#7aa5ff',
			'primary-hover': '#9cbcff',
			'primary-muted': '#5c8dff',
			'primary-subtle': '#0f1830',
			'primary-content': '#04102e',
			focus: '#7aa5ff',
		},
	},
	{
		id: 'andalucia',
		name: 'Andalucía',
		note: 'Whitewashed cal. Añil by day, albero over añil night.',
		light: {
			base: '#fbf8f1',
			'base-muted': '#f5f1e6',
			'base-subtle': '#efe9da',
			'base-elevated': '#ffffff',
			'base-hover': '#e8e1cf',
			line: '#e6dfcd',
			'line-strong': '#c0b69d',
			content: '#1d1a12',
			'content-muted': '#4f4a3c',
			'content-subtle': '#756f5e',
			primary: '#3355c0',
			'primary-hover': '#2a4bb0',
			'primary-muted': '#4979d5',
			'primary-subtle': '#e6ebfa',
			'primary-content': '#fbf8f1',
			focus: '#3355c0',
		},
		dark: {
			base: '#0a0e1a',
			'base-muted': '#0f1527',
			'base-subtle': '#151d35',
			'base-elevated': '#0d1220',
			'base-hover': '#1d2641',
			line: '#131a2d',
			'line-strong': '#343f60',
			content: '#f1f3f9',
			'content-muted': '#a8b0c7',
			'content-subtle': '#727c9d',
			primary: '#ffab1f',
			'primary-hover': '#ffc04d',
			'primary-muted': '#e8940f',
			'primary-subtle': '#2e2107',
			'primary-content': '#0a0e1a',
			focus: '#ffab1f',
		},
	},
	{
		id: 'moss',
		name: 'Moss',
		note: 'Warm paper with a deep moss green.',
		light: {
			base: '#fbfaf4',
			'base-muted': '#f3f2e8',
			'base-subtle': '#eceade',
			'base-elevated': '#ffffff',
			'base-hover': '#e5e3d3',
			line: '#ddd9c6',
			'line-strong': '#b8b19a',
			content: '#1d2216',
			'content-muted': '#4b5340',
			'content-subtle': '#74795f',
			primary: '#3f6212',
			'primary-hover': '#324e0e',
			'primary-muted': '#4d7c0f',
			'primary-subtle': '#eaeeda',
			'primary-content': '#fbfaf4',
			focus: '#3f6212',
		},
		dark: {
			base: '#14160f',
			'base-muted': '#1b1e14',
			'base-subtle': '#23271a',
			'base-elevated': '#1e2116',
			'base-hover': '#2c3020',
			line: '#2f3423',
			'line-strong': '#4b5334',
			content: '#f1f0e6',
			'content-muted': '#b7bca4',
			'content-subtle': '#868a72',
			primary: '#a3e635',
			'primary-hover': '#bef264',
			'primary-muted': '#84cc16',
			'primary-subtle': '#22280f',
			'primary-content': '#14160f',
			focus: '#a3e635',
		},
	},
	{
		id: 'ink',
		name: 'Ink',
		note: 'Neutral greys with an ink blue brand.',
		light: {
			base: '#ffffff',
			'base-muted': '#f6f6f7',
			'base-subtle': '#efeff1',
			'base-elevated': '#ffffff',
			'base-hover': '#e8e8ec',
			line: '#e2e2e6',
			'line-strong': '#b9b9c0',
			content: '#17171a',
			'content-muted': '#55555e',
			'content-subtle': '#83838d',
			primary: '#1d4ed8',
			'primary-hover': '#1e40af',
			'primary-muted': '#3b82f6',
			'primary-subtle': '#e6ecfd',
			'primary-content': '#ffffff',
			focus: '#1d4ed8',
		},
		dark: {
			base: '#0b0b0d',
			'base-muted': '#131316',
			'base-subtle': '#1b1b20',
			'base-elevated': '#161619',
			'base-hover': '#232329',
			line: '#26262c',
			'line-strong': '#43434d',
			content: '#f4f4f5',
			'content-muted': '#a7a7b0',
			'content-subtle': '#74747d',
			primary: '#93b4ff',
			'primary-hover': '#b6cdff',
			'primary-muted': '#6b93f5',
			'primary-subtle': '#121a2e',
			'primary-content': '#08152e',
			focus: '#93b4ff',
		},
	},
	{
		id: 'slate',
		name: 'Slate',
		note: 'Cool slate with a cyan brand.',
		light: {
			base: '#f8fafc',
			'base-muted': '#f1f5f9',
			'base-subtle': '#e9eff5',
			'base-elevated': '#ffffff',
			'base-hover': '#e2e8f0',
			line: '#dbe3ec',
			'line-strong': '#a9b6c6',
			content: '#0f1c2b',
			'content-muted': '#475569',
			'content-subtle': '#7c8a9a',
			primary: '#0e7490',
			'primary-hover': '#155e75',
			'primary-muted': '#0891b2',
			'primary-subtle': '#e0f2f7',
			'primary-content': '#f8fafc',
			focus: '#0e7490',
		},
		dark: {
			base: '#080d13',
			'base-muted': '#0e151d',
			'base-subtle': '#151f2a',
			'base-elevated': '#111923',
			'base-hover': '#1d2938',
			line: '#1c2836',
			'line-strong': '#33475e',
			content: '#eef4fa',
			'content-muted': '#9fb1c4',
			'content-subtle': '#6f8094',
			primary: '#67e8f9',
			'primary-hover': '#a5f3fc',
			'primary-muted': '#22d3ee',
			'primary-subtle': '#07242c',
			'primary-content': '#04191f',
			focus: '#67e8f9',
		},
	},
	{
		id: 'sand',
		name: 'Sand',
		note: 'Warm sand with a terracotta brand.',
		light: {
			base: '#fdfaf6',
			'base-muted': '#f7f1e8',
			'base-subtle': '#f2e9dc',
			'base-elevated': '#ffffff',
			'base-hover': '#ece0cf',
			line: '#e7dac7',
			'line-strong': '#c4ae92',
			content: '#2a1d12',
			'content-muted': '#5f4c3a',
			'content-subtle': '#8a7561',
			primary: '#9a3412',
			'primary-hover': '#7c2d12',
			'primary-muted': '#c2410c',
			'primary-subtle': '#fbe8dd',
			'primary-content': '#fdfaf6',
			focus: '#9a3412',
		},
		dark: {
			base: '#16110c',
			'base-muted': '#1e1711',
			'base-subtle': '#281f16',
			'base-elevated': '#211a13',
			'base-hover': '#33281c',
			line: '#33281d',
			'line-strong': '#55432f',
			content: '#faf3ea',
			'content-muted': '#c2ac94',
			'content-subtle': '#8f7c67',
			primary: '#fb923c',
			'primary-hover': '#fdba74',
			'primary-muted': '#f97316',
			'primary-subtle': '#2c1a0d',
			'primary-content': '#16110c',
			focus: '#fb923c',
		},
	},
	{
		id: 'plum',
		name: 'Plum',
		note: 'Grey violet paper with a deep violet brand.',
		light: {
			base: '#fbf9fd',
			'base-muted': '#f4f0f9',
			'base-subtle': '#ede7f5',
			'base-elevated': '#ffffff',
			'base-hover': '#e5dcf0',
			line: '#e3dbef',
			'line-strong': '#bcaed3',
			content: '#1e1526',
			'content-muted': '#574a66',
			'content-subtle': '#857792',
			primary: '#6d28d9',
			'primary-hover': '#5b21b6',
			'primary-muted': '#7c3aed',
			'primary-subtle': '#ece5fb',
			'primary-content': '#fbf9fd',
			focus: '#6d28d9',
		},
		dark: {
			base: '#100b16',
			'base-muted': '#17111f',
			'base-subtle': '#1f1729',
			'base-elevated': '#1a1322',
			'base-hover': '#291e36',
			line: '#291f36',
			'line-strong': '#453357',
			content: '#f5f0fa',
			'content-muted': '#b6a8c6',
			'content-subtle': '#857794',
			primary: '#c4b5fd',
			'primary-hover': '#ddd6fe',
			'primary-muted': '#a78bfa',
			'primary-subtle': '#1c1330',
			'primary-content': '#130b22',
			focus: '#c4b5fd',
		},
	},
];

// Pairs checked for WCAG contrast. `ui` marks 3:1 targets, `info` marks
// pairs that are shown but not graded.
export const CONTRAST_PAIRS: { label: string; fg: TokenKey; bg: TokenKey; ui?: boolean; info?: boolean }[] = [
	{ label: 'content on base', fg: 'content', bg: 'base' },
	{ label: 'content-muted on base', fg: 'content-muted', bg: 'base' },
	{ label: 'content-subtle on base', fg: 'content-subtle', bg: 'base' },
	{ label: 'content on base-muted', fg: 'content', bg: 'base-muted' },
	{ label: 'primary on base', fg: 'primary', bg: 'base' },
	{ label: 'primary-content on primary', fg: 'primary-content', bg: 'primary' },
	{ label: 'line on base', fg: 'line', bg: 'base', info: true },
	{ label: 'focus on base', fg: 'focus', bg: 'base', ui: true },
];
