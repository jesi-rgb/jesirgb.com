import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			categories: z.array(z.string()).optional(),
			heroImage: z.optional(image()),
		}),
});

// One entry per photo. `bun run gallery:sync` adds new files with EXIF data.
// Hand-edit alt, caption, tags, location and film for analog shots.
const gallery = defineCollection({
	loader: file('./src/content/gallery/photos.json'),
	schema: ({ image }) =>
		z.object({
			src: image(),
			alt: z.string().default(''),
			caption: z.string().optional(),
			date: z.coerce.date(),
			mono: z.boolean().default(false),
			camera: z.string().optional(),
			lens: z.string().optional(),
			focalLength: z.string().optional(),
			aperture: z.string().optional(),
			shutter: z.string().optional(),
			iso: z.number().optional(),
			// Digital film simulation (Fujifilm), e.g. "Classic Negative".
			simulation: z.string().optional(),
			// Set for analog shots. Presence marks the photo as film.
			film: z
				.object({
					stock: z.string(),
					iso: z.number().optional(),
					format: z.string().optional(),
				})
				.optional(),
			tags: z.array(z.string()).default([]),
			location: z.string().optional(),
			featured: z.boolean().default(false),
			width: z.number().optional(),
			height: z.number().optional(),
		}),
});

// A room in the gallery. Photos are listed in hang order, not by date.
const exhibitions = defineCollection({
	loader: glob({ base: './src/content/exhibitions', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		// Permanent shows stay up. On-view and past shows have run dates.
		status: z.enum(['on-view', 'permanent', 'past']),
		opens: z.coerce.date().optional(),
		closes: z.coerce.date().optional(),
		cover: reference('gallery'),
		// Lower numbers go first inside each status group.
		order: z.number().default(0),
		photos: z.array(reference('gallery')).nonempty(),
	}),
});

export const collections = { blog, gallery, exhibitions };
