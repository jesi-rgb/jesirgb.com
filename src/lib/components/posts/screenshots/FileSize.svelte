<script lang="ts">
	import { fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let element: HTMLElement;
	let intersecting: boolean;

	let pngSize = 100;
	let webpSize = 15;

	const pngSizeTween = tweened(0, {
		duration: 800,
		delay: 500,
		easing: cubicOut
	});

	const webPSizeTween = tweened(0, {
		duration: 800,
		delay: 500,
		easing: cubicOut
	});

	$: console.log(intersecting);

	$: if (intersecting) {
		pngSizeTween.set(pngSize);
		webPSizeTween.set(webpSize);
	}
</script>

<IntersectionObserver once {element} bind:intersecting>
	<div bind:this={element} class="flex flex-col gap-5 tabular-nums">
		{#if intersecting}
			<div class="flex flex-col">
				<span>PNG: {$pngSizeTween.toFixed(0)} kB</span>
				<progress class="progress progress-secondary" value={$pngSizeTween} max="100"></progress>
			</div>

			<div class="flex flex-col">
				<span>WebP: {$webPSizeTween.toFixed(0)} kB</span>
				<progress class="progress progress-primary" value={$webPSizeTween} max="100"></progress>
			</div>
		{/if}
	</div>
</IntersectionObserver>
