<script>
	let tnum = 0;
</script>

<div class="border border-dashed border-primary py-3 px-6 rounded-xl bg-base-200">
	<main>
		<div class="flex justify-between flex-col items-end w-min mx-auto text-right">
			<span class="badge badge-outline">off</span>
			<div class="">1,456.99€</div>
			<div class="">12,930.12€</div>
			<div class="divider" />
			<span class="badge badge-outline">on</span>
			<div class="tabular-nums">1,456.99€</div>
			<div class="tabular-nums">12,459.13€</div>
		</div>

		<div class="text-center mt-5">
			<div style="font-feature-settings: 'tnum' {tnum};">1,340,567.67£</div>
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
	<section class="flex flex-col md:flex-row justify-between md:items-center mt-5 space-x-2 code">
		<div class="flex space-x-3">
			<div class="badge badge-primary font-bold">CSS</div>
			<div class="text-sm">font-feature-setting: 'tnum' {tnum};</div>
		</div>
		<main class="self-end">AT Name Sans</main>
	</section>
</div>

<style>
	main {
		font-family: 'AT Name Sans';
	}

	section {
		font-family: 'Recursive';
		font-variation-settings: 'MONO' 1;
	}
</style>
