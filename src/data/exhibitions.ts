// Reads the exhibitions collection and joins it with the photos.
// Pages use these helpers so the join and the sort live in one place.
import { getCollection, type CollectionEntry } from 'astro:content';
import { copy, fill } from './copy';

export type Exhibition = CollectionEntry<'exhibitions'>;
export type Photo = CollectionEntry<'gallery'>;
export type Status = Exhibition['data']['status'];

export interface Room {
	entry: Exhibition;
	slug: string;
	href: string;
	photos: Photo[];
	cover: Photo;
	dates: string;
}

export const statusLabel: Record<Status, string> = copy.gallery.status;

// The order the rooms show on the gallery index.
const ORDER: Status[] = ['on-view', 'permanent', 'past'];
const rank = (s: Status) => ORDER.indexOf(s);

const day = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

// "16 May 2026 — 31 Dec 2026", or a single date when the run has no end.
function runDates(data: Exhibition['data']) {
	if (data.status === 'permanent') return copy.gallery.dates.permanent;
	if (!data.opens) return statusLabel[data.status];
	return data.closes ? `${day(data.opens)} — ${day(data.closes)}` : fill(copy.gallery.dates.since, { date: day(data.opens) });
}

export async function getRooms(): Promise<Room[]> {
	const photos = new Map((await getCollection('gallery')).map((p) => [p.id, p]));
	const entries = (await getCollection('exhibitions')).sort((a, b) => {
		const g = rank(a.data.status) - rank(b.data.status);
		if (g !== 0) return g;
		if (a.data.order !== b.data.order) return a.data.order - b.data.order;
		return (b.data.opens?.valueOf() ?? 0) - (a.data.opens?.valueOf() ?? 0);
	});

	return entries.map((entry) => ({
		entry,
		slug: entry.id,
		href: `/gallery/${entry.id}`,
		photos: entry.data.photos.map((r) => photos.get(r.id)).filter(Boolean) as Photo[],
		cover: photos.get(entry.data.cover.id) ?? photos.get(entry.data.photos[0].id)!,
		dates: runDates(entry.data),
	}));
}

export const photoHref = (slug: string, id: string) => `/gallery/${slug}/${id}`;

// Where a loose photo id lives. Used by the strip on the home page.
export async function getPhotoIndex(): Promise<Map<string, { room: Room; photo: Photo }>> {
	const index = new Map<string, { room: Room; photo: Photo }>();
	for (const room of await getRooms()) {
		for (const photo of room.photos) if (!index.has(photo.id)) index.set(photo.id, { room, photo });
	}
	return index;
}
