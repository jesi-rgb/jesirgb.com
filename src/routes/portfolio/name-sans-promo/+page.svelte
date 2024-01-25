<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';
</script>

<main class="my-20 text-xl">
	<div class="mb-20">
		<h2 class="whirly text-center">Name Sans Promo</h2>
		<div class="divider"></div>
	</div>

	<p>
		This project is a collaboration between Stephen and me in order to create a set of visual assets
		to accompany the releasse of Name Sans.
	</p>

	<div class="my-10">
		<video
			class="rounded-xl border-2 border-dashed drop-shadow-lg"
			muted
			controls
			loop
			autoplay
			src="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/name_sans_v3.mp4"
		>
			<track kind="captions" />
		</video>
	</div>
</main>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 125;
		text-wrap: balance;
		font-size: 7.5cqw;
	}
</style>
