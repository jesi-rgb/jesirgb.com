<script lang="ts">
	import { mapRange } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let outerDiv: HTMLElement;
	let bounds: DOMRect;

	let m = { x: 0, y: 0 };

	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let weight: number, ital: number, width: number;
	$: if (bounds) {
		weight = mapRange(m.x, bounds.x, bounds.x + bounds.width, 0, 1);
	}

	onMount(() => {
		bounds = outerDiv.getBoundingClientRect();
		const interval = setInterval(() => {
			width = mapRange(new Date().getSeconds(), 0, 60, 50, 150);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div
	bind:this={outerDiv}
	role="figure"
	on:mousemove={handleMousemove}
	class="relative h-20 text-center bg-base-200 border-2 border-dashed rounded-md flex items-center align-middle"
>
	<svg class="absolute -bottom-7" width="100%" height="100%">
		<line
			x1="5%"
			y1="50%"
			x2="95%"
			y2="50%"
			stroke="white"
			stroke-opacity=".5"
			stroke-dashoffset="100"
			stroke-dasharray="20 20"
		>
			<animate attributeName="stroke-dashoffset" values="0;100" dur="8s" repeatCount="indefinite" />
		</line>
	</svg>
	<div
		id="recursive"
		class="mx-auto text-5xl"
		contenteditable
		style="font-variation-settings: 'CASL' {weight}, 'CRSV' 1"
	>
		Recursive
	</div>
	<div class="hidden md:block absolute left-10 opacity-50">Linear</div>
	<div class="hidden md:block absolute right-10 opacity-50">Casual</div>
</div>

<style>
	#recursive {
		font-family: 'Recursive';
		font-weight: 800;
	}
</style>
