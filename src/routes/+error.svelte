<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let drawNumber = false;

	onMount(() => {
		drawNumber = true;
	});
</script>

<div class="min-h-screen flex">
	<div class="w-full my-auto mx-auto text-center relative">
		<svg
			class="w-full absolute -top-[500px] md:-top-[500px] -z-10"
			height="900"
			viewBox="0 0 200 200"
		>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stop-color="#fff" />
					<stop offset="70%" stop-color="#fff" stop-opacity="0" />
				</linearGradient>
			</defs>
			{#if drawNumber}
				<text
					in:fly={{ y: -10, duration: 1000, delay: 300 }}
					class="font-extrabold fill-base-100 text-[100px] md:text-[100px]"
					stroke-linecap="round"
					stroke-width=".2"
					stroke="url(#gradient)"
					text-anchor="middle"
					dominant-baseline="middle"
					x="50%"
					dy="20"
					y="50%">404</text
				>
			{/if}
		</svg>

		<div class="text-4xl md:text-6xl mt-10">
			<div class="opacity-40 mb-20">Woopsies... <br /> something went wrong.</div>
			<a
				class="text-3xl w-fit mx-auto hover:text-primary-focus hover:font-extrabold font-mono transition-all duration-500"
				href="/">Maybe go back?</a
			>
		</div>
	</div>
</div>
