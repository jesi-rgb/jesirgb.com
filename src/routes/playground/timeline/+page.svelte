<script lang="ts">
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import LifeTimeline from '$lib/components/playground/LifeTimeline.svelte';

	import type { LifeEvent } from '$lib/types';

	let events: Array<LifeEvent> = [
		{ name: 'CS Degree', start: new Date('15-09-2016'), end: new Date('31/06/2020') },
		{ name: 'MSc Data Science', start: new Date('15-09-2020'), end: new Date('17/09/2021') }
	];
</script>

<MegaTitle>Timeline</MegaTitle>

Timeline of my life

<LifeTimeline {events} />
