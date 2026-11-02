// Sätteri hast plugin for blog posts. Register it on `markdown.processor` in astro.config.mjs.
import { fromHtml } from 'hast-util-from-html';
import katex from 'katex';

const classes = (node) => [node.properties?.className ?? []].flat();

// KaTeX markup as hast elements: MDX can't compile `raw` nodes, so the HTML is parsed here instead.
const renderMath = (tex, displayMode) =>
	fromHtml(katex.renderToString(tex, { displayMode, throwOnError: false }), { fragment: true }).children;

/** Renders Sätteri's math nodes (`features.math`) with KaTeX: `$…$` inline, fenced `$$` blocks as display. */
export const katexMath = {
	name: 'katex-math',
	element: [
		{
			filter: ['pre'],
			visit(node, ctx) {
				const [code] = node.children;
				if (code?.type !== 'element' || !classes(code).includes('math-display')) return;
				ctx.replaceNode(node, renderMath(ctx.textContent(code), true));
			},
		},
		{
			filter: ['code'],
			visit(node, ctx) {
				if (classes(node).includes('math-inline')) ctx.replaceNode(node, renderMath(ctx.textContent(node), false));
			},
		},
	],
};
