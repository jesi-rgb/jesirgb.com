<script>
	let frac = $state(0);
</script>

<div class="border border-dashed border-primary py-3 px-4 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-around flex-col md:flex-row text-center md:text-left">
			<div class="no-frac text-4xl">1/3</div>
			<div class="frac text-4xl">1/3</div>
		</div>

		<div class="text-center mt-5">
			<div style="font-feature-settings: 'frac' {frac};" class="text-4xl">2/8</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
				onclick={() => {
					if (frac == 0) {
						frac = 1;
					} else {
						frac = 0;
					}
				}}>swap</button
			>
		</div>
	</main>
	<section class="flex flex-col justify-between md:flex-row md:items-center mt-5 space-x-2 code">
		<div class="flex space-x-3">
			<div class="badge badge-primary font-bold self-start">CSS</div>
			<div class="text-sm">font-feature-settings: 'frac'&nbsp;{frac};</div>
		</div>
		<main class="self-end">Recursive</main>
	</section>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');
	main {
		font-family: 'Recursive';
	}
	section {
		font-family: 'Recursive';
		font-variation-settings: 'MONO' 1;
	}
	.frac {
		font-feature-settings: 'frac';
	}

	.no-frac {
		font-feature-settings: 'frac' 0;
	}
</style>
