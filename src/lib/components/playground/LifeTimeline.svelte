<script lang="ts">
	import type { LifeEvent } from '$lib/types';

	import { formatDate, stringToDate } from '$lib/utils/utils';

	import { scaleTime } from 'd3-scale';
	import { interpolateZoom, zoomIdentity, zoomTransform } from 'd3';

	import { axisLeft } from 'd3-axis';
	import { select } from 'd3-selection';
	import { min, max } from 'd3-array';
	import { zoom } from 'd3-zoom';
	import { onMount } from 'svelte';

	export let events: Array<LifeEvent>;

	$: xScale = scaleTime()
		.domain([min(events.map((e) => e.start)), max(events.map((e) => e.end))])
		.range([0, width])
		.nice();

	let width = 300,
		height = 300;

	let svgRef: SVGElement;
	let yAxisRef: SVGElement;

	let svg_height = 900;
	let svg_width = 600;

	export let timeResolution = 10;
	export let my = 20;
	export let mx = 85;

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
	let currentZoom = zoomTransform(select(svgRef));

	// define reactive things
	$: currentYScale = currentZoom.rescaleY(y);

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

	$: height = svg_height - my * 2;
	$: width = svg_width - mx;

	$: y = scaleTime()
		.domain([new Date().setHours(new Date().getHours() - 3), new Date()])
		.range([0, height - my])
		.nice();

	$: yAxis = axisLeft(y).ticks(timeResolution);

	$: lineCoords = y.ticks(timeResolution).map((t) => {
		let x1 = mx,
			x2 = width;
		let y1 = y(t) + my,
			y2 = y(t) + my;
		return { x1: x1, y1: y1, x2: x2, y2: y2 };
	});

	$: nowCoords = currentZoom.rescaleY(y)(now);

	$: if (svgRef) {
		select(svgRef).call(zoomBehaviour.on('zoom', zoomed));
	}
	$: if (yAxisRef) {
		select(yAxisRef).call(yAxis);
	}
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
