<script lang="ts">
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { formatDate } from '$lib/utils/utils.js';
	import { MetaTags } from 'svelte-meta-tags';

	export let data;
</script>

<MetaTags title="Blog - Jesús Rascón" description="Developing ideas and exploring my inner self." />

<MegaTitle>Blog</MegaTitle>
<section class="mx-auto my-20">
	<ul class="[&_li:last-child]:border-0">
		{#each data.posts as post}
			<li
				class="group border-b-[0.1px] border-primary border-opacity-25 py-9 pl-5 transition-all hover:bg-primary hover:text-primary-content hover:shadow-xl hover:shadow-black md:pl-0 hover:md:pl-5"
			>
				<a class="h-full w-full" href={'/blog/' + post.slug}>
					<p class="mb-4 text-sm font-semibold opacity-40">{formatDate(post.date)}</p>
					<h1 class="mb-5 text-5xl font-[100] tracking-tight md:font-[70]">
						{post.title}
					</h1>
					<p class="max-w-[75%] text-xl opacity-60">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	h1 {
		font-variation-settings: 'opsz' 48;
	}
</style>
