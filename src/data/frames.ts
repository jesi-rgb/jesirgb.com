// The frame kinds for the gallery wall. WallFrame draws them.
// Each kind sets the moulding width, the mat width, the bevel and the depth.
export interface FrameProfile {
	moulding: number;
	mat: number;
	bevel: number;
	depth: number;
}

export const FRAMES = {
	walnut: { moulding: 30, mat: 34, bevel: 3, depth: 1 },
	oak: { moulding: 16, mat: 58, bevel: 3, depth: 0.7 },
	black: { moulding: 12, mat: 72, bevel: 4, depth: 1.3 },
	mahogany: { moulding: 34, mat: 30, bevel: 3, depth: 1.1 },
	gilt: { moulding: 54, mat: 22, bevel: 4, depth: 1.5 },
	float: { moulding: 20, mat: 30, bevel: 0, depth: 1.8 },
} satisfies Record<string, FrameProfile>;

export type FrameKind = keyof typeof FRAMES;

export const FRAME_KINDS = Object.keys(FRAMES) as [FrameKind, ...FrameKind[]];

// Total thickness the frame adds on each side of the print.
export function frameThickness(kind: FrameKind) {
	const f = FRAMES[kind];
	return f.moulding + f.mat + f.bevel;
}

// A photo with a set frame keeps it. The kinds spread evenly over the rest,
// in an order that looks arbitrary but does not move between builds.
export function assignFrames(photos: { id: string; frame?: FrameKind }[]): FrameKind[] {
	const out: FrameKind[] = [];
	// FNV-1a with a final mix, so near-identical file names still scatter.
	const hash = (seed: string) => {
		let h = 2166136261;
		for (const c of seed) {
			h ^= c.charCodeAt(0);
			h = Math.imul(h, 16777619);
		}
		h ^= h >>> 15;
		h = Math.imul(h, 2246822507);
		return (h ^ (h >>> 13)) >>> 0;
	};
	photos.forEach((p, i) => p.frame && (out[i] = p.frame));
	photos
		.map((p, i) => ({ i, h: hash(p.id) }))
		.filter(({ i }) => !out[i])
		.sort((a, b) => a.h - b.h)
		.forEach(({ i }, rank) => (out[i] = FRAME_KINDS[rank % FRAME_KINDS.length]));
	return out;
}
