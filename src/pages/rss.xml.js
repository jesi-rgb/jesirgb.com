import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { copy } from '../data/copy';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: copy.site.title,
		description: copy.site.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}
