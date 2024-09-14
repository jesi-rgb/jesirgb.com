<script lang="ts">
	import CalendarDot from 'phosphor-svelte/lib/CalendarDot';
	import Camera from 'phosphor-svelte/lib/Camera';
	import FilmStrip from 'phosphor-svelte/lib/FilmStrip';
	import Aperture from 'phosphor-svelte/lib/Aperture';

	// Props: array of image objects
	export let images;

	images.sort((a, b) => {
		const aDate = new Date(a.embeddedMetadata.DateCreated);
		const bDate = new Date(b.embeddedMetadata.DateCreated);

		return bDate - aDate;
	});

	let selectedImage: any | null = null;

	let modal; // bind this to the modal element

	// Close modal on Escape key press using Svelte's reactivity
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && selectedImage) {
			closeModal();
		}
	};

	// Close the modal
	const closeModal = () => {
		selectedImage = null;
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<!-- Masonry Grid -->
<div class="masonry-grid">
	{#each images as image}
		<div class="masonry-item mb-4">
			<img
				src={image.url + '&q=10&pr-true'}
				loading="lazy"
				alt={image.alt}
				class="h-auto w-full transform cursor-pointer rounded-lg border border-base-content/30 shadow-md transition-transform hover:scale-105"
				on:click={() => {
					selectedImage = image;
					modal.showModal();
				}}
			/>
		</div>
	{/each}
</div>

<!-- Modal for Expanded Image -->
<dialog id="display_image" bind:this={modal} class="modal">
	<div class="modal-box">
		<div class="">
			<img
				loading="lazy"
				src={selectedImage?.url + '&q=40&pr=true'}
				class="h-full w-full rounded-lg border border-base-content/30 object-contain shadow-md"
				on:click={() => {
					modal.close();
					selectedImage = null;
				}}
			/>

			<div class="divider"></div>

			<div
				class="grid grid-cols-2 text-xs md:flex md:grid-cols-none md:flex-row md:justify-between"
			>
				<div class="flex items-center gap-1">
					<CalendarDot class="opacity-70" size={15} />
					{new Date(selectedImage?.embeddedMetadata.DateTimeOriginal).toLocaleString('es-ES')}
				</div>

				<div class="flex items-center gap-1">
					<Camera class="opacity-70" size={15} />
					{selectedImage?.embeddedMetadata.Model}
				</div>

				<div class="flex items-center gap-1">
					<FilmStrip class="opacity-70" size={15} />
					ISO: {selectedImage?.embeddedMetadata.ISO}
				</div>

				<div class="flex items-center gap-1">
					<Aperture class="opacity-70" size={15} />
					ƒ: {selectedImage?.embeddedMetadata.FNumber}
				</div>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<style>
	/* Prevent images from breaking between columns for the masonry layout */
	.columns-1 > div,
	.columns-2 > div,
	.columns-3 > div,
	.columns-4 > div {
		break-inside: avoid-column;
	}
	.masonry-grid {
		column-count: 4; /* Number of columns (adjust for your layout) */
		column-gap: 16px; /* Space between columns */
	}

	.masonry-item {
		break-inside: avoid; /* Prevent images from breaking inside columns */
		margin-bottom: 16px; /* Spacing between items */
	}
</style>
