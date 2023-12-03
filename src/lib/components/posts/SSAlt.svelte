<script>
	let ssalt = 0;
</script>

<div class="border border-dashed border-primary py-3 px-4 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-around flex-col md:flex-row text-center md:text-left">
			<div class="no-ss">Joan Regular</div>
			<div class="ss">Joan Regular</div>
		</div>

		<div class="text-center mt-5">
			<div style="font-feature-settings: 'calt' {ssalt};">
				3<span class="text-white">x</span>9 12<span class="text-white">:</span>34
				<span> -> </span>
			</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
				on:click={() => {
					if (ssalt == 0) {
						ssalt = 1;
					} else {
						ssalt = 0;
					}
				}}>swap</button
			>
		</div>
	</main>
	<section class="flex flex-row items-center mt-5 space-x-2 code">
		<div class="badge badge-primary font-bold self-start">CSS</div>
		<div class="text-sm">font-feature-settings: 'calt'&nbsp;{ssalt};</div>
	</section>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Joan&display=swap');
	main {
		font-family: 'Joan';
	}
	section {
		font-family: 'Recursive';
		font-variation-settings: 'MONO' 1;
	}
	.ss {
		font-feature-settings: 'ss10';
	}

	.no-ss {
		font-feature-settings: 'ss10' 0;
	}
</style>
