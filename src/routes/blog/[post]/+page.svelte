<script lang="ts">
	import { formatDate } from '$lib/utils/utils.js';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article class="w-[90%] md:max-w-xl xl:max-w-2xl mx-auto mt-32 mb-20">
	<hrgoup class="flex flex-col space-y-3">
		<h1 class="text-5xl md:text-7xl font-extrabold text-center tracking-tighter">
			{data.metadata.title}
		</h1>
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
