import type { IconProps } from 'phosphor-svelte/lib/shared';
import type { SvelteComponent } from 'svelte';

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: string[];
  published: boolean;
};

export type Work = {
  title: string;
  description: string;
  link: string;
  icon: SvelteComponent<IconProps>;
};
