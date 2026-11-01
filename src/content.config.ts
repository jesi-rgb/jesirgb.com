import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';
import { FRAME_KINDS } from './data/frames';

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
// Hand-edit alt, caption, tags, location and film format.
const gallery = defineCollection({
	loader: file('./src/content/gallery/photos.json'),
	schema: ({ image }) =>
		z.object({
			src: image(),
			alt: z.string().default(''),
			caption: z.string().optional(),
			// When it was shot. Left out when the file has no capture date (scans).
			date: z.coerce.date().optional(),
			mono: z.boolean().default(false),
			camera: z.string().optional(),
			lens: z.string().optional(),
			focalLength: z.string().optional(),
			// 35mm-equivalent focal length, e.g. "41mm" for 27mm on APS-C.
			focalLength35: z.string().optional(),
			aperture: z.string().optional(),
			shutter: z.string().optional(),
			iso: z.number().optional(),
			// e.g. "-1 EV". Left out at 0.
			exposureCompensation: z.string().optional(),
			// Exposure program and metering, as the camera names them.
			mode: z.string().optional(),
			metering: z.string().optional(),
			// Digital film simulation (Fujifilm), e.g. "Classic Negative".
			simulation: z.string().optional(),
			// The in-camera settings that go with the simulation (Fujifilm).
			recipe: z
				.object({
					dynamicRange: z.string(),
					highlights: z.string(),
					shadows: z.string(),
					grain: z.string(),
					colorChrome: z.string(),
					colorChromeBlue: z.string(),
					clarity: z.string(),
					noiseReduction: z.string(),
					sharpness: z.string(),
					whiteBalance: z.string(),
					monoTone: z.string(),
				})
				.partial()
				.optional(),
			// Set for analog shots. Presence marks the photo as film.
			film: z
				.object({
					manufacturer: z.string().optional(),
					stock: z.string(),
					iso: z.number().optional(),
					format: z.string().optional(),
					// The software that digitized the negative, e.g. "Rolloc".
					scan: z.string().optional(),
				})
				.optional(),
			tags: z.array(z.string()).default([]),
			location: z.string().optional(),
			featured: z.boolean().default(false),
			// Hangs the photo in this frame. Without it, the wall picks one.
			frame: z.enum(FRAME_KINDS).optional(),
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

// All site copy in one entry, so each page reads a typed object.
const t = z.string();
const link = z.object({ title: t, link: t });
const copy = defineCollection({
	loader: file('./src/content/copy.yaml', { parser: (text) => ({ copy: parse(text) }) }),
	schema: z.object({
		site: z.object({ title: t, description: t }),
		nav: z.array(z.object({ href: t, label: t })),
		common: z.object({ home: t, toggleTheme: t, menu: t, now: t }),
		footer: z.object({ blurb: t }),
		notFound: z.object({ title: t, description: t, heading: t, back: t }),
		home: z.object({ heading: t, intro: t, current: t, work: link }),
		work: z.object({
			title: t,
			description: t,
			heading: t,
			projects: z.object({ title: t, intro: t, showRest: t, hideRest: t }),
			experience: z.object({ title: t, current: t }),
			status: z.object({ live: t, building: t, archived: t, unfinished: t }),
		}),
		blog: z.object({
			title: t,
			description: t,
			heading: t,
			post: z.object({ back: t, updated: t }),
		}),
		videos: z.object({ title: t, description: t, heading: t, intro: t, channelLink: t }),
		gallery: z.object({
			title: t,
			description: t,
			heading: t,
			permanent: t,
			others: t,
			status: z.object({ 'on-view': t, permanent: t, past: t }),
			dates: z.object({ permanent: t, since: t }),
		}),
		room: z.object({
			description: t,
			back: t,
			works: t,
			open: t,
			nextRoom: t,
			mono: t,
			hint: z.object({ move: t, zoom: t, step: t }),
			controls: z.object({ prev: t, next: t, zoomOut: t, fit: t, zoomIn: t }),
		}),
		photo: z.object({
			description: t,
			prev: t,
			next: t,
			meta: z.object({
				camera: t,
				lens: t,
				settings: t,
				mode: t,
				metering: t,
				film: t,
				manufacturer: t,
				scan: t,
				simulation: t,
				recipe: z.object({
					dynamicRange: t,
					highlights: t,
					shadows: t,
					grain: t,
					colorChrome: t,
					colorChromeBlue: t,
					clarity: t,
					noiseReduction: t,
					sharpness: t,
					whiteBalance: t,
					monoTone: t,
				}),
				look: t,
				mono: t,
				color: t,
				location: t,
				date: t,
				tags: t,
			}),
		}),
	}),
});

export const collections = { blog, gallery, exhibitions, copy };
