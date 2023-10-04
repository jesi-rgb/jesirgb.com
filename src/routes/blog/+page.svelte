<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { formatDate } from '$lib/utils/utils.js';

	export let data;
</script>

<svelte:head>
	<title>Blog - Jesús Rascón</title>
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
				<a class="border-b border-primary max-h-full" href={'/blog/' + post.slug}>
					<li
						class="group py-9 hover:bg-primary-focus pl-5 md:pl-0 hover:md:pl-5 transition-all hover:text-primary-content"
					>
						<p class="font-mono text-sm opacity-40 mb-4">{formatDate(post.date)}</p>
						<p class="font-extralight tracking-tighter text-5xl mb-5">
							{post.title}
						</p>
						<p class="text-xl max-w-[75%]">{post.description}</p>
					</li>
				</a>
			{/each}
		</ul>
	</section>
</Container>
