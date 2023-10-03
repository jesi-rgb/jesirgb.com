<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>Blog - Jesús Rascón</title>
</svelte:head>

<Container>
	<div class="text-4xl xl:text-7xl font-bold mt-32">Blog</div>
	<p class="text-xl mt-5">Writing some thoughts out loud.</p>
	<section class="mx-auto my-20">
		<ul class="[&_li:last-child]:border-0">
			{#each data.posts as post}
				<li
					class="group border-b-[0.3px] py-9 border-opacity-30 hover:bg-primary-focus hover:px-5 transition-all hover:text-primary-content"
				>
					<a href={'/blog/' + post.slug}>
						<p class="font-extralight tracking-tighter text-5xl mb-5">
							{post.title}
						</p>
						<p class="text-xl">{post.description}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</Container>
