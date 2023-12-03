<script>
	let liga = 0;
</script>

<div class="border border-dashed border-primary px-5 py-4 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-around flex-col md:flex-row text-center md:text-left">
			<div class="no-liga">
				<span class="badge badge-outline">off</span>
				a<span class="opacity-50">ff</span>air
			</div>
			<div class="liga">
				<span class="badge badge-outline items-end">on</span>
				a<span class="text-white">ff</span>air
			</div>
		</div>

		<div class="text-center mt-5">
			<div class="font-bold" style="font-feature-settings: 'liga' {liga}, 'dlig' {liga};">
				Effiel stood
			</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
				on:click={() => {
					if (liga == 0) {
						liga = 1;
					} else {
						liga = 0;
					}
				}}>swap</button
			>
		</div>
	</main>

	<section class="flex flex-row items-center mt-5 space-x-2">
		<div class="badge badge-primary font-bold self-start">CSS</div>
		<div class="text-sm">font-feature-settings: 'liga'&nbsp;{liga},&nbsp;'dlig'&nbsp;{liga};</div>
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
		font-variation-settings: 'MONO' 1;
	}

	.liga {
		font-variant-ligatures: common-ligatures;
	}

	.no-liga {
		font-variant-ligatures: none;
	}
</style>
