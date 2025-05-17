<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<pre class="recursive">
	{@render children?.()}
</pre>

<style>
	pre {
		font-variation-settings: 'MONO' 1, 'CASL' 0.5;
	}
</style>
