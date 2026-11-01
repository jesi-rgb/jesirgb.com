// Projects and experience shown on / and /work. Edit here, not in pages.

export type ProjectStatus = 'live' | 'building' | 'archived' | 'unfinished';

export interface Project {
	name: string;
	description: string;
	// Omit for projects with nothing to link to yet; the row renders without a link.
	url?: string;
	year: string;
	status: ProjectStatus;
	featured?: boolean;
	// Longer text for the /work page. Falls back to description.
	details?: string;
}

export interface Experience {
	company: string;
	role: string;
	start: string;
	end?: string;
	url?: string;
	summary: string;
	details?: string[];
	current?: boolean;
}

export const projects: Project[] = [
	{
		name: 'Rolloc',
		description: 'Helps invert your digital scans of analog frames',
		year: '2026',
		status: 'building',
		featured: true,
	},
	{
		name: 'Conduit',
		description: 'An AI chat app that lets you go on tangents.',
		details:
			'A chat app that lets you go on tangents. Conversations can branch out at any given point, visually',
		url: 'https://conduitchat.app',
		year: '2025',
		status: 'live',
		featured: true,
	},
	{
		name: 'Tractor',
		description: 'Automated scraping tool on top of Apify, built for Graphext.',
		details:
			'A revival of a scraping tool to bring social media data into Graphext fast.',
		url: 'https://tractor.graphext.com/',
		year: '2024',
		status: 'live',
		featured: true,
	},
	{
		name: 'Graphext landing page',
		description: 'A one-month speedrun to move the marketing site from Webflow into code.',
		year: '2024',
		status: 'live',
	},
	{
		name: "Svelte's Advent of Code 2023",
		description: 'A set of 24 prompts to sharpen your Svelte skills.',
		url: 'https://svelte-advent-code.vercel.app/',
		year: '2023',
		status: 'live',
	},
	{
		name: 'Pangea',
		description: 'The country guessing game.',
		url: 'https://pangea.fra.unikraft.app',
		year: '2023',
		featured: true,
		status: 'live',
	},
	{
		name: 'Tramos IRPF',
		description: 'Tax calculator for freelancers in Spain.',
		url: 'https://tramos-irpf.vercel.app/',
		year: '2023',
		status: 'live',
	},
	{
		name: 'Cycles',
		description: 'Tiny little habit tracker.',
		url: 'https://cycles-sup.vercel.app',
		year: '2023',
		status: 'live',
	},
	{
		name: 'Processing Fellowship Proposal',
		description: 'A presentation of Mathemagical.js, with Greg Stanton.',
		url: 'https://fellowship-proposal.vercel.app/en',
		year: '2023',
		status: 'live',
	},
	{
		name: 'Spanish General Elections 2023 Map',
		description: 'Visualization of the results, per district.',
		url: 'https://mapa-elecciones-two.vercel.app/',
		year: '2023',
		status: 'live',
	},
	{
		name: 'El Metro',
		description: 'Tram tracking, extremely simple.',
		url: 'https://elmetro.vercel.app/',
		year: '2023',
		status: 'live',
	},
	{
		name: 'Font Guesser',
		description: 'A font guessing game.',
		url: 'https://font-guesser.vercel.app/',
		year: '2023',
		status: 'unfinished',
	},


];

export const experience: Experience[] = [
	{
		company: 'Unikraft',
		role: 'Design Engineer',
		start: 'Nov 2025',
		url: 'https://unikraft.com',
		current: true,
		summary: 'From the landing page, through youtube videos all the way into the dashboard, I am helping build awareness for this truly amazing product.',
	},
	{
		company: 'Graphext',
		role: 'Design Engineer',
		start: 'Jan 2024',
		end: 'May 2025',
		url: 'https://graphext.com',
		summary:
			'As per usual on a small startup, one must wear many hats. I (re)built the landing page, (re)designed Tractor 2.0 and wrote much of the documentation, as well as produced tutorials for its YouTube channel.',
	},
	{
		company: 'Prisms of Reality',
		role: 'Technical Content Creator',
		start: 'Jun 2023',
		end: 'Dec 2023',
		summary:
			'Created and animated 500+ explainer video assets in math, physics and chemistry through animation engineering on pretty tight deadlines.',
	},
	{
		company: 'Design Bits',
		role: 'Founder',
		start: 'Mar 2023',
		url: 'https://www.youtube.com/@Design_Bits',
		summary:
			'A YouTube channel about computational design. All things art, but make it digital.',
	},
	{
		company: 'Google Summer of Code',
		role: 'Contributor, Processing Foundation',
		start: 'Jun 2022',
		end: 'Sep 2022',
		url: '/blog/gif-encoding',
		summary:
			'Implemented native GIF export for p5.js, a feature the community had asked for for years.',
	},
	{
		company: 'Reducible',
		role: 'Art Direction & Animation Engineering',
		start: 'Nov 2021',
		end: '2023',
		url: 'https://youtube.com/@reducible',
		summary:
			'Helped build a clearer brand identity for the channel and made the animations through code.',
	},
	{
		company: 'Freelance',
		role: 'Animation Engineer, Design Engineer',
		start: 'Sep 2021',
		end: '2023',
		summary:
			'Worked with the Veritasium team making mathematical animations in Manim. Started building websites with Next.js and Svelte, for fun and for my local university.',
	},
	{
		company: 'University of Granada',
		role: 'MSc Data Science',
		start: '2020',
		end: '2021',
		summary:
			'Learned that a linear regression covers 90% of the cases. Got deep into data visualization and design.',
	},
	{
		company: 'University of Jaén',
		role: 'BSc Computer Science',
		start: '2016',
		end: '2020',
		summary:
			'A slow start, then a third year where programming, algorithms and math started to make me happy.',
	},
];

export const featuredProjects = projects.filter((p) => p.featured);
