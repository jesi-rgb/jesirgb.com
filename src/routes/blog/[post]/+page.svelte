<script lang="ts">
	import { formatDate } from '$lib/utils/utils.js';
	import { fly } from 'svelte/transition';
	import { MetaTags } from 'svelte-meta-tags';
	import type { Post } from '$lib/types';

	export let data;
	let metadata: Post = data.metadata;

	console.log(metadata);
	let visible = false;

	let url = new URL('https://jesirgb.com/blog/thumbnails');
	url.searchParams.append('title', metadata.title);
	url.searchParams.append('desc', metadata.description);
</script>

<MetaTags
	keywords={metadata.categories}
	title={metadata.title}
	description={metadata.description}
	twitter={{
		handle: '@jesi_rgb',
		cardType: 'summary_large_image',
		title: metadata.title,
		description: metadata.description,
		image: url,
		imageAlt: metadata.title
	}}
	openGraph={{
		type: 'article',
		url: metadata.slug,
		title: metadata.title,
		images: [
			{
				url: url,
				width: 800,
				height: 600
			}
		],

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
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
			<div class="flex flex-col text-center md:text-left">
				<p class="text-xl text-neutral-400 xl:text-2xl">
					{formatDate(data.metadata.date)}
				</p>
				<p class="text-left text-xs text-neutral-400 xl:text-base">
					Last updated: {formatDate(data.metadata.lastUpdated)}
				</p>
			</div>
			<div class="flex flex-row space-x-1">
				{#each data.metadata.categories as category}
					<span class="badge badge-primary badge-outline badge-lg bg-primary/10">{category}</span>
				{/each}
			</div>
		</div>
	</hrgoup>

	<div
		class="prose my-12 md:prose-lg prose-headings:tracking-normal prose-a:transition-colors after:prose-a:content-['_↗'] hover:prose-a:text-accent prose-strong:font-bold"
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
