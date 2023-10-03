<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Blog - Jesús Rascón</title>
</svelte:head>

<section class="mx-auto max-w-lg my-20">
	<ul>
		{#each data.posts as post}
			<li>
				<a href={post.slug}>
					<p>{post.title}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
