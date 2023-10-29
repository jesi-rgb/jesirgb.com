<script>
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import WorkItem from '$lib/components/WorkItem.svelte';
	import {
		ChatCircleText,
		Cylinder,
		Envelope,
		EnvelopeOpen,
		FileText,
		MusicNotesPlus,
		Pi,
		ProjectorScreenChart,
		Sigma,
		Stack,
		TextB
	} from 'phosphor-svelte';
</script>

<head>
	<title>Jesús Rascón</title>
</head>

<section class="min-h-[50%]">
	<main
		class="prose prose-2xl hover:prose-a:text-accent prose-a:transition-colors after:prose-a:content['_↗']"
	>
		<div class="my-5">
			<h2 class="whirly">Jesús Rascón</h2>
		</div>

		<h3>Design engineer and technical content creator</h3>

		<h4>Typography obsessed, attention to detail and tasteful animation</h4>

		<p>
			I'm currently working at
			<a href="https://prismsvr.com">
				<span class="inline-block align-middle pb-1"
					><img width="20" class="my-0 mx-1" src="/assets/prisms.svg" alt="Prisms Logo" /></span
				>Prisms</a
			> as a Squares & Rectangles Director, producing mathematical content for our VR game.
		</p>
		<p>
			Founder and creator of the <a href="https://youtube.com/@design-bits"
				><span class="inline-block align-middle pb-2"
					><img
						width="28"
						class="my-0 mr-1"
						src="/assets/design-bits-transparent.svg"
						alt="Design Bits Logo"
					/></span
				><strong>Design Bits</strong>
			</a>
			channel, where we talk about computational design.
			<i>All things art, but make it digital</i>.
		</p>
		<p>
			I also work as a freelance <i>technical content creator</i> with channels like
			<strong><a href="https://www.youtube.com/@veritasium">Veritasium</a></strong>
			and
			<strong><a href="https://www.youtube.com/@reducible">Reducible</a></strong>, crafting
			animations earning <strong>+60 million</strong> impressions.
		</p>
	</main>
</section>

<div class="divider my-24" />
<!-- Works -->
<section class="min-h-[50%]">
	<main class="prose prose-2xl prose-a:no-underline prose-a:text-neutral-300">
		<h3>Fun Side Projects</h3>
		<h5>Non exhaustive list of silly things I've built. No promises.</h5>
		<div class="flex flex-col space-y-9 mt-10">
			<WorkItem link="https://cycles-sup.vercel.app">
				<div slot="title">Cycles</div>
				<div slot="description">Tiny Little Habit Tracker</div>
				<div slot="icon">
					<img class="fill-primary" src="/assets/cycles.svg" width="100%" alt="Cycles logo" />
				</div>
			</WorkItem>
			<WorkItem link="https://fellowship-proposal.vercel.app/en">
				<div slot="title">Processing Fellowship Proposal</div>
				<div slot="description">A presentation of Mathemagical.js, with Greg Stanton</div>
				<div slot="icon">
					<Sigma size={40} weight="bold" class="fill-primary" />
				</div>
			</WorkItem>
			<WorkItem link="https://mapa-elecciones-two.vercel.app/">
				<div slot="title">Spanish General Elections 2023 Map</div>
				<div slot="description">Visualization of the results, per district</div>
				<div slot="icon">
					<Envelope size={40} weight="bold" class="fill-primary -rotate-12" />
				</div>
			</WorkItem>
			<WorkItem link="https://elmetro.vercel.app/">
				<div slot="title">El Metro</div>
				<div slot="description">Tram tracking extremely simple</div>
				<div slot="icon">
					<img class="fill-primary" src="/assets/elmetro.svg" width="100%" alt="Cycles logo" />
				</div>
			</WorkItem>
			<WorkItem link="https://font-guesser.vercel.app/">
				<div slot="title">Font Guesser</div>
				<div slot="description">An unfinished font guessing game</div>
				<div slot="icon">
					<TextB size={45} weight="bold" class="fill-primary" />
				</div>
			</WorkItem>
			<WorkItem link="https://focal-es.vercel.app/">
				<div slot="title">FOCAL-ES</div>
				<div slot="description">A database with exhaustive information on focal particles</div>
				<div slot="icon">
					<ChatCircleText size={40} weight="bold" class="fill-primary" />
				</div>
			</WorkItem>
			<WorkItem link="https://chord-chart-maker.vercel.app/">
				<div slot="title">Chord Chart Maker</div>
				<div slot="description">An unfinished jazz-style chord chart for quick idea sharing</div>
				<div slot="icon">
					<MusicNotesPlus size={40} weight="bold" class="fill-primary" />
				</div>
			</WorkItem>
			<WorkItem link="https://custom-blending-modes.vercel.app/">
				<div slot="title">Custom Blending Modes</div>
				<div slot="description">Quick prototype about a hypothetical blend mode editor</div>
				<div slot="icon">
					<Stack size={40} weight="bold" class="fill-primary" />
				</div>
			</WorkItem>
			<WorkItem link="https://ccfest-md-slides.vercel.app/">
				<div slot="title">CC Fest Slides</div>
				<div slot="description">Slides I gave for my presentation on the '22 CC Fest!</div>
				<div slot="icon">
					<ProjectorScreenChart size={40} weight="duotone" class="fill-primary" />
				</div>
			</WorkItem>
		</div>
	</main>
</section>

<div class="divider my-24" />

<section class="min-h-[50%]">
	<main class="prose prose-2xl prose-h4:font-[60]">
		<h3>Experience & Background</h3>
		<p>A little sum up of the path I've followed so far</p>
		<div class="">
			<!-- Timeline Item -->
			<TimelineItem>
				<h4 slot="title">Prisms of Reality</h4>
				<div slot="date">Jun, 2023</div>
				<div slot="subtitle">Technical Content Creator</div>
				<div slot="content">
					In June, 2023, I joined the incredible Prisms team as a <i>technical content creator</i>,
					helping create explainer video assets in the fields of mathematics, physics, chemsitry and
					sciences.
					<br /><br />
					These videos help kids get around the game and understand complex concepts in an accessible,
					fun way.
				</div>
			</TimelineItem>

			<TimelineItem>
				<h4 slot="title">Design Bits</h4>
				<div slot="date">Mar, 2023</div>
				<div slot="subtitle">Founder</div>
				<div slot="content">
					Around March, 2023 I created the <a href="https://youtube.com/@design_bits">Design Bits</a
					>
					channel, to talk about computational design. Much of the influence I've gathered from past
					experiences can be easily picked up in this project.

					<br /><br /> We discuss the inner workings of the tools designers use daily in a hopefully
					accessible and attractive manner.

					<br /><br /> Graphic Design, Video Production, Music Production and Programming are
					disciplines that I want to keep as close to my heart as possible. This channel is a
					<i>successful</i> attempt at doing so. Every asset, animation, song or sound effect is created
					from scratch, in my room. Being able to control the interplay between all the elements makes
					me incredibly happy.
				</div>
			</TimelineItem>
			<TimelineItem>
				<h4 slot="title">'22 Google Summer of Code</h4>
				<div slot="date">Jun, 2022</div>
				<div slot="subtitle">Google Summer of Code Contributor</div>
				<div slot="content">
					In June, 2022 I proposed the Processing Foundation –through the GSOC program– a very
					important change to the p5.js library that had been asked for ages: <strong
						>native GIF export</strong
					>. <br /><br /> The p5.js community is largely stablished in Twitter, where GIF sharing
					was the main way for artists to show their works in progress, as well as the finished
					pieces.

					<br /><br />
					But GIF exporting was very cumbersome, usually requiring the user to download every single
					frame as a png for later composition, or using tools that either did not work properly or needed
					an unreasonable amount of setup.

					<br /><br />
					I am very proud to say that we managed to create this feature and make it as easy as it's ever
					been to download a GIF from your sketch.
				</div>
			</TimelineItem>

			<TimelineItem>
				<h4 slot="title">Reducible</h4>
				<div slot="date">Nov, 2021</div>
				<div slot="subtitle">Art Direction & Animation Engineering</div>
				<div slot="content">
					My journey as a freelancer was blessed when I joined the <a
						href="https://youtube.com/@reducible">Reducible</a
					>
					youtube channel as an Art Director and Animator. <strong>Nipun</strong>, the creator and
					founder of the channel, gave me the most welcoming time and we formed a team to improve
					the channel from the ground up. <br /><br /> This project really holds a special place in
					my heart, since I was so early in my career but still, he trusted me and allowed me to
					explore and exploit all the possibilities. No judgement, no bullshit, just vibes and code.
					<br /><br /> Helped develop a clearer brand identity to the channel, helping it stand out
					among a rapidly growing community of educational math channels.

					<br /><br />
					<i>Animation engineering</i> comes from the fact that all animations were made through code.
				</div>
			</TimelineItem>

			<TimelineItem>
				<h4 slot="title">Freelancer</h4>
				<div slot="date">Sep, 2021</div>
				<div slot="subtitle">I guess every role?</div>
				<div slot="content">
					In September, 2021 I started my career as a freelancer. I had just come out of my masters
					and had absolutely no idea nor properly developed skill. The only thing I had clear was to
					avoid joining some generic big corporation to do lame stuff as hard as I possibly could.

					<br /><br />
					During this time, I worked with the
					<a href="https://youtube.com/@veritasium">Veritasium</a> team as an animation engineer,
					making mathematical animations in <a href="https://www.manim.community/">Manim</a>. This
					would shape the rest of my career as I would choose this path onwards and specialize in
					this branch of content creation.

					<br /><br />
					I also started my career as a <strong>design engineer</strong>, something I didn't know at
					the time. I started tinkering with Next.js and Svelte and made some websites for fun and
					for my local university.
				</div>
			</TimelineItem>

			<TimelineItem>
				<h4 slot="title">MSc Data Science</h4>
				<div slot="date">Sep, 2020</div>
				<div slot="subtitle">Masters in Data Science @ University of Granada</div>
				<div slot="content">
					Got my masters in Data Science through the year of 2020. Learned that you won't need much
					more than a simple linear regression in 90% of the cases you have to estimate some data. I
					also got a lot into <strong>data visualization and design</strong>.
				</div>
			</TimelineItem>

			<TimelineItem>
				<h4 slot="title">BSc Computer Science</h4>
				<div slot="date">Sep, 2016</div>
				<div slot="subtitle">Bachelors in Computer Science @ University of Jaén</div>
				<div slot="content">
					From 2016 through 2020 I completed my degree in Computer Science. I didn't have a great
					time during the first years, I was <i>really</i> bad at algorithms, math and hardcore
					programming in general. It wouldn't be until 3rd year that I started to take off and enjoy
					the process.

					<br /><br />
					Today I can very confidently say that programming, algorithms and math make me very happy.
					Not an obvious choice, but probably the right one.
				</div>
			</TimelineItem>

			<TimelineItem>
				<h4 slot="title">Music studies</h4>
				<div slot="date">Sep?, 2013</div>
				<div slot="subtitle">I basically started playing guitar</div>
				<div slot="content">
					At some point during the summer of 2013 I managed to convice mom to buy me a guitar.
					Sometime later I started attending guitar lessons from one of the most incredible teachers
					I will ever know, <strong>Yeye</strong>.

					<br /><br /> Like many other things, this would completely fill up my mind and change my entire
					life, but I didn't know that yet.
				</div>
			</TimelineItem>
		</div>
	</main>
</section>

<div class="h-32" />

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 70;
		font-weight: 100;
	}
</style>
