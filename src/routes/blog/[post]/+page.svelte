<script lang="ts">
	import { formatDate } from '$lib/utils/utils.js';
	import { fly } from 'svelte/transition';
	import { MetaTags } from 'svelte-meta-tags';
	import type { Post } from '$lib/types';

	export let data;
	let metadata: Post = data.metadata;
	let visible = false;
</script>

<MetaTags
	keywords={metadata.categories}
	title={metadata.title}
	description={metadata.description}
	openGraph={{
		type: 'article',
		url: metadata.slug,
		title: metadata.title,
		description: metadata.description,
		article: {
			tags: metadata.categories,
			publishedTime: metadata.date
		}
	}}
/>

<article class="@container md:max-w-xl xl:max-w-2xl mx-auto mt-24">
	<hrgoup class="flex flex-col space-y-3">
		<div
			role="link"
			tabindex="0"
			on:mouseleave={() => (visible = false)}
			on:mouseenter={() => (visible = true)}
			class="group h-full w-full relative @container"
		>
			{#if visible}
				<a class="opacity-10 hover:opacity-30 transition-all duration-300" href="/blog">
					<div
						in:fly={{ y: -5, duration: 200 }}
						out:fly={{ y: 5, duration: 200 }}
						class="absolute right-1/2 font-title font-[60] translate-x-1/2 -top-10 whirly text-lg"
					>
						blog/
					</div>
				</a>
			{/if}
			<div class="h-8" />
			<h1 class="whirly leading-[.9em] text-center tracking-tighter">
				{data.metadata.title}
			</h1>
		</div>
		<div class="divider" />
		<div class="flex flex-col md:flex-row gap-4 justify-between items-center">
			<p class="text-xl xl:text-2xl text-neutral-400">
				{formatDate(data.metadata.date)}
			</p>
			<div class="flex flex-row space-x-1">
				{#each data.metadata.categories as category}
					<span class="badge badge-outline badge-lg badge-primary">{category}</span>
				{/each}
			</div>
		</div>
	</hrgoup>

	<div
		class="prose prose-zinc text-justify prose-xl prose-headings:text-left hover:prose-a:text-primary prose-a:transition-colors prose-strong:font-bold my-12"
	>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 125;
		text-wrap: balance;
		font-size: 10cqw;
	}
</style>
