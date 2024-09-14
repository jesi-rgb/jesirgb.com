<script lang="ts">
	import MasonryGrid from '$lib/components/MasonryGrid.svelte';
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';

	let images;

	const fetchImages = async () => {
		const res = await fetch('/api/images');
		const data = await res.json();
		images = data;
	};

	onMount(() => {
		fetchImages();
	});

	let thumbUrl = new URL('https://www.jesirgb.com/blog/thumbnails');
	thumbUrl.searchParams.append('title', 'Pictures');
	thumbUrl.searchParams.append(
		'desc',
		'Selected pictures from Jesús Rascón, captured and edited on the go.'
	);
</script>

<MetaTags
	keywords={['pictures', 'photography', 'iphone']}
	title="Pictures — Jesús Rascón"
	description="Selected pictures from Jesús Rascón, captured and edited on the go."
	twitter={{
		handle: '@jesi_rgb',
		cardType: 'summary_large_image',
		title: 'Pictures — Jesús Rascón',
		description: 'Selected pictures from Jesús Rascón, captured and edited on the go.',
		image: thumbUrl.toString(),
		imageAlt: 'Pictures'
	}}
	openGraph={{
		type: 'article',
		url: thumbUrl.toString(),
		title: 'Pictures',
		images: [
			{
				url: thumbUrl.toString(),
				width: 800,
				height: 600
			}
		],
		description: 'Selected pictures from Jesús Rascón, captured and edited on the go.',
		article: {
			tags: ['pictures', 'photography', 'iphone']
		}
	}}
/>

<MegaTitle>Pictures</MegaTitle>

{#if images}
	<MasonryGrid {images} />
{/if}
