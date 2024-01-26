<script>
	import Video from '$lib/components/Video.svelte';

	let weight = 100;
	let ital = 0.4;
	let opsz = 24;

	let charPics = ['0054', '0151', '0265', '0297', '0375', '0397'];
</script>

<main class="prose my-20 md:prose-lg">
	<div class="mb-10">
		<h2 class="whirly text-center">Name Sans Promo</h2>
		<div class="divider"></div>
	</div>

	<p>
		This project is a collaboration between Stephen and me in order to create a set of visual assets
		to accompany the release of Name Sans.
	</p>

	<section>
		<h2>The final product</h2>
		<div class="my-10">
			<Video url="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/name_sans_v3.mp4"></Video>
		</div>
	</section>

	<section>
		<h2>Name Sans' fundamentals</h2>
		<p>
			<strong>Name Sans</strong> is a modern interpretation of the tile mosaic name tablets of the New
			York City subway.
		</p>

		<p>
			Name Sans is geometric, grotesque, both serious and funky, and fits a very wide range of
			categories.
		</p>

		<div class="mx-auto my-10 w-1/2">
			<div class="opacity-60">Weight Axis</div>
			<div
				class="not-prose rounded-xl border-2 border-dashed border-base-content/30 p-4 text-center text-4xl md:text-5xl"
				style="font-weight: {weight}; font-variation-settings: 'opsz' 72"
			>
				NAME SANS
			</div>
			<input type="range" min="1" max="1000" class="range range-xs" bind:value={weight} />
			<div class="text-center tabular-nums"><span class="opacity-60">Weight:</span> {weight}</div>
		</div>

		The weight range extends from an impossibly thin hairline style to an insanely chunky ultra
		black style.

		<div class="mx-auto my-10 w-1/2">
			<div class="opacity-60">Italic Axis</div>
			<div
				class="not-prose rounded-xl border-2 border-dashed border-base-content/30 p-4 text-center text-2xl md:text-5xl"
				style="font-variation-settings: 'ital' {ital}, 'opsz' 72"
			>
				very variable
			</div>
			<input type="range" min="0" max="1" step="0.01" class="range range-xs" bind:value={ital} />
			<div class="text-center tabular-nums">
				<span class="opacity-60">Italic:</span>
				{ital.toFixed(2)}
			</div>
		</div>

		On top of that, everything around its construction was conceived to be variable: from the
		weight, to the slant angle and even to the optical sizing. This makes for an extremely versatile
		typeface.
		<div class="mx-auto my-10 w-1/2">
			<div class="opacity-60">Optical Size Axis</div>
			<div
				class="not-prose rounded-xl border-2 border-dashed border-base-content/30 p-4 text-center text-2xl md:text-5xl"
				style="font-variation-settings: 'opsz' {opsz}"
			>
				Big and Small
			</div>
			<input type="range" min="12" max="72" step=".1" class="range range-xs" bind:value={opsz} />
			<div class="text-center tabular-nums">
				<span class="opacity-60">Optical Size:</span>
				{opsz.toFixed(1)}
			</div>
		</div>
	</section>

	<section>
		<h2>The idea</h2>

		<p>
			The idea behind the video was to showcase all of these aspects of the font while retaining
			keeping an eye on the things that inspired its creation: <strong
				>mosaic tiles in the New York subway</strong
			>.
		</p>

		<figure class="mx-auto w-fit">
			<div class="grid grid-cols-3 gap-4 md:gap-10">
				{#each charPics as index}
					<img
						width={140}
						class="rounded-xl border-2 border-dashed border-base-content/30 transition-transform duration-200 hover:scale-150"
						src="/assets/name-sans/chars_{index}.png"
						alt="Character {index} in Name Sans"
					/>
				{/each}
			</div>
			<figcaption class="not-prose text-base opacity-60">
				Some frames from the original animation.
			</figcaption>
		</figure>

		<p>
			In conjunction with its origins, Stephen wanted to showcase how maleable this typeface is,
			which is where animation comes into play. Axes representing a continuous space of all the
			possible weights, angles or sizes are very interesting to animate.
		</p>

		<figure class="mx-auto w-fit">
			<div class="mx-auto w-[150px]">
				<video
					class="rounded-xl border-2 border-dashed border-base-content/30"
					autoplay
					loop
					muted
					playsinline
					src="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/char_animation.mp4"
				></video>
			</div>

			<figcaption class="not-prose text-base opacity-60">
				Resulting animation from previous frames
			</figcaption>
		</figure>
	</section>
</main>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 125;
		text-wrap: balance;
		font-size: 7.5cqw;
	}
</style>
