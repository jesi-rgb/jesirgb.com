<script>
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import "../app.pcss";
</script>

<div class="selection:bg-accent selection:text-accent-content">
	<Container>
		<Header></Header>
		<slot></slot>
		<Footer></Footer>
	</Container>
</div>
