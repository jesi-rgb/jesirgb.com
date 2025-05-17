<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<code class="mx-0 px-0">
	{@render children?.()}
</code>

<style>
	code {
		padding-left: 0.3em;
		padding-right: 0.3em;
		font-variation-settings:
			'MONO' 1,
			'CASL' 0.4;
	}
</style>
