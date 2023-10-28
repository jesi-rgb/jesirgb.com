<script lang="ts">
	/* export let title; */
	export let link: string;
</script>

<a href={link}>
	<div class="flex items-start space-x-3 group">
		<div
			class="h-16 w-16 rounded-full flex items-center border-neutral-700 border-2 bg-base-200 group-hover:border-primary transition-all"
		>
			<div class="mx-auto">
				<slot name="icon" />
			</div>
		</div>
		<div class="w-3/4 flex flex-col group-hover:text-base-content transition-colors">
			<div class="whirly no-prose">
				<slot name="title" />
			</div>
			<p class="not-prose text-xl text-neutral-400">
				<slot name="description" />
			</p>
		</div>
	</div>
</a>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-weight: 70;
		font-variation-settings: 'wdth' 75;
		text-wrap: balance;
	}
</style>
