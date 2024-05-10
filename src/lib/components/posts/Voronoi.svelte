<script lang="ts">
	import { createVoronoiDiagram } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	import { fly, draw, fade } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	let intersecting: boolean;
	let loaded: boolean;

	let element: HTMLElement;

	const duration = 10,
		delay = 10;

	type Point = {
		x: number;
		y: number;
	};

	let width = 400;
	let height = 500;

	let points: Array<Point> = [];
	let tessellation;
	let time;

	onMount(() => {
		points = [...Array(300)].map(() => {
			return {
				x: Math.random() * width,
				y: Math.random() * height
			};
		});

		tessellation = createVoronoiDiagram({
			// The width of our canvas/drawing space
			width,
			// The height of our canvas/drawing space
			height,
			// The generating points we just created
			points,
			// How much we should "even out" our cell dimensions
			relaxIterations: 6
		});

		loaded = true;
		const time = duration * points.length;

		setTimeout(() => {
			vanish = true;
		}, time);
	});

	let pointsG: SVGElement;

	let vanish = false;
</script>

<div bind:this={element} bind:clientWidth={width}>
	<svg class="h-full w-full bg-base-300" {height}>
		{#if tessellation}
			<g class:disappear={vanish} bind:this={pointsG} id="points">
				{#each tessellation.points as point, i}
					<circle
						in:fade|global={{ duration: duration, delay: i * delay }}
						cy={point.y}
						cx={point.x}
						r="1"
						class="fill-primary/40"
					></circle>
				{/each}
			</g>
			<g>
				{#each tessellation.cells as cell, i}
					<polygon
						in:fade|global={{ duration: duration, delay: i * delay }}
						class="stroke-primary"
						points={cell.points}
						fill="none"
					/>
				{/each}
			</g>
		{/if}
	</svg>
</div>

<style>
	.disappear {
		opacity: 0;
	}
</style>
