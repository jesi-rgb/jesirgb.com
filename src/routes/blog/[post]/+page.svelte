<script lang="ts">
	import { formatDate } from '$lib/utils/utils.js';
	import { fly } from 'svelte/transition';

	export let data;
	let visible = false;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article class="w-[90%] md:max-w-xl xl:max-w-2xl mx-auto mt-24 mb-20">
	<hrgoup class="flex flex-col space-y-3">
		<div
			on:mouseleave={() => (visible = false)}
			on:mouseenter={() => (visible = true)}
			class="group h-full w-full relative"
		>
			{#if visible}
				<a
					class="opacity-25 hover:opacity-50 hover:font-bold transition-all duration-300"
					href="/blog"
				>
					<div
						in:fly={{ y: -5, duration: 200 }}
						out:fly={{ y: 5, duration: 200 }}
						class="absolute right-1/2 font-mono translate-x-1/2 top-0 text-2xl"
					>
						blog/
					</div>
				</a>
			{/if}
			<div class="h-8" />
			<h1 class="text-5xl md:text-7xl font-extrabold text-center tracking-tighter">
				{data.metadata.title}
			</h1>
		</div>
		<div class="divider" />
		<div class="flex flex-col md:flex-row gap-4 justify-between items-center">
			<p class="font-mono font-extralight text-center text-lg xl:text-2xl text-neutral-400">
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
		class="prose prose-zinc text-justify prose-xl prose-headings:text-left hover:prose-a:text-primary prose-a:transition-colors prose-strong:font-bold my-32"
	>
		<svelte:component this={data.content} />
	</div>
</article>
