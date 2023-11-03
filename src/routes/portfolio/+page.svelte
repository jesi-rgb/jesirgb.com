<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { videos, posters, stickers } from '$lib/utils/portfolio.js';
</script>

<MegaTitle>Portfolio</MegaTitle>

<section class="prose prose-2xl prose-img:m-0 prose-a:no-underline w-full">
	<h2>Videos</h2>
	<p>All the frames I've participated in</p>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-dense gap-3">
		{#each videos as video}
			<a href={video.link}>
				<div
					class="p-2 hover:bg-base-300 rounded-2xl h-full flex flex-col justify-between w-fit md:w-fit group hover:ring hover:ring-primary hover:ring-opacity-30 transition-all"
				>
					<div>
						<img src={video.thumbnail} class="rounded-xl" alt="" />

						<div class="text-lg group-hover:text-white transition-all font-semibold balanced">
							{video.title}
						</div>
					</div>

					<div class="flex items-center justify-start md:justify-end space-x-2 mt-3">
						<div class="font-mono text-sm text-left">{video.channel}</div>
						<img class="rounded-full w-5 h-5" src={video.channelAvatar} alt={video.channel} />
					</div>
				</div>
			</a>
		{/each}
	</div>

	<h2>Posters</h2>
	<p>Colors, shapes and inspiration</p>

	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-dense gap-1">
		{#each posters as filename}
			<img
				class="rounded-xl hover:-rotate-2 transition-all duration-300"
				src="/assets/posters/{filename}"
				alt={filename.split('.')[0]}
			/>
		{/each}
	</div>

	<h2>Stickers</h2>
	<p>Stickers I made for my friends</p>
	<div class="flex flex-col md:flex-row justify-between mx-auto w-fit md:w-full">
		{#each stickers as sticker}
			<img
				class="hover:-rotate-2 transition-all"
				width="180px"
				src="/assets/posters/{sticker}"
				alt={sticker.split('.')[0]}
			/>
		{/each}
	</div>
</section>

<style>
	.balanced {
		text-wrap: balance;
	}
</style>
