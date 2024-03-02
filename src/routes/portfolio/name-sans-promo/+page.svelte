<script lang="ts">
	import Video from '$lib/components/Video.svelte';

	import { MetaTags } from 'svelte-meta-tags';

	export let data;

	const {
		coldtypeHtmlCode,
		mapColorHtml,
		ststHtml,
		wghtLineHtml,
		fillLineHtml,
		featureLineHtml,
		restCodeHtml
	} = data;

	let weight = 100;
	let ital = 0.4;
	let opsz = 24;

	let charPics = ['0054', '0151', '0265', '0297', '0375', '0397'];

	let thumbUrl = new URL('https://jesirgb.com/blog/thumbnails');
	thumbUrl.searchParams.append('title', 'Name Sans Promo');
	thumbUrl.searchParams.append(
		'desc',
		'A collaboration with Stephen from ArrowType to create visual assets for the release of Name Sans'
	);
</script>

<MetaTags
	keywords={['animation', 'typography', 'code']}
	title="Name Sans Promo"
	description="This project is a collaboration with Stephen from ArrowType in order to create a set of visual assets to accompany the release of Name Sans."
	twitter={{
		handle: '@jesi_rgb',
		cardType: 'summary_large_image',
		title: 'Name Sans Promo',
		description:
			'This project is a collaboration with Stephen from ArrowType in order to create a set of visual assets to accompany the release of Name Sans.',
		image: thumbUrl.toString(),
		imageAlt: 'Name Sans Promo'
	}}
	openGraph={{
		type: 'article',
		url: thumbUrl.toString(),
		title: 'Name Sans Promo',
		images: [
			{
				url: thumbUrl.toString(),
				width: 800,
				height: 600
			}
		],
		description:
			'This project is a collaboration with Stephen from ArrowType in order to create a set of visual assets to accompany the release of Name Sans.',
		article: {
			tags: ['animation', 'typography', 'code'],
			publishedTime: ''
		}
	}}
/>

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
			<Video autoplay url="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/name_sans.webm"
			></Video>
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
			>
				<div style="font-variation-settings: 'opsz' {opsz}, 'wght' 10">Thinn</div>

				<div style="font-variation-settings: 'opsz' {opsz}, 'wght' 950">Thicc</div>
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

	<section id="the tools">
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
	</section>

	<section id="developing animations in coldtype">
		<h2>Developing animations in Coldtype</h2>

		<p>
			In this section, I want to take a look at some of the inner workings of what one can do with
			Coldtype. There are not a lot of tutorials available for the tool. Working with it was a lot
			of trial and error, albeit extremely fun.
		</p>

		<p>Here's an animation that didn't make the cut.</p>
		<figure>
			<Video
				autoplay
				controls={false}
				url="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/rvrn_false_vp9.webm"
			></Video>
			<figcaption>Unused Coldtype animation</figcaption>
		</figure>

		<p>
			In here we can see an arrangement of numbers in different colors and weights. This animation
			aimed at showcasing how versatile and flexible numbers are in this typeface, since the whole
			weight range is put in use and everything aligns perfectly.
		</p>

		<p>This was made using Coldtype. Here's a snippet of the code:</p>

		<figure>
			{@html coldtypeHtmlCode}
			<figcaption>Piece of Coldtype code</figcaption>
		</figure>

		<p>Let's go chunk by chunk.</p>

		<figure>
			{@html mapColorHtml}
			<figcaption>The Map Color function</figcaption>
		</figure>

		<p>
			First, we defined a{' '}<code>map_color</code> function. Its only purpose is to assign a color
			to a number based on their index.
		</p>
		<p>
			If the number is a perfect square, we color it with the
			<code>ACCENT_COLOR</code>, a reddish tone. Otherwise, we color the numbers based on their
			parity. Even numbers are <i>white</i>, odd numbers are <i>blue</i>. Nothing too crazy, and
			this is not Coldtype-like stuff. Let's now get into the StSt definition and climb our way
			upwards.
		</p>

		<figure>
			{@html ststHtml}
			<figcaption>The Style definition</figcaption>
		</figure>

		<p>This one is full packed of stuff.</p>

		<p>
			<a href="https://arc.net/l/quote/xttjlkes">StSt</a> is a Coldtype class that sets a line of
			text with a single Style object. This is the way we set type in Coldtype. The first argument
			is just a string that depends on <code>i</code>, which is the iterator that we defined in the
			list comprehension. This number is then shifted by +1 and padded with 0s on the left, so
			numbers align.
		</p>
		<p>It essentially guarantees that the number will always be two digit.</p>

		<p>
			<code>name</code> is just a variable in which we tell Coldtype where the desired font we want
			lives within our computer. We declare these with the function <code>Font.Cacheable</code>.
		</p>

		<p><code>94</code> is the text size in pt that we are setting our text at.</p>

		<p>The variable stuff:</p>
		<ul>
			<li>
				<code>opsz</code> is the Optical Size axis codename through which we can change this parameter
				in our animation.
			</li>
			<li>
				<code>wght</code> is the Weight axis codename through which we can change this parameter in our
				animation.
			</li>
		</ul>

		<p>
			In Coldtype, these extend between 0 and 1, no matter how the actual values are defined in the
			font file. This makes it a bit easier to animate stuff, since everything is normalized.
		</p>

		<figure>
			{@html wghtLineHtml}
			<figcaption>
				The Weight axis values depend on the frame and the number we are dealing with throughout the
				animation.
			</figcaption>
		</figure>
		<p>
			We can also see that the <code>wght</code> axis has a lot going on. Apart from the constant
			numbers, we are using the cosine function with <code>i</code> and <code>f.i</code>
		</p>

		<p>
			<code>f.i</code> is the index <code>i</code> for the current frame <code>f</code>. For the
			first frame this value will be 0. The second frame, 1. And so on.
		</p>

		<p>
			The standalone <code>i</code> is the iterator we mentioned earlier, and <code>n</code> is the total
			number of numbers that we are displaying.
		</p>
		<p>
			The actual operations like dividing and multiplying just came out of trial and error. I <i
				>knew</i
			>
			I needed to use <code>f.i</code> to drive a per-frame change on a property (wght in this
			case), and I knew I wanted to apply a different styling to each consecutive shape but with a
			staggered effect. This led me to use both <code>f.i</code> and <code>i</code>.
		</p>
		<p>
			I also knew I wanted the overall behaviour to <i>swing</i> back and forth. And the cosine function
			helps achieving that, since it will always output values from -1 to 1. The frame index + cosine
			function is a goated combo that shader magicians will also recognize as familiar and, indeed, goated.
		</p>

		<p>
			But the actual operations that relate them are not important. It was just a matter of
			adjusting and tweaking until the animation felt good.
		</p>

		<figure>
			{@html fillLineHtml}

			<figcaption>Fill color defined by the <code>map_color</code> function.</figcaption>
		</figure>
		<p>
			Next up, we got the fill color, which comes defined by the <code>map_color</code> function we discussed
			earlier. Outputs a color depending on the index. Beautiful. Simple.
		</p>

		<figure>
			{@html featureLineHtml}
			<figcaption>OpenType features can be accessed very conveniently in Coldtype</figcaption>
		</figure>
		<p>
			Lastly, one of my favourites, OpenType features. This is something usually overlooked in
			clicky software, like Adobe After Effects, Cavalry or similar. Design tools do implement it,
			though, which is why I miss it so much in motion software.
		</p>
		<p>
			This argument expects a dictionary of OpenType features and their expected value. These act
			like switches, thus the "True" and "False" we see here. You can turn features on an off to
			access specific alternative characters within the font file.
		</p>

		<p>Let's review them:</p>
		<ul>
			<li>
				<code>tnum</code> enables <b>T</b>abular <b>Num</b>bers. Numbers that occupy the same exact
				space. Essential for the layout we have going on.
			</li>

			<li><code>zero</code> substitutes the normal 0 for a slashed <code>0</code>.</li>
			<li>
				<code>rvrn</code> is a slightly more obscure, advanced one. It stands for
				<i>Required Variation Alternates</i>. It <i>forces</i> the characters to not switch to specific
				variants made for legibility, in order to maintain their continuous nature.
			</li>
		</ul>
		<p>This last one is not super intuitive, but this example will hopefully clear things up.</p>

		<div class="mx-auto grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3">
			<figure class="">
				<Video
					controls={false}
					autoplay
					url="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/rvrn_true_vp9.webm"
				></Video>
				<figcaption>Required Variation Alterates turned on (default)</figcaption>
			</figure>

			<figure class="">
				<Video
					controls={false}
					autoplay
					url="https://assets-jesi-rgb.s3.eu-north-1.amazonaws.com/rvrn_false_vp9.webm"
				></Video>
				<figcaption>Required Variation Alterates turned off (explicitly)</figcaption>
			</figure>
		</div>

		<p>
			Focus on the 1. When turned on, the caracter switches to a different version in bolder
			weights. By turning this off, we tell the font that we want the original 1, which interpolates
			smoothly across the whole weight range.
		</p>
		<p>
			Mind you, this feature is a decision the type designer has to make when laying out the roadmap
			for the typeface. The fact that we get this level of granularity and customizability is truly
			remarkable.
		</p>

		<figure>
			{@html restCodeHtml}

			<figcaption>The rest of the code</figcaption>
		</figure>

		<p>
			Now, to refresh, all these numbers were individual text objects we created through the <code
				>StSt</code
			> class.
		</p>

		<p>
			All these objects are then fed into the <code>PS</code> class, which helps with very precise layout
			of these objects, and groups them to make operations on all in relation to eachother.
		</p>

		<p>We can see this class brings three nice funcitons:</p>

		<ul>
			<li>
				<code>grid</code>: sets the elements on a grid 🤯. The argument <code>every</code> literally
				means make a new row (or column) every <code>n</code> elements. Since we created n to be a perfect
				square, we just use the square root to layout the numbers. Nice!
			</li>

			<li>
				<code>lead</code>: comes from the leading of the typefaces, i.e line height. Just adjusts
				the vertical spacing between each row.
			</li>

			<li>
				<code>translate</code>: moves elements around 🤯. Your usual translation. We move the whole
				thing up and right a bit. By default, all objects are aligned down and left in Coldtype.
			</li>
		</ul>
	</section>

	<p>🚧 probably to be continued... 🚧</p>
</main>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings:
			'wdth' 125,
			'wght' 70;
		text-wrap: balance;
		font-size: 7.5cqw;
	}
</style>
