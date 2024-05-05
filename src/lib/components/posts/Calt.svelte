<script>
	let calt = 0;
</script>

<div class="rounded-xl border border-dashed border-primary bg-base-200 px-4 py-3">
	<main>
		<div class="flex flex-col justify-around text-center md:flex-row md:text-left">
			<div class="no-calt">
				<span class="badge badge-outline">OFF</span>
				<span class="opacity-50">(</span>MEGA<span class="opacity-50">)</span>SUPER<span
					class="opacity-50">[</span
				>M<span class="opacity-50">]</span>
			</div>
			<div class="calt">
				<span class="badge badge-outline">ON</span>
				<span class="opacity-60">(</span>MEGA<span class="opacity-60">)</span>SUPER<span
					class="opacity-60">[</span
				>M<span class="opacity-60">]</span>
			</div>
		</div>

		<div class="mt-5 text-center">
			<div style="font-feature-settings: 'calt' {calt};">
				3<span class="opacity-60">x</span>9 12<span class="opacity-60">:</span>34
				<span> -> </span>
			</div>
			<button
				class="btn btn-outline btn-primary btn-xs"
				on:click={() => {
					if (calt == 0) {
						calt = 1;
					} else {
						calt = 0;
					}
				}}>swap</button
			>
		</div>
	</main>
	<section class="code mt-5 flex flex-col justify-between space-x-2 md:flex-row md:items-center">
		<div class="flex space-x-3">
			<div class="badge badge-primary self-start font-bold">CSS</div>
			<div class="text-sm">font-feature-settings: 'calt'&nbsp;{calt};</div>
		</div>
		<main class="self-end">Inter</main>
	</section>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
	main {
		font-family: 'Inter';
	}
	section {
		font-family: 'Recursive';
		font-variation-settings: 'MONO' 1;
	}
	.calt {
		font-feature-settings: 'calt';
	}

	.no-calt {
		font-feature-settings: 'calt' 0;
	}
</style>
