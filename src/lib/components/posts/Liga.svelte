<script>
	let liga = 'common-ligatures';
</script>

<div class="border border-dashed border-primary p-5 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-around flex-col md:flex-row text-center md:text-left">
			<div class="no-liga">affair</div>
			<div class="liga">affair</div>
		</div>

		<div class="text-center mt-5">
			<div class="font-bold" style="font-variant-ligatures: {liga};">Effiel</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
				on:click={() => {
					if (liga == 'common-ligatures') {
						liga = 'none';
					} else {
						liga = 'common-ligatures';
					}
				}}>swap</button
			>
		</div>
	</main>

	<section class="flex flex-row items-center mt-5 space-x-2">
		<div class="badge badge-primary font-bold">CSS</div>
		<div class="text-sm">font-variant-ligatures: '{liga}';</div>
	</section>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&display=swap');
	main {
		font-family: 'Literata';
		font-weight: 400;
	}

	section {
		font-family: 'Recursive';
	}

	.liga {
		font-variant-ligatures: common-ligatures;
	}

	.no-liga {
		font-variant-ligatures: none;
	}
</style>
