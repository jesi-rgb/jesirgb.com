<script>
	let ssalt = $state(0);
</script>

<div class="border border-dashed border-primary py-3 px-4 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-around flex-col md:flex-row text-center md:text-left">
			<div class="no-ss">Satoshi is great</div>
			<div class="ss">Satoshi is great</div>
		</div>

		<div class="text-center mt-5 text-3xl">
			<div style="font-feature-settings:'ss01' {ssalt}, 'ss02' {ssalt}, 'ss03' {ssalt};">
				Satoshi is great
			</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
				onclick={() => {
					if (ssalt == 0) {
						ssalt = 1;
					} else {
						ssalt = 0;
					}
				}}>swap</button
			>
		</div>
	</main>
	<section class="flex flex-col justify-between md:flex-row md:items-center mt-5 space-x-2 code">
		<div class="flex space-x-3">
			<div class="badge badge-primary font-bold self-start">CSS</div>
			<div class="text-sm">
				font-feature-settings: 'ss01'&nbsp;{ssalt}, 'ss02'&nbsp;{ssalt}, 'ss03'&nbsp;{ssalt};
			</div>
		</div>
		<main style="font-family: Satoshi;" class="self-end text-2xl">Satoshi</main>
	</section>
</div>

<style>
	@import url('https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap" rel="stylesheet');
	main {
		font-family: 'Satoshi';
	}
	section {
		font-family: 'Recursive';
		font-variation-settings: 'MONO' 1;
	}
	.ss {
		font-feature-settings: 'ss01', 'ss02', 'ss03';
	}

	.no-ss {
		font-feature-settings: 'ss01' 0, 'ss02' 0, 'ss03' 0;
	}
</style>
