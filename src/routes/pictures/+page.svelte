<script lang="ts">
	import MasonryGrid from '$lib/components/MasonryGrid.svelte';
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { onMount } from 'svelte';

	let images;

	const fetchImages = async () => {
		const res = await fetch('/api/images');
		const data = await res.json();
		images = data;
	};

	$: console.log(images);

	onMount(() => {
		fetchImages();
	});
</script>

<MegaTitle>Pictures</MegaTitle>

{#if images}
	<MasonryGrid {images} />
{/if}
