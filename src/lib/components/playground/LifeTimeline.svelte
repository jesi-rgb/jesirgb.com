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
