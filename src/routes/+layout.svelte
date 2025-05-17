<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="subpixel-antialiased selection:bg-primary selection:text-base-100">
	<Container>
		<Header />
		{@render children?.()}
		<Footer />
	</Container>
</div>
