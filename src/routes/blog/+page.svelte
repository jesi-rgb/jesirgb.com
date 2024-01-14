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
				class="group py-9 border-b-[0.1px] border-opacity-25 border-primary hover:shadow-black hover:shadow-xl hover:bg-primary pl-5 md:pl-0 hover:md:pl-5 transition-all hover:text-primary-content"
			>
				<a class="h-full w-full" href={'/blog/' + post.slug}>
					<p class="font-semibold text-sm opacity-40 mb-4">{formatDate(post.date)}</p>
					<p class="font-extralight tracking-tighter text-5xl mb-5">
						{post.title}
					</p>
					<p class="text-xl max-w-[75%] opacity-60">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
