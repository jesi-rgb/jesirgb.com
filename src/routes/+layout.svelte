<script>
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="subpixel-antialiased selection:bg-primary selection:text-base-100">
	<Container>
		<Header />
		<slot />
		<Footer />
	</Container>
</div>
