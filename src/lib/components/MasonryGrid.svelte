<script lang="ts">
	import CalendarDot from 'phosphor-svelte/lib/CalendarDot';
	import Camera from 'phosphor-svelte/lib/Camera';
	import FilmStrip from 'phosphor-svelte/lib/FilmStrip';
	import Aperture from 'phosphor-svelte/lib/Aperture';
	import { MetaTags } from 'svelte-meta-tags';

	// Props: array of image objects
	export let images;

	images.sort((a, b) => {
		const aDate = new Date(a.embeddedMetadata.DateCreated);
		const bDate = new Date(b.embeddedMetadata.DateCreated);

		return bDate - aDate;
	});

	let selectedImage: any | null = null;

	let modal: HTMLDialogElement; // bind this to the modal element

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

	const prefetchImage = (imageSrc: string) => {
		const img = new Image();
		img.src = imageSrc; // Browser starts downloading the image
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<!-- Masonry Grid -->
<div class="masonry-grid">
	{#each images as image}
		<div class="masonry-item mb-4">
			<img
				src={image.url + '&tr=w-0.3,q-30,pr-true'}
				width={image.width * 0.2}
				height={image.height * 0.2}
				on:mouseenter={() => prefetchImage(image.url)}
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
				src={selectedImage?.url + '&tr=w-0.8,q-80,pr-true'}
				width={selectedImage?.width * 0.8}
				height={selectedImage?.height * 0.8}
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
		<button
			on:click={() => {
				selectedImage = null;
			}}>close</button
		>
	</form>
</dialog>

<style>
	.masonry-grid {
		column-count: 4; /* Number of columns (adjust for your layout) */
		column-gap: 10px; /* Space between columns */
	}

	@media (max-width: 1024px) {
		.masonry-grid {
			column-count: 3;
		}
	}

	@media (max-width: 768px) {
		.masonry-grid {
			column-count: 2;
		}
	}

	@media (max-width: 480px) {
		.masonry-grid {
			column-count: 1;
		}
	}

	.masonry-item {
		break-inside: avoid; /* Prevent images from breaking inside columns */
	}
</style>
