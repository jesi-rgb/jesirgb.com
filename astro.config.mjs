// @ts-check

import icon from 'astro-icon';
import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import { katexMath, tableOfContents } from './src/markdown/plugins.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://jesirgb.com',
	integrations: [mdx(), sitemap(), icon({ include: { solar: ['*'] } })],
	markdown: {
		// MDX inherits this processor. The table of contents goes first so it reads headings before KaTeX.
		processor: satteri({ features: { math: true }, hastPlugins: [tableOfContents, katexMath] }),
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Azeret Mono',
			cssVariable: '--font-azeret-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
		},
		{
			provider: fontProviders.google(),
			name: 'Fahkwang',
			cssVariable: '--font-fahkwang',
			weights: [600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-serif', 'Georgia', 'serif'],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
