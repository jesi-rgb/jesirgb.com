// Videos shown on / and /videos. Edit here, not in pages.

export interface Channel {
	name: string;
	url: string;
	avatar: string;
	// What I did for this channel.
	role: string;
}

export interface Video {
	title: string;
	subtitle: string;
	// YouTube video id. The thumbnail and the link come from it.
	id: string;
	channel: keyof typeof channels;
	featured?: boolean;
}

export const channels = {
	'design-bits': {
		name: 'Design Bits',
		url: 'https://www.youtube.com/@Design_Bits',
		avatar:
			'https://yt3.googleusercontent.com/Xs-TgjZnfX5mk77kk9VUyeOS8Jz2TzEKRlq_0z4TviTXigh6_vIIsslf4rrsLO5tfnv5ptPU=s160-c-k-c0x00ffffff-no-rj',
		role: 'My channel. Written, animated, scored and edited alone.',
	},
	reducible: {
		name: 'Reducible',
		url: 'https://www.youtube.com/@Reducible',
		avatar:
			'https://yt3.googleusercontent.com/4Y72xFDw395XHf878UgzsxXc1I-36cgpjgjWaZx7KRP5D3VsMk_bvFoenvYjDRhEGF9Eo2LdPg=s160-c-k-c0x00ffffff-no-rj',
		role: 'Animation on computer science explainers.',
	},
	veritasium: {
		name: 'Veritasium',
		url: 'https://www.youtube.com/@veritasium',
		avatar: 'https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj',
		role: 'Animation on math and science films.',
	},
} satisfies Record<string, Channel>;

export const videos: Video[] = [
	{
		title: 'The Science Behind Blurring Tools',
		subtitle: 'How can a computer really make things blurry?',
		id: 'xEyUcp4tbTI',
		channel: 'design-bits',
		featured: true,
	},
	{
		title: 'but what are Blend Modes?',
		subtitle: 'A deeper look into this seemingly random tool.',
		id: 'D7Yg4H8e7uw',
		channel: 'design-bits',
		featured: true,
	},
	{
		title: 'Implementing GIF saving in p5.js',
		subtitle: 'A talk for CCFest 2023 about adding GIF export to the p5.js ecosystem.',
		id: 'WG3ZAydSN4Q',
		channel: 'design-bits',
	},
	{
		title: 'Create a minimal, clean design with Cavalry, Affinity Photo & Designer',
		subtitle: 'More tutorials!',
		id: 'rvqAad4iswA',
		channel: 'design-bits',
	},
	{
		title: 'Abstract Poster Design using Cavalry and Affinity Designer',
		subtitle: 'First video on my channel! Niche tutorials.',
		id: 'lG88LGGxMvE',
		channel: 'design-bits',
	},
	{
		title: 'The Discrete Fourier Transform: Most Important Algorithm Ever?',
		subtitle: 'The most ubiquitous and praised algorithm. Ever.',
		id: 'yYEMxqreA10',
		channel: 'reducible',
		featured: true,
	},
	{
		title: 'The Traveling Salesman Problem: when good enough beats perfect',
		subtitle: 'Going places has never been this hard.',
		id: 'GiDsjIBOVoA',
		channel: 'reducible',
	},
	{
		title: 'PageRank: A trillion dollar algorithm',
		subtitle: 'Search engines explained.',
		id: 'JGQe4kiPnrU',
		channel: 'reducible',
	},
	{
		title: 'How PNG Works: Compromising speed for quality',
		subtitle: 'PNG is not perfect though!',
		id: 'EFUYNoFRHQI',
		channel: 'reducible',
	},
	{
		title: 'The unreasonable effectiveness of JPEG: A signal processing approach',
		subtitle: 'JPEG is not as bad as we put it, under the right conditions.',
		id: '0me3guauqOU',
		channel: 'reducible',
	},
	{
		title: 'The riddle that seems impossible even if you know the answer',
		subtitle: 'Probability theory is probably lying to us.',
		id: 'iSNsgj1OCLA',
		channel: 'veritasium',
	},
	{
		title: 'How imaginary numbers were invented',
		subtitle: 'Math got so hard we just had to think outside the line.',
		id: 'cUzklzVXJwo',
		channel: 'veritasium',
	},
	{
		title: 'The Simplest Math Problem No One Can Solve',
		subtitle: 'Tiny little impossible problem.',
		id: '094y1Z2wpJg',
		channel: 'veritasium',
	},
];

export const watchHref = (v: Video) => `https://youtu.be/${v.id}`;
export const thumbnail = (v: Video) => `https://i3.ytimg.com/vi/${v.id}/maxresdefault.jpg`;

export const featuredVideos = videos.filter((v) => v.featured);

// Videos in channel order, so each channel gets its own block.
export const videosByChannel = (Object.keys(channels) as (keyof typeof channels)[]).map((key) => ({
	key,
	channel: channels[key],
	videos: videos.filter((v) => v.channel === key),
}));
