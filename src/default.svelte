<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<script lang="ts" module>
	import { img, code, pre } from '$lib/components/custom';

	export { img, code, pre };
</script>

{@render children?.()}
