<script lang="ts">
	import MasonryGrid from '$lib/components/MasonryGrid.svelte';
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { extent } from 'd3-array';
	import { fly } from 'svelte/transition';

	let images;
	let imageDates;
	let timeline;
	let hoveredImage;

	function createTimelineDates(dates) {
		const [minDate, maxDate] = extent(dates);
		const dateArray = [];
		let currentDate = new Date(minDate);
		while (currentDate <= maxDate) {
			const dateStr = currentDate.toDateString();
			dateArray.push(dateStr);
			currentDate.setDate(currentDate.getDate() + 1);
		}
		return dateArray;
	}

	const fetchImages = async () => {
		const res = await fetch('/api/images');

		const data = await res.json();
		images = data;

		images.sort((a, b) => {
			const aDate = new Date(a.embeddedMetadata.DateCreated);
			const bDate = new Date(b.embeddedMetadata.DateCreated);

			return bDate - aDate;
		});

		imageDates = images.map((image, i) => {
			return new Date(image.embeddedMetadata.DateTimeOriginal);
		});
		timeline = createTimelineDates(imageDates);

		imageDates = imageDates.map((date, i) => {
			return { index: i, date: date.toDateString() };
		});
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
		class="bg-base-100/80 sticky top-10 z-10 mb-2 flex h-14 items-center justify-between p-1 backdrop-blur-lg"
	>
		{#each timeline as day}
			{#if imageDates.map((e) => e.date).includes(day)}
				<div
					class="relative h-3 w-[1px] duration-200 {hoveredImage && hoveredImage.date === day
						? 'bg-accent h-4 w-[3px]'
						: 'bg-primary'}"
					title={day}
				>
					{#if hoveredImage && hoveredImage.date === day}
						<span
							transition:fly={{ y: -5, duration: 100 }}
							class="hovered-date absolute -bottom-5 left-1/2
							w-max -translate-x-1/2
						text-xs"
						>
							{day.split(' ').slice(1).join(' ')}
						</span>
					{/if}
				</div>
			{:else if day.includes('Jan 01')}
				<div class="bg-accent relative h-5 w-[2px]">
					<span
						class="absolute -top-4 left-1/2 -translate-x-1/2
						text-xs">{day.split(' ')[3]}</span
					>
				</div>
			{:else}
				<div class="bg-primary/5 h-2 w-[1px]"></div>
			{/if}
		{/each}
	</div>
	<MasonryGrid bind:hoveredImage {images} />
{/if}
