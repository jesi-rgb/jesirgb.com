<script>
	let calt = 0;
</script>

<div class="border border-dashed border-primary py-3 px-4 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-around flex-col md:flex-row text-center md:text-left">
			<div class="no-calt">
				<span class="badge badge-outline">OFF</span>
				<span class="opacity-50">(</span>MEGA<span class="opacity-50">)</span>SUPER<span
					class="opacity-50">[</span
				>M<span class="opacity-50">]</span>
			</div>
			<div class="calt">
				<span class="badge badge-outline">ON</span>
				<span class="text-white">(</span>MEGA<span class="text-white">)</span>SUPER<span
					class="text-white">[</span
				>M<span class="text-white">]</span>
			</div>
		</div>

		<div class="text-center mt-5">
			<div style="font-feature-settings: 'calt' {calt};">
				3<span class="text-white">x</span>9 12<span class="text-white">:</span>34
				<span> -> </span>
			</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
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
	<section class="flex flex-row items-center mt-5 space-x-2 code">
		<div class="badge badge-primary font-bold self-start">CSS</div>
		<div class="text-sm">font-feature-settings: 'calt'&nbsp;{calt};</div>
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
