<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<section class="prose prose-2xl max-w-xl hover:prose-a:text-accent prose-a:transition-colors">
	{@render children?.()}
</section>
