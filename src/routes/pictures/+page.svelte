<script lang="ts">
	import MasonryGrid from '$lib/components/MasonryGrid.svelte';
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { scaleTime } from 'd3-scale';
	import { extent } from 'd3-array';
	import { timeDay, utcDay, unixDay } from 'd3-time';
	import { fly } from 'svelte/transition';

	let images;
	let imageDates;
	let timeline;
	let hoveredDate;

	function createTimelineDates(dates) {
		const [minDate, maxDate] = extent(dates);
		const dateArray = [];
		let currentDate = new Date(minDate);
		while (currentDate <= maxDate) {
			dateArray.push(new Date(currentDate).toDateString());
			currentDate.setDate(currentDate.getDate() + 1);
		}
		return dateArray;
	}

	const fetchImages = async () => {
		const res = await fetch('/api/images');

		const data = await res.json();
		images = data;

		images.sort((a, b) => {
			return (
				new Date(a.embeddedMetadata.DateTimeOriginal) -
				new Date(b.embeddedMetadata.DateTimeOriginal)
			);
		});

		console.log('image', new Date(images[0].embeddedMetadata.DateTimeOriginal).toDateString());

		imageDates = images.map((image) => {
			return new Date(image.embeddedMetadata.DateTimeOriginal);
		});
		timeline = createTimelineDates(imageDates);

		imageDates = imageDates.map((date) => {
			return date.toDateString();
		});

		console.log(timeline);
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
	<div
		class="sticky top-10 z-10 mb-2 flex items-center justify-between bg-base-100/80 p-1 backdrop-blur-lg"
		on:mouseleave={() => {
			hoveredDate = null;
		}}
	>
		{#each timeline as day}
			{#if imageDates.includes(day)}
				<div
					on:mouseover={() => {
						hoveredDate = day;
						console.log(hoveredDate);
					}}
					class="relative h-3 w-[1px] bg-primary"
				>
					{#if hoveredDate === day}
						<span
							transition:fly={{ y: 5, duration: 100 }}
							class="absolute -bottom-5 w-32 translate-x-[1px]
								translate-y-[1px] text-xs text-white">{hoveredDate}</span
						>
						<span transition:fly={{ y: 5, duration: 100 }} class="absolute -bottom-5 w-32 text-xs"
							>{hoveredDate}</span
						>
					{/if}
				</div>
			{:else if day.includes('Jan 01')}
				<div class="relative h-5 w-[2px] bg-accent">
					<span class="year absolute -top-5 left-1/2 -translate-x-1/2 text-xs"
						>{day.split(' ')[3]}</span
					>
				</div>
			{:else}
				<div class="h-2 w-[1px] bg-primary/5"></div>
			{/if}
		{/each}
	</div>
	<MasonryGrid {hoveredDate} {images} />
{/if}

<style>
	.year {
		filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.9));
		mix-blend-mode: difference;
	}
</style>
