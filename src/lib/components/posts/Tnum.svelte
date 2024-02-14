<script>
	let tnum = 0;
</script>

<div class="rounded-xl border border-dashed border-primary bg-base-200 px-6 py-3">
	<main>
		<div class="mx-auto flex w-min flex-col items-end justify-between text-right">
			<span class="badge badge-outline">off</span>
			<div class="">1,456.99€</div>
			<div class="">12,459.13€</div>
			<div class="divider" />
			<span class="badge badge-outline">on</span>
			<div class="tabular-nums">1,456.99€</div>
			<div class="tabular-nums">12,459.13€</div>
		</div>

		<div class="mt-5 text-center">
			<div style="font-feature-settings: 'tnum' {tnum};">1,340,567.67£</div>
			<button
				class="btn btn-outline btn-primary btn-xs"
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
	<section class="code mt-5 flex flex-col justify-between space-x-2 md:flex-row md:items-center">
		<div class="flex space-x-3">
			<div class="badge badge-primary self-start font-bold">CSS</div>
			<div class="text-sm">font-feature-setting: 'tnum' {tnum};</div>
		</div>
		<main class="self-end font-sans">AT Name Sans</main>
	</section>
</div>

<style>
	section {
		font-family: 'Recursive';
		font-variation-settings: 'MONO' 1;
	}
</style>
