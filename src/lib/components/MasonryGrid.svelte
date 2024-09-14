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
		console.log(bDate);

		return bDate - aDate;
	});

	let selectedImage: any | null = null;
	$: console.log(images);

	let modalVisible = false; // reactive boolean to toggle modal
	let modal; // bind this to the modal element

	// Reactive statement: toggles modal visibility when selectedImage changes
	$: modalVisible = selectedImage !== null;

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
<div class="column-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
	{#each images as image}
		<div class="mb-4">
			<img
				src={image.url}
				alt={image.alt}
				class="h-auto w-full transform cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105"
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
				src={selectedImage?.url}
				alt={selectedImage?.alt}
				class="h-full w-full rounded-lg object-contain shadow-xl"
				on:click={modal.close()}
			/>

			<div class="my-3 flex flex-row justify-between text-xs">
				<div class="flex items-center gap-1">
					<CalendarDot size={15} />
					{new Date(selectedImage?.embeddedMetadata.DateTimeOriginal).toLocaleString('es-ES')}
				</div>

				<div class="flex items-center gap-1">
					<Camera size={15} />
					{selectedImage?.embeddedMetadata.Model}
				</div>

				<div class="flex items-center gap-1">
					<FilmStrip size={15} />
					ISO: {selectedImage?.embeddedMetadata.ISO}
				</div>

				<div class="flex items-center gap-1">
					<Aperture size={15} />
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
</style>
