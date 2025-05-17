<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { LifeEvent } from '$lib/types';

	import { formatDate, stringToDate } from '$lib/utils/utils';

	import { scaleTime } from 'd3-scale';
	import { interpolateZoom, zoomIdentity, zoomTransform } from 'd3';

	import { axisLeft } from 'd3-axis';
	import { select } from 'd3-selection';
	import { min, max } from 'd3-array';
	import { zoom } from 'd3-zoom';
	import { onMount } from 'svelte';



	let width = $state(300),
		height = $state(300);

	let svgRef: SVGElement;
	let yAxisRef: SVGElement;

	let svg_height = 900;
	let svg_width = 600;

	interface Props {
		events: Array<LifeEvent>;
		timeResolution?: number;
		my?: number;
		mx?: number;
	}

	let {
		events,
		timeResolution = 10,
		my = 20,
		mx = 85
	}: Props = $props();

	function filter(event: MouseEvent) {
		return (!event.ctrlKey || event.type === 'wheel') && !event.button;
	}

	function reset() {
		select(svgRef).transition().duration(1000).call(zoomBehaviour.transform, zoomIdentity);
	}

	const zoomBehaviour = zoom()
		.interpolate(interpolateZoom.rho(0.5))
		.scaleExtent([0.02, 80])
		.filter(filter)
		.on('zoom', zoomed);

	let now = new Date();
	let currentZoom = $state(zoomTransform(select(svgRef)));


	function zoomed({ transform }) {
		// update axis
		let transformedY = transform.rescaleY(y);

		currentZoom = transform;

		lineCoords = transformedY.ticks(10).map((t) => {
			let x1 = mx,
				x2 = width;
			let y1 = transformedY(t) + my,
				y2 = transformedY(t) + my;
			return { x1: x1, y1: y1, x2: x2, y2: y2 };
		});

		select(yAxisRef).call(yAxis.scale(transformedY));
	}






	run(() => {
		width = svg_width - mx;
	});
	let xScale = $derived(scaleTime()
		.domain([min(events.map((e) => e.start)), max(events.map((e) => e.end))])
		.range([0, width])
		.nice());
	run(() => {
		height = svg_height - my * 2;
	});
	let y = $derived(scaleTime()
		.domain([new Date().setHours(new Date().getHours() - 3), new Date()])
		.range([0, height - my])
		.nice());
	// define reactive things
	let currentYScale = $derived(currentZoom.rescaleY(y));
	let yAxis = $derived(axisLeft(y).ticks(timeResolution));
	let lineCoords = $derived(y.ticks(timeResolution).map((t) => {
		let x1 = mx,
			x2 = width;
		let y1 = y(t) + my,
			y2 = y(t) + my;
		return { x1: x1, y1: y1, x2: x2, y2: y2 };
	}));
	let nowCoords = $derived(currentZoom.rescaleY(y)(now));
	run(() => {
		if (svgRef) {
			select(svgRef).call(zoomBehaviour.on('zoom', zoomed));
		}
	});
	run(() => {
		if (yAxisRef) {
			select(yAxisRef).call(yAxis);
		}
	});
</script>

<div bind:clientWidth={width}>
	<svg {width} {height} class="border">
		<g>
			{#each events as event, i}
				<text x="50%" y="50%">{event.name}</text>
			{/each}
		</g>
	</svg>
</div>
