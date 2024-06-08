<script lang="ts">
	import { fade } from 'svelte/transition';
	export let img: string;
	export let selectedImage: string | null;
</script>

<div class="image-wrapper">
	<img
		class="image"
		loading="lazy"
		on:click={() => {
			selectedImage = img;
		}}
		src={img}
		crossorigin="anonymous"
		alt="random img"
	/>
</div>
