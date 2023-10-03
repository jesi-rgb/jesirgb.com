<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article>
	<hrgoup>
		<h1>{data.metadata.title}</h1>
		<p>Published at {data.metadata.date}</p>
	</hrgoup>

	<div>
		{#each data.metadata.categories as category}
			<span>{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
