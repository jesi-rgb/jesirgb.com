<script lang="ts">
	import { createVoronoiDiagram } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	let element: HTMLElement = $state();

	const duration = 10,
		delay = 10;

	type Point = {
		x: number;
		y: number;
	};

	let width = $state(400);
	let height = 500;

	let points: Array<Point> = [];
	let tessellation = $state();

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

	let pointsG: SVGElement = $state();

	let vanish = $state(false);
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
