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
		weight = mapRange(m.y, bounds.y, bounds.y + bounds.height, 50, 100);
		ital = mapRange(m.x, bounds.x, bounds.x + bounds.width, 0, 20);
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
	class="flex h-20 items-center rounded-md border-2 border-dashed bg-base-300 text-center align-middle font-title text-4xl"
>
	<div
		class="mx-auto"
		contenteditable
		style="font-variation-settings: 'wght' {weight}, 'ital' {ital}, 'wdth' {width};"
	>
		Talent
	</div>
</div>
