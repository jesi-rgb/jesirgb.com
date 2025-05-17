<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class="whirly not-prose mt-24 text-center font-thin leading-none tracking-tight @container md:mt-32"
>
	{@render children?.()}
</div>
<div class="divider-base-content/50 divider mb-12"></div>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-weight: 85;
		font-variation-settings: 'wdth' 110;
		font-size: 14cqw;
	}
</style>
