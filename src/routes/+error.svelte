<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let drawNumber = false;

	onMount(() => {
		drawNumber = true;
	});
</script>

<div class="flex min-h-screen">
	<div class="relative mx-auto my-auto w-full text-center">
		<svg
			class="absolute -top-[500px] -z-10 w-full md:-top-[500px]"
			height="900"
			viewBox="0 0 200 200"
		>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stop-color="text-primary-focus" />
					<stop offset="70%" stop-color="#fff" stop-opacity="0" />
				</linearGradient>
			</defs>
			{#if drawNumber}
				<text
					in:fly={{ y: -10, duration: 1000, delay: 300 }}
					class="fill-base-300 text-[100px] font-extrabold md:text-[100px]"
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

		<div class="mt-10 text-4xl md:text-5xl">
			<div class="mb-20 opacity-40">Woopsies... <br /> something went wrong.</div>
			<a
				class="hover:text-primary-focus mx-auto w-fit text-3xl underline transition-all duration-500 hover:font-extrabold"
				href="/">Maybe go back?</a
			>
		</div>
	</div>
</div>
