<script lang="ts">
	interface Props {
		/* export let title; */
		link: string;
		icon?: import('svelte').Snippet;
		title?: import('svelte').Snippet;
		description?: import('svelte').Snippet;
	}

	let { link, icon, title, description }: Props = $props();
</script>

<a href={link}>
	<div class="group flex items-start space-x-3">
		<div
			class="border-base-content/30 group-hover:border-base-content/80 flex h-16 w-16 items-center rounded-full border-2 transition-all"
		>
			<div class="mx-auto">
				{@render icon?.()}
			</div>
		</div>
		<div class="group-hover:text-base-content flex w-3/4 flex-col transition-colors">
			<div class="whirly">
				{@render title?.()}
			</div>
			<p style="margin-top: 0;" class="balanced my-0 opacity-60">
				{@render description?.()}
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
