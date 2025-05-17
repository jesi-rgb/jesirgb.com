<script>
	let liga = $state(0);
</script>

<div class="rounded-xl border border-dashed border-primary bg-base-200 px-5 py-4">
	<main>
		<div class="flex flex-col justify-around text-center md:flex-row md:text-left">
			<div class="no-liga">
				<span class="badge badge-outline">off</span>
				a<span class="opacity-50">ff</span>air
			</div>
			<div class="liga">
				<span class="badge badge-outline items-end">on</span>
				a<span class="opacity-60">ff</span>air
			</div>
		</div>

		<div class="mt-5 text-center">
			<div class="font-bold" style="font-feature-settings: 'liga' {liga}, 'dlig' {liga};">
				Effiel stood
			</div>
			<button
				class="btn btn-outline btn-primary btn-xs"
				onclick={() => {
					if (liga == 0) {
						liga = 1;
					} else {
						liga = 0;
					}
				}}>swap</button
			>
		</div>
	</main>

	<section class="mt-5 flex flex-col justify-between space-x-2 md:flex-row md:items-center">
		<div class="flex space-x-3">
			<div class="badge badge-primary self-start font-bold">CSS</div>
			<div class="text-sm">font-feature-settings: 'liga'&nbsp;{liga},&nbsp;'dlig'&nbsp;{liga};</div>
		</div>
		<main class="self-end font-bold">Literata</main>
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
