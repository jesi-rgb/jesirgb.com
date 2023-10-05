<script>
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div id="index" class="selection:bg-accent selection:text-accent-content">
	<Container>
		<Header />
		<slot />
	</Container>
</div>
