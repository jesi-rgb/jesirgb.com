<script lang="ts">
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { formatDate } from '$lib/utils/utils.js';
	import { MetaTags } from 'svelte-meta-tags';

	export let data;
</script>

<MetaTags title="Blog - Jesús Rascón" description="Developing ideas and exploring my inner self." />

<MegaTitle>Blog</MegaTitle>
<section class="mx-auto my-20">
	<ul class="[&_a:last-child]:border-0">
		{#each data.posts as post}
			<a class="group h-full w-full" href={'/blog/' + post.slug}>
				<li
					class="border-b-[0.1px] border-primary border-opacity-25 py-9 pl-2 pr-1 transition-all hover:bg-primary hover:text-primary-content hover:shadow-xl hover:shadow-primary/10 md:pl-5 hover:md:pl-7"
				>
					<p class="mb-4 text-sm font-semibold opacity-40">{formatDate(post.date)}</p>
					<h1 class="mb-5 text-4xl font-[150] tracking-tight md:text-5xl md:font-[70]">
						{post.title}
					</h1>
					<p class="max-w-[75%] text-lg opacity-60 md:text-xl">{post.description}</p>
				</li>
			</a>
		{/each}
	</ul>
</section>

<style>
	h1 {
		font-variation-settings: 'opsz' 48;
	}
</style>
