<script lang="ts">
	import Video from '$lib/components/Video.svelte';

	import { codeToHtml } from 'shiki';

	let coldtypeCode = `
def numbers(f):
    def map_color(i):
        if i == math.isqrt(i) ** 2:
            return ACCENT_COLOR
        elif i % 2 == 0:
            return PRIMARY_COLOR
        else:
            return SECONDARY_COLOR
    n = 9**2
    numbers = (
        PS(
            [
                StSt(
                    f"{i+1:02d}",
                    name,
                    94,
                    opsz=0.9,
                    wght=0.5
                    + 0.5 * np.cos(i % n * f.i / length_numbers),  # happy with this one
                    fill=map_color(i + 1),
                    features={"tnum": True, "zero": True, "rvrn": False},
                )
                for i in range(n)
            ]
        )
        .grid(every=np.sqrt(n))
        .lead(30)
        .translate(x=30, y=30)
    )

    return ( numbers )
`.trim();

	async function hightlightCode(code: string, lang = 'python') {
		const htmlFromCode = await codeToHtml(code, {
			lang: lang,
			theme: 'slack-dark',
			decorations: [
				{
					// line and character are 0-indexed
					start: { line: 0, character: 0 },
					end: { line: 0, character: 3 },
					properties: { class: 'highlighted-word' }
				}
			]
		});

		return htmlFromCode;
	}

	let coldtypeHtmlCode: string;
	hightlightCode(coldtypeCode).then((code) => (coldtypeHtmlCode = code));

	let weight = 100;
	let ital = 0.4;
	let opsz = 24;

	let charPics = ['0054', '0151', '0265', '0297', '0375', '0397'];
</script>

<head> <title>Name Sans Promo</title> </head>

<main
	class="prose prose-lg my-20 md:prose-xl prose-h3:font-normal prose-a:transition-colors hover:prose-a:text-accent"
>
	<div class="mb-10">
		<h2 class="whirly text-center">Name Sans Promo</h2>
		<div class="divider"></div>
	</div>

	<p>
		This project is a collaboration with Stephen from <a href="https://arrowtype.com">ArrowType</a> in
		order to create a set of visual assets to accompany the release of Name Sans.
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
			<strong><a href="https://arrowtype.com/name-sans">Name Sans</a></strong> is a modern interpretation
			of the tile mosaic name tablets of the New York City subway.
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
			The idea behind the video was to showcase all of these aspects of the font while keeping an
			eye on the things that inspired its creation: <strong
				>mosaic tiles in the New York subway</strong
			>.
		</p>

		<figure class="mx-auto w-fit">
			<div class="grid grid-cols-3 gap-4 md:gap-10">
				{#each charPics as index}
					<img
						width={140}
						class="rounded-xl border-2 border-dashed border-base-content/30 transition-transform duration-200 hover:scale-150"
						src="/assets/name-sans/chars_{index}.webp"
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

	<section>
		<h2>The tools</h2>

		<p>In order to achieve the final result, a set of increasingly esoteric tools was used:</p>
		<ul>
			<li>
				<a href="https://www.blackmagicdesign.com/products/davinciresolve">Davinci Resolve</a> for final
				put-together tasks
			</li>
			<li><a href="https://cavalry.scenegroup.co/">Cavalry</a> for very cool animation</li>
			<li><a href="https://coldtype.xyz/">Coldtype</a> for even <em>cooler</em> animation</li>
		</ul>

		<p>Davinci Resolve is just a great, classic non-linear editor.</p>
		<p>
			Cavalry is a 2D motion graphics engine that focuses on the composition of procedural
			animations. It almost feels like a programming language.
		</p>
		<p>
			Coldtype, on the other hand, is a Python library that allows for extremely versatile
			typography animation. It can animate any vector asset, but it was designed to sculpt and mold
			letterforms into almost anything you can think of.
		</p>

		<h3>Developing animations in Coldtype</h3>

		<p>
			In this section, I want to take a look at some of the inner workings of what one can do with
			Coldtype. There are not a lot of tutorials available for the tool. Working with it was a lot
			of trial and error, albeit extremely fun.
		</p>

		<figure>
			<img
				src="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/numbers.png"
				width="100%"
				class="rounded-xl border-2 border-dashed border-base-content/30"
				alt="Numbers in Name Sans"
			/>
			<figcaption>Still showcasing tabular numbers in Name Sans</figcaption>
		</figure>

		<p>
			In here we can see an arrangement of numbers in different colors and weights. This animation
			aimed at showcasing how versatile and flexible numbers are in this typeface, since the whole
			weight range is put in use and everything aligns perfectly.
		</p>

		<p>This was made with Coldtype. Here's a snippet of the code:</p>

		{@html coldtypeHtmlCode}
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
