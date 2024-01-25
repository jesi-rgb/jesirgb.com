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

<article class="mx-auto mt-24 @container md:max-w-xl xl:max-w-2xl">
	<hrgoup class="flex flex-col space-y-3">
		<div
			role="link"
			tabindex="0"
			on:mouseleave={() => (visible = false)}
			on:mouseenter={() => (visible = true)}
			class="group relative h-full w-full @container"
		>
			{#if visible}
				<a class="opacity-10 transition-all duration-300 hover:opacity-30" href="/blog">
					<div
						in:fly={{ y: -5, duration: 200 }}
						out:fly={{ y: 5, duration: 200 }}
						class="whirly absolute -top-10 right-1/2 translate-x-1/2 font-title text-lg font-[60]"
					>
						blog/
					</div>
				</a>
			{/if}
			<div class="h-8" />
			<h1 class="whirly text-center leading-[.9em] tracking-tighter">
				{data.metadata.title}
			</h1>
		</div>
		<div class="divider" />
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<p class="text-xl text-neutral-400 xl:text-2xl">
				{formatDate(data.metadata.date)}
			</p>
			<div class="flex flex-row space-x-1">
				{#each data.metadata.categories as category}
					<span class="badge badge-primary badge-outline badge-lg">{category}</span>
				{/each}
			</div>
		</div>
	</hrgoup>

	<div
		class="prose prose-xl my-12 text-justify prose-headings:tracking-normal prose-a:transition-colors after:prose-a:content-['_↗'] hover:prose-a:text-accent prose-strong:font-bold"
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
