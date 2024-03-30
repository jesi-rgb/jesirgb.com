<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { videos, posters, stickers } from '$lib/utils/portfolio.js';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Portfolio" description="Selected works from Jesús Rascón" openGraph={{}} />

<MegaTitle>Portfolio</MegaTitle>

<section
	class="prose prose-lg w-full prose-headings:tracking-normal prose-a:no-underline prose-img:m-0"
>
	<section>
		<h2>Name Sans Promo</h2>
		<img
			class="rounded-xl border-2 border-dashed border-base-content p-1 lg:mx-auto lg:w-2/3"
			src="/assets/name-sans/wave_bold.webp"
			alt="Name Sans Variable"
		/>
		<p>
			In December, 2023, I joined forces with Stephen from{' '}<a
				class="after:content-['_↗'] hover:text-accent"
				href="https://arrowtype.com">ArrowType</a
			> to make a promotional video for Name Sans.
		</p>

		<a
			class="transition-colors after:content-['_↗'] hover:text-accent"
			href="/portfolio/name-sans-promo">Read more</a
		>
	</section>

	<h2>Videos</h2>
	<p>All the frames I've participated in</p>
	<div class="grid grid-flow-dense grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
		{#each videos as video}
			<a href={video.link}>
				<div
					class="group mx-auto flex h-full w-fit flex-col justify-between rounded-2xl p-2 transition-all hover:bg-base-300 hover:ring hover:ring-primary hover:ring-opacity-30"
				>
					<div>
						<img src={video.thumbnail} class="w-full rounded-xl" alt="" />

						<div
							class="balanced w-full pt-2 text-lg font-semibold transition-all group-hover:text-white"
						>
							{video.title}
						</div>
					</div>

					<div class="mt-3 flex items-center justify-start space-x-2 md:justify-end">
						<div class="text-left font-mono text-sm opacity-60">{video.channel}</div>
						<img class="h-5 w-5 rounded-full" src={video.channelAvatar} alt={video.channel} />
					</div>
				</div>
			</a>
		{/each}
	</div>

	<h2>Posters</h2>
	<p>A selection of colors, shapes and inspiration</p>

	<div class="grid grid-flow-dense grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-3">
		{#each posters as filename}
			<img
				class="rounded-xl transition-all duration-300 hover:-rotate-2"
				src="/assets/posters/{filename}"
				alt={filename.split('.')[0]}
			/>
		{/each}
	</div>

	<h2>Stickers</h2>
	<p>Stickers I made for my friends</p>
	<div class="mx-auto flex w-fit flex-col justify-between md:w-full md:flex-row">
		{#each stickers as sticker}
			<img
				class="transition-all hover:-rotate-2"
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
	.font-mono {
		font-variation-settings: 'MONO' 1;
	}
</style>
