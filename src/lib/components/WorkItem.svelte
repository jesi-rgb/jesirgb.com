<script lang="ts">
	/* export let title; */
	export let link: string;
</script>

<a href={link}>
	<div class="group flex items-start space-x-3">
		<div
			class="flex h-16 w-16 items-center rounded-full border-2 border-base-content/30 transition-all group-hover:border-base-content/80"
		>
			<div class="mx-auto">
				<slot name="icon" />
			</div>
		</div>
		<div class="flex w-3/4 flex-col transition-colors group-hover:text-base-content">
			<div class="whirly">
				<slot name="title" />
			</div>
			<p class="balanced my-0 opacity-60">
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
		font-weight: 75;
		font-variation-settings: 'wdth' 75;
		text-wrap: balance;
	}

	p {
		font-variation-settings: 'opsz' 16;
	}
</style>
