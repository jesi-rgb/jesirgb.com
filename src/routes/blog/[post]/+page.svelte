<script lang="ts">
	import { formatDate } from '$lib/utils/utils.js';
	import { fly } from 'svelte/transition';
	import { MetaTags } from 'svelte-meta-tags';
	import type { Post } from '$lib/types';

	import { PUBLIC_GH_TOKEN } from '$env/static/public';
	import { page } from '$app/state';

	let { data } = $props();
	let metadata: Post = data.metadata;

	let visible = $state(false);

	let url = new URL('https://jesirgb.com/blog/thumbnails');
	url.searchParams.append('title', metadata.title);
	url.searchParams.append('desc', metadata.description);

	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${PUBLIC_GH_TOKEN}`
	};

	let lastUpdated;

	async function getLastUpdated() {
		const luPromise = await fetch(
			`https://api.github.com/repos/jesi-rgb/jesirgb.com/commits?path=src/posts/${page.params.post}.md`,
			{ method: 'GET', headers: headers }
		);

		lastUpdated = (await luPromise.json())[0].commit.author.date;

		console.log(lastUpdated);
		if (lastUpdated === undefined) {
			return undefined;
		} else {
			return lastUpdated;
		}
	}
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
		image: url.toString(),
		imageAlt: metadata.title
	}}
	openGraph={{
		type: 'article',
		url: metadata.slug,
		title: metadata.title,
		images: [
			{
				url: url.toString(),
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

<article class="@container mx-auto mt-24 md:max-w-xl xl:max-w-2xl">
	<hrgoup class="flex flex-col space-y-3">
		<div
			role="link"
			tabindex="0"
			onmouseleave={() => (visible = false)}
			onmouseenter={() => (visible = true)}
			class="group @container relative h-full w-full"
		>
			{#if visible}
				<a class="opacity-10 transition-all duration-300 hover:opacity-30" href="/blog">
					<div
						in:fly={{ y: -5, duration: 200 }}
						out:fly={{ y: 5, duration: 200 }}
						class="whirly font-title absolute -top-15 right-1/2
						translate-x-1/2 font-[60]"
					>
						blog/
					</div>
				</a>
			{/if}
			<div class="h-8"></div>
			<h1 class="whirly text-center leading-[.9em] tracking-tighter">
				{data.metadata.title}
			</h1>
		</div>
		<div class="divider"></div>
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
			<div class="flex flex-col text-center md:text-left">
				<p class="text-base-content/50 text-xl xl:text-2xl">
					{formatDate(data.metadata.date)}
				</p>
				{#await getLastUpdated()}
					<p class="text-base-content/50 text-left text-xs opacity-0 xl:text-base">Last updated</p>
				{:then lastUpdated}
					{#key lastUpdated}
						<p
							in:fly={{ x: 10, duration: 100 }}
							class="text-base-content/50 text-left text-xs xl:text-base"
						>
							Last updated: {formatDate(lastUpdated)}
						</p>
					{/key}
				{/await}
			</div>
			<div class="flex flex-row space-x-1">
				{#each data.metadata.categories as category}
					<span class="badge badge-primary badge-outline badge-lg bg-primary/10">{category}</span>
				{/each}
			</div>
		</div>
	</hrgoup>

	<div
		class="prose md:prose-lg prose-headings:tracking-normal prose-a:transition-colors after:prose-a:content-['_↗'] hover:prose-a:text-accent prose-strong:font-bold my-12"
	>
		<data.content />
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
