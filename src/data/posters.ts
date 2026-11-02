// Posters shown on /work as a deck. Files live in src/posters/; the list sets the order, top card first.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../posters/*.jpg', { eager: true });

export interface Poster {
	title: string;
	src: ImageMetadata;
}

const order = [
	'limit',
	'bloom',
	'recursive',
	'joyful',
	'bruh',
	'slow_down',
	'path',
	'lifetime',
	'bubble_tea',
	'amplitude',
];

export const posters: Poster[] = order.map((name) => {
	const file = files[`../posters/${name}.jpg`];
	if (!file) throw new Error(`Missing poster src/posters/${name}.jpg`);
	const title = name.replace(/_/g, ' ');
	return { title: title[0].toUpperCase() + title.slice(1), src: file.default };
});
