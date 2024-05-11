<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';

	let pages = ['voronoi', 'timeline'];
</script>

<MegaTitle>Play ground</MegaTitle>

<main
	class="prose prose-lg prose-headings:tracking-normal prose-a:no-underline prose-a:transition-colors after:prose-a:content-['_↗'] hover:prose-a:text-accent"
>
	<ul>
		{#each pages as page}
			<li>
				<a href="/playground/{page}">{page}</a>
			</li>
		{/each}
	</ul>
</main>
