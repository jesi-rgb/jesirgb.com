<script>
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import WorkItem from '$lib/components/WorkItem.svelte';

	import GlobeStand from 'phosphor-svelte/lib/GlobeStand';
	import ChatCircleText from 'phosphor-svelte/lib/ChatCircleText';
	import Envelope from 'phosphor-svelte/lib/Envelope';
	import MusicNotesPlus from 'phosphor-svelte/lib/MusicNotesPlus';
	import Percent from 'phosphor-svelte/lib/Percent';
	import ProjectorScreenChart from 'phosphor-svelte/lib/ProjectorScreenChart';
	import Sigma from 'phosphor-svelte/lib/Sigma';
	import Stack from 'phosphor-svelte/lib/Stack';
	import TextB from 'phosphor-svelte/lib/TextB';
	import CursorClick from 'phosphor-svelte/lib/CursorClick';

	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Jesús Rascón" description="Developer, artist, producer." />

<div class="my-10 mt-32">
	<h2 class="whirly text-6xl tracking-tight">Jesús Rascón</h2>
</div>
<section class="min-h-[50%]">
	<main
		class="prose prose-lg prose-headings:tracking-normal prose-a:no-underline prose-a:transition-colors after:prose-a:content-['_↗'] hover:prose-a:text-accent"
	>
		<h3>design, animation and data</h3>

		<p>Designer, engineer, and everything in between. I also do video and music.</p>

		<p>
			I was a <i>Design Engineer</i> of sorts at
			<a href="https://graphext.com">
				<span class="inline-block align-middle">
					<svg
						width="25"
						viewBox="0 0 96 96"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						><path
							d="M82.378,44.431c0,15.718 -10.107,28.46 -25.025,28.46c-7.55,0 -27.716,-3.76 -33.64,-6.583c-11.017,-4.63 -17.23,-11.367 -17.23,-21.877c-0,-10.511 6.213,-17.248 17.23,-21.878c5.924,-2.823 26.09,-6.583 33.64,-6.583c14.918,-0 25.025,12.742 25.025,28.461Zm-52.511,-0c-0,4.457 -3.49,8.071 -7.795,8.071c-4.305,-0 -7.795,-3.614 -7.795,-8.071c0,-4.458 3.49,-8.071 7.795,-8.071c4.305,-0 7.795,3.613 7.795,8.071Zm43.235,-0c0,8.68 -7.079,15.717 -15.811,15.717c-8.733,-0 -15.812,-7.037 -15.812,-15.717c0,-8.681 7.079,-15.717 15.812,-15.717c8.732,-0 15.811,7.036 15.811,15.717Z"
							fill="currentColor"
						/></svg
					>
				</span>Graphext</a
			>, arguably the fastest and most powerful analytics tool there is available in the market. I
			helped build its <a href="https://docs.graphext.com">docs</a>,
			<a href="https://tractor.graphext.com">tractor</a>, and its
			<a href="https://graphext.com">landing page</a>.
		</p>

		<p>
			Founder and creator of the <a href="https://www.youtube.com/@Design_Bits"
				><span class="mr-0.5 inline-block pb-1 align-middle"
					><svg
						width="20"
						fill="currentColor"
						viewBox="0 0 1000 1000"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						><clipPath id="_clip1"><rect x="-0" y="0" width="1000" height="1000" /></clipPath><g
							clip-path="url(#_clip1)"
							><g
								><path
									d="M506.587,167.043c42.327,-4.137 87.08,-5.736 130.765,-2.51c18.315,1.353 36.442,3.554 54.124,6.772c68.443,12.455 130.39,39.732 175.642,86.782c45.881,47.703 76.265,116.08 75.309,214.291c-1.755,180.47 -105.803,303.584 -232.529,384.833c-177.317,113.685 -397.806,142.306 -397.806,142.306c-16.696,2.156 -33.513,-2.969 -46.17,-14.068c-12.657,-11.1 -19.933,-27.104 -19.975,-43.939l-0.652,-260.023c35.551,-10.221 76.027,-23.945 117.168,-42.085l0.58,231.479c70.197,-15.748 184.559,-48.921 283.559,-112.395c95.327,-61.117 177.237,-151.495 178.558,-287.249c0.583,-59.909 -14.577,-102.756 -42.565,-131.856c-28.615,-29.751 -68.836,-44.822 -112.116,-52.698c-6.32,-1.15 -12.706,-2.146 -19.143,-2.999c-38.483,-5.098 -78.753,-5.07 -117.413,-2.193c-68.997,5.134 -132.865,19.343 -172.283,29.677l0.496,197.946c-39.342,21.635 -80.135,37.985 -117.147,50.185l-0.73,-290.889c-0.069,-3.082 0.108,-6.142 0.518,-9.153c1.315,-9.819 5.066,-18.874 10.624,-26.536c5.543,-7.673 12.975,-14.064 21.893,-18.379c2.956,-1.438 6.051,-2.635 9.259,-3.566c14.16,-4.4 108.703,-32.849 220.034,-43.733Z"
									style="fill-opacity:0.87;"
								/><path
									d="M245.295,681.487c-69.515,19.984 -120.199,26.571 -120.199,26.571c-16.696,2.155 -33.513,-2.969 -46.17,-14.069c-12.657,-11.1 -19.932,-27.104 -19.975,-43.938l-1.386,-552.661c-0.069,-3.082 0.108,-6.142 0.518,-9.153c1.316,-9.819 5.066,-18.875 10.624,-26.536c5.543,-7.673 12.975,-14.064 21.893,-18.379c3,-1.46 6.142,-2.671 9.4,-3.607c20.444,-6.304 195.911,-58.344 337.247,-32.623c58.466,10.639 111.287,34.134 149.942,74.324c21.274,22.12 38.745,49.399 50.163,83.117c-43.685,-3.226 -88.438,-1.627 -130.765,2.51c-1.266,-1.487 -2.573,-2.931 -3.921,-4.332c-35.218,-36.617 -91.848,-45.003 -147.425,-45.677c-69.041,-0.837 -138.219,13.018 -180.294,23.494c0.3,119.572 1.099,438.334 1.099,438.334c20.099,-4.822 43.637,-11.222 68.943,-19.563c37.012,-12.2 77.805,-28.55 117.147,-50.185c10.374,-5.705 20.648,-11.778 30.725,-18.238c71.239,-45.675 133.402,-111.745 141.062,-209.385c38.66,-2.877 78.93,-2.905 117.413,2.193c-8.211,141.998 -92.766,240.255 -195.179,305.917c-30.349,19.457 -62.216,35.921 -93.694,49.801c-41.141,18.14 -81.617,31.864 -117.168,42.085Z"
									style="fill-opacity:0.52;"
								/></g
							></g
						></svg
					></span
				><strong>Design Bits</strong>
			</a>
			channel, where we talk about computational design.
			<i class="">All things art, but make it digital</i>.
		</p>

		<p>
			I've previously worked at
			<a href="https://graphext.com">
				<span class="inline-block align-middle">
					<svg
						width="25"
						viewBox="0 0 96 96"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						><path
							d="M82.378,44.431c0,15.718 -10.107,28.46 -25.025,28.46c-7.55,0 -27.716,-3.76 -33.64,-6.583c-11.017,-4.63 -17.23,-11.367 -17.23,-21.877c-0,-10.511 6.213,-17.248 17.23,-21.878c5.924,-2.823 26.09,-6.583 33.64,-6.583c14.918,-0 25.025,12.742 25.025,28.461Zm-52.511,-0c-0,4.457 -3.49,8.071 -7.795,8.071c-4.305,-0 -7.795,-3.614 -7.795,-8.071c0,-4.458 3.49,-8.071 7.795,-8.071c4.305,-0 7.795,3.613 7.795,8.071Zm43.235,-0c0,8.68 -7.079,15.717 -15.811,15.717c-8.733,-0 -15.812,-7.037 -15.812,-15.717c0,-8.681 7.079,-15.717 15.812,-15.717c8.732,-0 15.811,7.036 15.811,15.717Z"
							fill="currentColor"
						/></svg
					>
				</span>Graphext</a
			> as a Design Engineer, crafting landing pages, documentation and tooling for what's arguably the
			fastest and most powerful analytics tool there is available in the market.
		</p>
		<p>
			I've also worked as a freelance <i>technical content creator</i> with channels like
			<strong><a href="https://www.youtube.com/@veritasium">Veritasium</a></strong>
			and
			<strong><a href="https://www.youtube.com/@reducible">Reducible</a></strong>, crafting
			animations earning <strong>+60 million</strong> impressions.
		</p>

		<p>
			I am also an avid bass player, and overall chord enjoyer. Check it out at <a
				href="https://www.youtube.com/watch?v=Dka1qR5ecd0">HSX.</a
			>
		</p>
	</main>
</section>

<div class="divider-base-content/50 divider my-24"></div>
<!-- Works -->
<section class="min-h-[50%]">
	<main class="prose prose-lg prose-headings:tracking-normal prose-a:no-underline">
		<h2>The Stuff™</h2>
		<h5>Non exhaustive list of silly things I've built. No promises.</h5>
		<div class="mt-10 flex flex-col space-y-9">
			<WorkItem link="https://tractor.graphext.com/">
				{#snippet title()}
					<div>Tractor</div>
				{/snippet}
				{#snippet description()}
					<div>An automated scraping tool</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<svg
							width="31px"
							height="29px"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							xml:space="preserve"
							class="fill-primary"
							style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						>
							<g transform="matrix(1,0,0,1,-3.712,-202.607)">
								<g transform="matrix(0.129001,0,0,0.129001,3.23315,201.48)">
									<path
										d="M198.656,155.704C219.523,155.704 236.465,172.645 236.465,193.512C236.465,214.379 219.523,231.321 198.656,231.321C177.79,231.321 160.848,214.379 160.848,193.512C160.848,172.645 177.79,155.704 198.656,155.704ZM198.656,179.273C190.798,179.273 184.417,185.653 184.417,193.512C184.417,201.371 190.798,207.751 198.656,207.751C206.515,207.751 212.896,201.371 212.896,193.512C212.896,185.653 206.515,179.273 198.656,179.273Z"
									/>
								</g>
								<g transform="matrix(0.129001,0,0,0.129001,3.23315,201.48)">
									<path
										d="M79.957,103.657C115.187,103.657 143.789,132.259 143.789,167.489C143.789,202.718 115.187,231.321 79.957,231.321C44.727,231.321 16.125,202.718 16.125,167.489C16.125,132.259 44.727,103.657 79.957,103.657ZM79.957,127.226C57.735,127.226 39.694,145.267 39.694,167.489C39.694,189.71 57.735,207.751 79.957,207.751C102.178,207.751 120.22,189.71 120.22,167.489C120.22,145.267 102.178,127.226 79.957,127.226Z"
									/>
								</g>
								<g transform="matrix(0.129001,0,0,0.129001,3.23315,201.48)">
									<path
										d="M131.707,49.41L108.67,54.388L106.181,42.869L103.897,32.301L42.511,32.301L33.216,75.322C71.126,56.106 118.449,61.763 150.815,92.293L234.798,117.293L234.798,149.79L211.229,149.79L211.229,134.868L138.46,113.206L136.35,111.096C105.226,79.971 54.688,79.971 23.564,111.096L3.712,100.274L23.491,8.732L122.918,8.732L131.707,49.41Z"
									/>
								</g>
								<g transform="matrix(0.129001,0,0,0.129001,3.23315,201.48)">
									<path
										d="M194.164,119.61L170.595,119.61L170.595,78.954L193.092,54.86L210.319,70.945L202.276,79.559L194.164,88.247L194.164,119.61Z"
									/>
								</g>
							</g>
						</svg>
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://svelte-advent-code.vercel.app/">
				{#snippet title()}
					<div>Svelte's Advent of Code 2023</div>
				{/snippet}
				{#snippet description()}
					<div>A set of 24 prompts to sharpen your Svelte skills</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<CursorClick size={40} weight="duotone" class="fill-primary mt-[3px] ml-[3px]" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://pangea-game.vercel.app">
				{#snippet title()}
					<div>Pangea</div>
				{/snippet}
				{#snippet description()}
					<div>The country guessing game</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<GlobeStand size={40} weight="duotone" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://tramos-irpf.vercel.app/">
				{#snippet title()}
					<div>Tramos IRPF</div>
				{/snippet}
				{#snippet description()}
					<div>Tax calculator for freelancers in Spain</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<Percent size={40} weight="bold" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://cycles-sup.vercel.app">
				{#snippet title()}
					<div>Cycles</div>
				{/snippet}
				{#snippet description()}
					<div>Tiny Little Habit Tracker</div>
				{/snippet}
				{#snippet icon()}
					<div class="text-primary">
						<svg
							class="ml-0.5 scale-110"
							width="33px"
							height="33px"
							style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
							fill="currentColor"
						>
							<path
								d="M31.264,19.669c0.18,0.255 0.278,0.56 0.278,0.873c-0,0.83 -0.683,1.512 -1.513,1.512c-0.39,0 -0.765,-0.151 -1.047,-0.421c-0.016,-0.015 -0.031,-0.031 -0.046,-0.048c-0.03,-0.035 -2.068,-2.229 -5.399,-3.855c-0.699,5.35 -4.564,10.442 -11.124,10.442c-2.132,0 -3.946,-0.703 -5.264,-2.008c-0.002,-0.002 -0.003,-0.003 -0.004,-0.004c-1.232,-1.239 -1.917,-2.921 -1.901,-4.666c0.001,-2.196 1.043,-4.352 2.88,-5.894l0,-0c2.019,-1.692 4.894,-2.61 8.336,-2.61l0,-0c1.291,0.001 2.577,0.138 3.837,0.409c-0.314,-1.163 -0.845,-2.209 -1.574,-3.058l-0.001,-0c-1.375,-1.604 -3.415,-2.431 -5.878,-2.431c-5.243,0 -8.856,4.977 -8.891,5.03c-0.004,0.004 -0.007,0.009 -0.011,0.014c-0.283,0.396 -0.742,0.631 -1.229,0.631c-0.83,0 -1.513,-0.683 -1.513,-1.513c-0,-0.316 0.099,-0.624 0.283,-0.881c0.191,-0.267 4.612,-6.306 11.361,-6.306c3.407,0 6.225,1.216 8.179,3.492l0.001,0c1.381,1.613 2.265,3.715 2.538,6.036c4.619,1.875 7.458,4.971 7.627,5.157c0.028,0.031 0.053,0.064 0.075,0.099Zm-12.798,2.656c1.255,-1.537 2.016,-3.596 2.142,-5.724c-1.347,-0.384 -2.741,-0.581 -4.143,-0.586c-5.553,0 -8.187,2.769 -8.187,5.484c-0,2.535 2.16,3.648 4.135,3.648c3.099,0 5.004,-1.532 6.052,-2.821l0.001,-0.001Z"
								style="fill-rule:nonzero;"
							/>
						</svg>
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://fellowship-proposal.vercel.app/en">
				{#snippet title()}
					<div>Processing Fellowship Proposal</div>
				{/snippet}
				{#snippet description()}
					<div>A presentation of Mathemagical.js, with Greg Stanton</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<Sigma size={40} weight="bold" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://mapa-elecciones-two.vercel.app/">
				{#snippet title()}
					<div>Spanish General Elections 2023 Map</div>
				{/snippet}
				{#snippet description()}
					<div>Visualization of the results, per district</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<Envelope size={40} weight="bold" class="fill-primary -rotate-12" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://elmetro.vercel.app/">
				{#snippet title()}
					<div>El Metro</div>
				{/snippet}
				{#snippet description()}
					<div>Tram tracking extremely simple</div>
				{/snippet}
				{#snippet icon()}
					<div class="text-primary">
						<svg
							class="scale-110"
							width="32px"
							height="32px"
							style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
							fill="currentColor"
							stroke="currentColor"
						>
							<path
								d="M24.346,26.798l1.194,1.418c0.005,0.006 0.01,0.011 0.014,0.017c0.656,0.82 0.523,2.031 -0.293,2.688c-0.326,0.266 -0.731,0.416 -1.153,0.423c-0.592,0.014 -1.161,-0.247 -1.534,-0.708l-3.049,-3.674l-6.23,0.197l-2.371,3.38c-0.344,0.49 -0.897,0.79 -1.494,0.813c-0.423,0.02 -0.838,-0.105 -1.181,-0.353c-0.852,-0.605 -1.06,-1.804 -0.46,-2.66l0.728,-1.036c-2.603,-0.063 -4.766,-2.175 -4.857,-4.805l-0.515,-16.271c-0.079,-2.727 2.063,-4.902 4.784,-4.995l15.264,-0.606c0.003,0 0.007,-0 0.01,-0c2.724,-0.077 4.848,2.173 4.942,4.889l0.69,16.174c0,0.004 0.001,0.008 0.001,0.012c0.075,2.613 -1.921,4.844 -4.49,5.097Zm-1.089,-24.379l-15.256,0.606l-0.005,-0c-1.73,0.06 -3.107,1.42 -3.057,3.15l0.515,16.262c0.06,1.737 1.534,3.12 3.272,3.071l1.523,-0.048c0.339,-0.011 0.656,0.172 0.818,0.47c0.161,0.299 0.14,0.664 -0.055,0.942l-1.754,2.498c-0.037,0.054 -0.023,0.129 0.03,0.167c0.003,0.002 0.006,0.004 0.009,0.006c0.015,0.011 0.033,0.017 0.051,0.016c0.004,0 0.009,-0 0.013,-0c0.038,-0.001 0.073,-0.021 0.094,-0.051l2.629,-3.747c0.163,-0.231 0.424,-0.372 0.706,-0.381l7.116,-0.226c0.277,-0.009 0.543,0.111 0.719,0.324l3.332,4.015c0.003,0.005 0.008,0.009 0.011,0.013c0.023,0.029 0.059,0.045 0.096,0.044c0.004,-0 0.009,-0 0.013,-0.001c0.019,-0 0.038,-0.008 0.052,-0.02l0.006,-0.004c0.05,-0.041 0.06,-0.114 0.022,-0.166l-2.367,-2.81c-0.221,-0.264 -0.273,-0.63 -0.133,-0.945c0.14,-0.313 0.447,-0.519 0.791,-0.53l1.523,-0.048c1.736,-0.062 3.119,-1.533 3.071,-3.269l-0.69,-16.166l-0,-0.008c-0.061,-1.731 -1.363,-3.211 -3.095,-3.164Zm-10.407,19.915c-0.318,-0.379 -0.268,-0.946 0.112,-1.264c0.38,-0.318 0.946,-0.268 1.264,0.112c0.509,0.608 1.293,0.848 2.047,0.807c0.758,-0.04 1.505,-0.359 1.93,-0.947c0.291,-0.401 0.852,-0.491 1.253,-0.201c0.402,0.291 0.492,0.852 0.202,1.253c-0.732,1.011 -1.987,1.617 -3.289,1.687c-1.304,0.07 -2.638,-0.395 -3.519,-1.447Zm-3.692,-5.081c0.048,0.493 -0.313,0.932 -0.807,0.98c-0.492,0.048 -0.932,-0.313 -0.979,-0.807c-0,0 -0.183,-1.953 0.495,-3.542c0.521,-1.223 1.498,-2.245 3.271,-2.301c1.761,-0.056 2.82,0.885 3.445,2.053c0.82,1.529 0.813,3.472 0.813,3.472c-0.002,0.495 -0.407,0.895 -0.902,0.891c-0.496,-0.003 -0.896,-0.408 -0.892,-0.903c-0,0 0.005,-1.029 -0.354,-2.046c-0.295,-0.836 -0.851,-1.712 -2.053,-1.674c-1.189,0.038 -1.655,0.945 -1.871,1.794c-0.266,1.047 -0.166,2.083 -0.166,2.083Zm9.709,-0.305c0.046,0.496 -0.318,0.937 -0.813,0.983c-0.497,0.047 -0.937,-0.317 -0.983,-0.814c-0,-0 -0.177,-1.945 0.466,-3.527c0.503,-1.237 1.455,-2.262 3.171,-2.316c1.703,-0.054 2.736,0.892 3.343,2.075c0.783,1.524 0.78,3.459 0.78,3.459c-0.002,0.498 -0.409,0.9 -0.907,0.898c-0.497,-0.002 -0.9,-0.409 -0.898,-0.906c0,-0 0.005,-1.035 -0.342,-2.059c-0.279,-0.823 -0.788,-1.699 -1.919,-1.663c-1.119,0.036 -1.539,0.941 -1.741,1.776c-0.254,1.053 -0.157,2.094 -0.157,2.094Z"
								style="fill-rule:nonzero;"
							/>
						</svg>
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://font-guesser.vercel.app/">
				{#snippet title()}
					<div>Font Guesser</div>
				{/snippet}
				{#snippet description()}
					<div>An unfinished font guessing game</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<TextB size={45} weight="bold" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://focal-es.vercel.app/">
				{#snippet title()}
					<div>FOCAL-ES</div>
				{/snippet}
				{#snippet description()}
					<div>A database with exhaustive information on focal particles</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<ChatCircleText size={40} weight="bold" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://chord-chart-maker.vercel.app/">
				{#snippet title()}
					<div>Chord Chart Maker</div>
				{/snippet}
				{#snippet description()}
					<div>An unfinished jazz-style chord chart for quick idea sharing</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<MusicNotesPlus size={40} weight="bold" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://custom-blending-modes.vercel.app/">
				{#snippet title()}
					<div>Custom Blending Modes</div>
				{/snippet}
				{#snippet description()}
					<div>Quick prototype about a hypothetical blend mode editor</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<Stack size={40} weight="bold" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
			<WorkItem link="https://ccfest-md-slides.vercel.app/">
				{#snippet title()}
					<div>CC Fest Slides</div>
				{/snippet}
				{#snippet description()}
					<div>Slides I gave for my presentation on the '22 CC Fest!</div>
				{/snippet}
				{#snippet icon()}
					<div>
						<ProjectorScreenChart size={40} weight="duotone" class="fill-primary" />
					</div>
				{/snippet}
			</WorkItem>
		</div>
	</main>
</section>

<div class="divider-base-content/50 divider my-24"></div>

<section class="min-h-[50%]">
	<main class="prose prose-lg prose-headings:tracking-normal prose-h4:font-[60]">
		<h2>Experience & Background</h2>
		<p>A little sum up of the path I've followed so far</p>
		<div class="">
			<!-- Timeline Item -->
			<TimelineItem>
				{#snippet title()}
					<h4>Graphext</h4>
				{/snippet}
				{#snippet date()}
					<div>Jan, 2024</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Design Engineer, Content Creation</div>
				{/snippet}
				{#snippet content()}
					<div>
						Graphext being quite a small startup, everyone wears lots of hats.

						<br />
						<br />
						I worked on <a href="https://tractor.graphext.com">Tractor 2.0</a>, a revival of a
						beautiful scraping tool on top of Apify, quite useful for very quickly bringing social
						media data to be analyzed within Graphext. The main focus was being able to get a useful
						social-media dataset quickly, easily and efficiently. The interface was designed with a
						great deal of care, and tons of invisible details make your experience as smooth as
						possible to download a piece of data. This makes for a great compainon to Graphext,
						where you can readily analyze what you just downloaded.

						<br />
						<br />
						Additionally, I was in charge of writing and maintaining the ever growing
						<a href="https://docs.graphext.com">documentation</a>
						for the tool, almost from scratch. Special emphasis was considered to make it as easy as
						possible to understand what Graphext can offer you, while still providing with great, dense
						documents that answer any of your questions. You will also find me in the youtube channel,
						creating tutorials and producing videos that showcase the tool or explain some complex topic.

						<br />
						<br />
						This one is funny because Alex, one of my best friends, got to meet Victoriano, the CEO.
						Alex put us in contact and it turns out we get on very well. Eventually, I got to meet the
						team at their beautiful office in Madrid.
					</div>
				{/snippet}
			</TimelineItem>
			<TimelineItem>
				{#snippet title()}
					<h4>Prisms of Reality</h4>
				{/snippet}
				{#snippet date()}
					<div>Jun, 2023</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Technical Content Creator</div>
				{/snippet}
				{#snippet content()}
					<div>
						In June, 2023, I joined the incredible Prisms team as a <i>technical content creator</i
						>, creating and animating 500+ explainer video assets in the fields of mathematics,
						physics, chemsitry and sciences through animation engineering.

						<br />
						<br />
						All this was executed within quite intense workloads and very tight deadlines, where managing
						and organizing your own work was key in order to get things done. Special care was put into
						communication, coordinating with my teammates to avoid confusion and remove blocking paths
						among the quite complex task that is is working in a startup.

						<br /><br />
						Fortunately, these videos helped kids get around the game and understand complex concepts
						in an accessible, fun way.
					</div>
				{/snippet}
			</TimelineItem>

			<TimelineItem>
				{#snippet title()}
					<h4>Design Bits</h4>
				{/snippet}
				{#snippet date()}
					<div>Mar, 2023</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Founder</div>
				{/snippet}
				{#snippet content()}
					<div>
						Around March, 2023 I created the <a href="https://youtube.com/@design_bits"
							>Design Bits</a
						>
						channel, to talk about computational design. Much of the influence I've gathered from past
						experiences can be easily picked up in this project.

						<br /><br /> We discuss the inner workings of the tools designers use daily in a
						hopefully accessible and attractive manner.

						<br /><br /> Graphic Design, Video Production, Music Production and Programming are
						disciplines that I want to keep as close to my heart as possible. This channel is a
						<i>successful</i> attempt at doing so. Every asset, animation, song or sound effect is created
						from scratch, in my room. Being able to control the interplay between all the elements makes
						me incredibly happy.
					</div>
				{/snippet}
			</TimelineItem>
			<TimelineItem>
				{#snippet title()}
					<h4>'22 Google Summer of Code</h4>
				{/snippet}
				{#snippet date()}
					<div>Jun, 2022</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Google Summer of Code Contributor</div>
				{/snippet}
				{#snippet content()}
					<div>
						In June, 2022 I proposed the Processing Foundation –through the GSOC program– a very
						important change to the p5.js library that had been asked for ages: <strong
							><a href="/blog/gif-encoding">native GIF export</a></strong
						>. <br /><br /> The p5.js community is largely stablished in Twitter, where GIF sharing
						was the main way for artists to show their works in progress, as well as the finished
						pieces.

						<br /><br />
						But GIF exporting was very cumbersome, usually requiring the user to download every single
						frame as a png for later composition, or using tools that either did not work properly or
						needed an unreasonable amount of setup.

						<br /><br />
						I am very proud to say that we managed to create this feature and make it as easy as it's
						ever been to download a GIF from your sketch.
					</div>
				{/snippet}
			</TimelineItem>

			<TimelineItem>
				{#snippet title()}
					<h4>Reducible</h4>
				{/snippet}
				{#snippet date()}
					<div>Nov, 2021</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Art Direction & Animation Engineering</div>
				{/snippet}
				{#snippet content()}
					<div>
						Helped develop a clearer brand identity for the channel, helping it stand out among a
						rapidly growing community of educational math channels. I also contributed directly to
						the creation of the animations needed, made through code. Kind of like <i
							>animation engineering.</i
						>

						<br />
						<br />
						My journey as a freelancer was blessed when I joined the
						<a href="https://youtube.com/@reducible">Reducible</a>
						youtube channel as an Art Director and Animator. <strong>Nipun</strong>, the creator and
						founder of the channel, gave me the most welcoming time and we formed a team to improve
						the channel from the ground up.
						<br />
						<br />
						This project really holds a special place in my heart, since I was so early in my career
						but still, he trusted me and allowed me to explore and exploit all the possibilities. No
						judgement, no bullshit, just vibes and code.
						<br />
						<br />

						<i>Animation engineering</i> comes from the fact that all animations were made through code.
					</div>
				{/snippet}
			</TimelineItem>

			<TimelineItem>
				{#snippet title()}
					<h4>Freelancer</h4>
				{/snippet}
				{#snippet date()}
					<div>Sep, 2021</div>
				{/snippet}
				{#snippet subtitle()}
					<div>I guess every role?</div>
				{/snippet}
				{#snippet content()}
					<div>
						In September, 2021 I started my career as a freelancer. I had just come out of my
						masters and had absolutely no idea nor properly developed skill. The only thing I had
						clear was to avoid as hard as I possibly could joining some generic big consultancy
						corporation to do lame stuff. Top 1 best decisions I've ever made.

						<br /><br />
						During this time, I worked with the
						<a href="https://youtube.com/@veritasium">Veritasium</a> team as an animation engineer,
						making mathematical animations in <a href="https://www.manim.community/">Manim</a>. This
						would shape the rest of my career as I would choose this path onwards and specialize in
						this branch of content creation.

						<br /><br />
						I also started my career as a <strong>design engineer</strong>, something I didn't know
						at the time. I started tinkering with Next.js and Svelte and made some websites for fun
						and for my local university.
					</div>
				{/snippet}
			</TimelineItem>

			<TimelineItem>
				{#snippet title()}
					<h4>MSc Data Science</h4>
				{/snippet}
				{#snippet date()}
					<div>Sep, 2020</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Masters in Data Science @ University of Granada</div>
				{/snippet}
				{#snippet content()}
					<div>
						Got my masters in Data Science through the year of 2020. Learned that you won't need
						much more than a simple linear regression in 90% of the cases you have to estimate some
						data. I also got a lot into <strong>data visualization and design</strong>.
					</div>
				{/snippet}
			</TimelineItem>

			<TimelineItem>
				{#snippet title()}
					<h4>BSc Computer Science</h4>
				{/snippet}
				{#snippet date()}
					<div>Sep, 2016</div>
				{/snippet}
				{#snippet subtitle()}
					<div>Bachelors in Computer Science @ University of Jaén</div>
				{/snippet}
				{#snippet content()}
					<div>
						From 2016 through 2020 I completed my degree in Computer Science. I didn't have a great
						time during the first years, I was <i>really</i> bad at algorithms, math and hardcore
						programming in general. It wouldn't be until 3rd year that I started to take off and
						enjoy the process.

						<br /><br />
						Today I can very confidently say that programming, algorithms and math make me very happy.
						Not an obvious choice, but probably the right one.
					</div>
				{/snippet}
			</TimelineItem>

			<TimelineItem>
				{#snippet title()}
					<h4>Music studies</h4>
				{/snippet}
				{#snippet date()}
					<div>Sep?, 2013</div>
				{/snippet}
				{#snippet subtitle()}
					<div>I basically started playing guitar</div>
				{/snippet}
				{#snippet content()}
					<div>
						At some point during the summer of 2013 I managed to convice mom to buy me a guitar.
						Sometime later I started attending guitar lessons from one of the best teachers I will
						ever know, <strong>Yeye</strong>.

						<br /><br /> Like many other things, this would completely fill up my mind and change my
						entire life, but I didn't know that yet.
					</div>
				{/snippet}
			</TimelineItem>
		</div>
	</main>
</section>

<div class="h-32"></div>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 70;
		font-weight: 50;
	}

	.prose > p {
		font-variation-settings: 'opsz' 12;
	}
</style>
