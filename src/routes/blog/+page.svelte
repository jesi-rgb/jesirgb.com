<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { formatDate } from '$lib/utils/utils.js';

	export let data;
</script>

<svelte:head>
	<title>Blog - Jesús Rascón</title>

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>
</svelte:head>

<Container>
	<div
		class="text-8xl md:text-9xl font-thin text-center tracking-tighter mt-24 md:mt-32 bg-gradient-to-t"
	>
		Blog
	</div>
	<div class="divider" />
	<section class="mx-auto my-20">
		<ul class="[&_li:last-child]:border-0">
			{#each data.posts as post}
				<li
					class="group border-b-[0.1px] py-9 border-opacity-10 hover:bg-primary-focus pl-5 md:pl-0 hover:md:pl-5 transition-all hover:text-primary-content"
				>
					<a href={'/blog/' + post.slug}>
						<p class="font-mono text-sm opacity-40 mb-4">{formatDate(post.date)}</p>
						<p class="font-extralight tracking-tighter text-5xl mb-5">
							{post.title}
						</p>
						<p class="text-xl max-w-[75%]">{post.description}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</Container>
