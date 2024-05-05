import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import { codeToHtml } from 'shiki';

import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: {
    _: './src/default.svelte'
  },

  highlight: {
    highlighter: async (code, lang = 'text') => {
      const html = escapeSvelte(
        await codeToHtml(code, {
          lang: lang,
          themes: {
            light: 'snazzy-light',
            dark: 'vesper'
          }
        })
      );

      return `{@html \`${html}\`}`;
    }
  },

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [remarkMath, [remarkToc, { tight: true, ordered: true }], remarkUnwrapImages],
  rehypePlugins: [rehypeKatexSvelte, rehypeSlug]
});

export default config;
