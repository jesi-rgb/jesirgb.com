<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="mx-auto w-[90%] @container md:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl">
	{@render children?.()}
</div>
