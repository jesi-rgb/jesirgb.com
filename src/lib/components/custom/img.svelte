<script lang="ts">
	interface Props {
		src?: string;
		alt?: string;
	}

	let { src = '', alt = '' }: Props = $props();
</script>

<img
	class="rounded-xl border-2 border-primary/10 ring ring-primary/40"
	{src}
	{alt}
	loading="lazy"
/>
