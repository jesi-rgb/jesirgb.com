// Sätteri hast plugins for blog posts. Register them on `markdown.processor` in astro.config.mjs.
import GithubSlugger from 'github-slugger';
import { fromHtml } from 'hast-util-from-html';
import katex from 'katex';

const HEADING = /^h[1-6]$/;
const TOC_HEADING = /^(table[ -]of[ -])?contents?$|^toc$/i;

const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });
const classes = (node) => [node.properties?.className ?? []].flat();

function* headings(node) {
	for (const child of node.children ?? []) {
		if (child.type !== 'element') continue;
		if (HEADING.test(child.tagName)) yield child;
		else yield* headings(child);
	}
}

// Nested ordered list of links; a heading deeper than the one before opens a sub-list under it.
function tocList(entries) {
	const root = el('ol', {}, []);
	const stack = [{ depth: entries[0].depth, list: root }];
	for (const { depth, id, text } of entries) {
		while (stack.length > 1 && depth < stack.at(-1).depth) stack.pop();
		let { list } = stack.at(-1);
		if (depth > stack.at(-1).depth && list.children.length) {
			const sub = el('ol', {}, []);
			list.children.at(-1).children.push(sub);
			stack.push({ depth, list: sub });
			list = sub;
		}
		list.children.push(el('li', {}, [el('a', { href: `#${id}` }, [{ type: 'text', value: text }])]));
	}
	return root;
}

/**
 * Fills a "Table of contents" (or "Contents", "TOC") heading with links to every heading after it.
 * Ids are assigned here with the same slugger as Astro's heading-ids pass, which keeps existing ids.
 */
export const tableOfContents = {
	name: 'table-of-contents',
	after(root, ctx) {
		const slugger = new GithubSlugger();
		let toc;
		const entries = [];
		for (const node of headings(root)) {
			const text = ctx.textContent(node);
			const id = typeof node.properties?.id === 'string' ? node.properties.id : slugger.slug(text);
			ctx.setProperty(node, 'id', id);
			if (toc) entries.push({ depth: Number(node.tagName[1]), id, text });
			else if (TOC_HEADING.test(text.trim())) toc = node;
		}
		if (toc && entries.length) ctx.insertAfter(toc, tocList(entries));
	},
};

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
