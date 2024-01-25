<script lang="ts">
	/* export let title; */
	export let link: string;
</script>

<a href={link}>
	<div class="group flex items-start space-x-3">
		<div
			class="flex h-16 w-16 items-center rounded-full border-2 border-neutral-700 bg-base-200 transition-all group-hover:border-primary"
		>
			<div class="mx-auto">
				<slot name="icon" />
			</div>
		</div>
		<div class="flex w-3/4 flex-col transition-colors group-hover:text-base-content">
			<div class="whirly no-prose">
				<slot name="title" />
			</div>
			<p class="not-prose balanced text-xl text-neutral-400">
				<slot name="description" />
			</p>
		</div>
	</div>
</a>

<style>
	.balanced {
		text-wrap: balance;
	}
	.whirly {
		font-family: 'Whirly Birdie';
		font-weight: 70;
		font-variation-settings: 'wdth' 75;
		text-wrap: balance;
	}

	p {
		font-variation-settings: 'opsz' 12;
	}
</style>
