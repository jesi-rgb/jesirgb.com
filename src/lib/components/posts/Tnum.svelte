<script>
	let tnum = 0;
</script>

<div class="border border-dashed border-primary p-5 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-between flex-col md:flex-row text-center md:text-left">
			<div class="no-calt">
				<span class="opacity-50">(</span>MEGA<span class="opacity-50">)</span>SUPER<span
					class="opacity-50">[</span
				>M<span class="opacity-50">]</span>
			</div>
			<div class="calt">
				<span class="text-white">(</span>MEGA<span class="text-white">)</span>SUPER<span
					class="text-white">[</span
				>M<span class="text-white">]</span>
			</div>
		</div>

		<div class="text-center mt-5">
			<div style="font-feature-settings: 'calt' {tnum};">
				MAIL<span class="text-white">@</span>NICE.com
			</div>
			<button
				class="btn btn-outline btn-xs btn-primary"
				on:click={() => {
					if (tnum == 0) {
						tnum = 1;
					} else {
						tnum = 0;
					}
				}}>swap</button
			>
		</div>
	</main>
	<section class="flex flex-row items-center mt-5 space-x-2 code">
		<div class="badge badge-primary font-bold">CSS</div>
		<div class="text-sm">font-feature-settings: 'calt' {tnum};</div>
	</section>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
	main {
		font-family: 'Inter';
	}
	section {
		font-family: 'Recursive';
	}
	.calt {
		font-feature-settings: 'calt';
	}

	.no-calt {
		font-feature-settings: 'calt' 0;
	}
</style>
