<script lang="ts">
	export let src = '';
	export let alt = '';
</script>

<img
	class="rounded-xl border-2 border-primary/10 ring ring-primary/40"
	{src}
	{alt}
	loading="lazy"
/>
