<script lang="ts">
	import CalendarDot from 'phosphor-svelte/lib/CalendarDot';
	import Camera from 'phosphor-svelte/lib/Camera';
	import FilmStrip from 'phosphor-svelte/lib/FilmStrip';
	import Aperture from 'phosphor-svelte/lib/Aperture';
	import ExifReader from 'exifreader';

	export let images = [];
	export let hoveredImage: string | null;

	let selectedImage: any | null = null;
	$: {
		console.log(selectedImage);
	}

	let modal: HTMLDialogElement; // bind this to the modal element

	const prefetchImage = (imageSrc: string) => {
		const img = new Image();
		img.src = imageSrc; // Browser starts downloading the image
	};

	async function getExifMetadata(url: string) {
		const tags = ExifReader.load(url);
		delete tags.MakerNote;

		return tags;
	}

	async function handleLoad(event: Event) {
		const imgElement = event.target;
		const imageUrl = imgElement?.src;

		// Find the corresponding item in images
		const itemIndex = images.findIndex((item) => item.url === imageUrl);

		if (itemIndex === -1) {
			console.warn('Loaded image URL not found in images:', imageUrl);
			return; // Should not happen if initialized correctly
		}

		try {
			const tags = await ExifReader.load(imageUrl);

			images[itemIndex].metadata = tags;
			images[itemIndex].width = tags['Image Width']?.value;
			images[itemIndex].height = tags['Image Height']?.value;
			images[itemIndex].createdAt = new Date(tags.DateCreated?.description);

			// console.log(`Metadata loaded for ${imageUrl}`, tags);
		} catch (error) {
			// console.error(`Error extracting metadata for ${imageUrl}:`, error);
		}
	}
</script>

<!-- Masonry Grid -->
<div
	on:mouseleave={() => {
		hoveredImage = null;
		selectedImage = null;
	}}
	class="masonry-grid"
	role="region"
	aria-label="Photo gallery"
>
	{#each images as image, i}
		<div class="masonry-item mb-4">
			<!-- Using a button wrapper for better accessibility -->
			<button
				class="w-full border-0 bg-transparent p-0"
				on:click={() => {
					selectedImage = image;
					modal.showModal();
				}}
				on:mouseenter={() => (hoveredImage = image)}
				aria-label={`View ${image.alt || 'photography'} in modal`}
			>
				<img
					src={image.url}
					width={image.width}
					height={image.height}
					on:load={handleLoad}
					loading="lazy"
					alt={image.alt || 'Photography'}
					class="h-auto w-full transform rounded-lg border border-base-content/30 shadow-md transition-transform hover:scale-105"
				/>
			</button>
		</div>
	{/each}
</div>

<!-- Modal for Expanded Image -->
<dialog id="display_image" bind:this={modal} class="modal w-screen" aria-labelledby="modal-title">
	<div class="modal-box m-0 p-3 pb-4">
		<img
			src={selectedImage?.url}
			alt={selectedImage?.alt || 'Expanded photography'}
			class="w-screen rounded-lg border border-base-content/30
			object-contain shadow-md"
		/>

		<div class="divider"></div>

		{#if selectedImage}
			<div
				class="grid grid-cols-2 text-xs md:flex md:grid-cols-none md:flex-row md:justify-between"
				id="modal-title"
			>
				<div class="flex items-center gap-1 slashed-zero tabular-nums">
					<CalendarDot class="opacity-70" size={15} aria-hidden="true" />
					<span>{selectedImage.createdAt.toLocaleString('es-ES')}</span>
				</div>

				<div class="flex items-center gap-1">
					<Camera class="opacity-70" size={15} aria-hidden="true" />
					<span>{selectedImage?.metadata.Model.description}</span>
				</div>

				<div class="flex items-center gap-1">
					<FilmStrip class="opacity-70" size={15} aria-hidden="true" />
					<span
						>ISO:
						{selectedImage?.metadata.ISOSpeedRatings.description}</span
					>
				</div>

				<div class="flex items-center gap-1">
					<Aperture class="opacity-70" size={15} aria-hidden="true" />
					<span>ƒ: {parseFloat(selectedImage?.metadata.ApertureValue.description).toFixed(1)}</span>
				</div>
			</div>
		{/if}
	</div>
	<form
		method="dialog"
		class="modal-backdrop bg-primary-content/80 backdrop-blur-md transition-all"
	>
		<button
			aria-label="Close image modal"
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

	.hovered {
		border-color: #fbbf24;
		box-shadow: 0 0 20px #fbbf24;
	}
</style>
