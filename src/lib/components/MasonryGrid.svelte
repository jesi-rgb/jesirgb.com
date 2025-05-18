<script lang="ts">
	import CalendarDot from 'phosphor-svelte/lib/CalendarDot';
	import Camera from 'phosphor-svelte/lib/Camera';
	import FilmStrip from 'phosphor-svelte/lib/FilmStrip';
	import Aperture from 'phosphor-svelte/lib/Aperture';

	interface Props {
		images: any[];
		hoveredImage: any;
	}
	let { images = $bindable(), hoveredImage = $bindable() }: Props = $props();

	let selectedImage: any | null = $state(null);
	$inspect(selectedImage);

	let modal: HTMLDialogElement; // bind this to the modal element

	const prefetchImage = (imageSrc: string) => {
		const img = new Image();
		img.src = imageSrc; // Browser starts downloading the image
	};
</script>

<!-- Masonry Grid -->
<div onmouseleave={() => (hoveredImage = null)} class="masonry-grid">
	{#each images as image, i}
		<div class="masonry-item mb-3">
			<img
				src={image.url + '&tr=w-0.2,q-30,pr-true'}
				width={image.width * 0.2}
				height={image.height * 0.2}
				onmouseenter={() => {
					hoveredImage = {
						index: i,
						date: new Date(image.embeddedMetadata.DateCreated).toDateString()
					};
					prefetchImage(image.url);
				}}
				loading="lazy"
				alt={image.alt}
				class="border-base-content/30 h-auto w-full transform cursor-pointer rounded-lg border shadow-md transition-transform hover:scale-102"
				onclick={() => {
					selectedImage = image;
					modal.showModal();
				}}
			/>
		</div>
	{/each}
</div>

<!-- Modal for Expanded Image -->
<dialog id="display_image" bind:this={modal} class="modal">
	<div class="modal-box m-0 p-3 pb-4">
		<img
			loading="lazy"
			src={selectedImage?.url + '&tr=pr-true'}
			width={selectedImage?.width}
			height={selectedImage?.height}
			class="border-base-content/30 rounded-lg border
			object-contain shadow-md"
			onclick={() => {
				modal.close();
				selectedImage = null;
			}}
		/>

		<div class="divider"></div>

		<div class="grid grid-cols-2 text-xs md:flex md:grid-cols-none md:flex-row md:justify-between">
			<div class="flex items-center gap-1 slashed-zero tabular-nums">
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
	<form
		method="dialog"
		class="modal-backdrop bg-primary-content/80 backdrop-blur-sm
		transition-all"
	>
		<button
			onclick={() => {
				modal.close();
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
