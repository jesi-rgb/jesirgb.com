<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import SpeakerHigh from 'phosphor-svelte/lib/SpeakerHigh';
	import SpeakerX from 'phosphor-svelte/lib/SpeakerX';

	// These values are bound to properties of the video
	let time = $state(0);
	let duration: number = $state();
	let paused = $state(true);
	let video: HTMLVideoElement = $state();


	interface Props {
		url: string;
		controls?: boolean;
		loop?: boolean;
		autoplay?: boolean;
	}

	let {
		url,
		controls = true,
		loop = true,
		autoplay = false
	}: Props = $props();

	let showControls = $state(true);
	let showControlsTimeout: number;
	let muted = $state(true);

	// Used to track time of last mouse down event
	let lastMouseDown: Date;

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// .5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		lastMouseDown = new Date();
	}

	function handleMouseup(e: MouseEvent) {
		console.log('mouseup');
		if (new Date() - lastMouseDown < 300) {
			if (paused) video.play();
			else video.pause();
		}
	}

	function handleMuted() {
		muted = !muted;
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}
</script>

<div class="w-full overflow-clip rounded-xl">
	<video
		src={url}
		class="pointer-events-none h-auto w-full rounded-xl border-4 border-dashed drop-shadow-lg"
		playsinline
		preload="metadata"
		{autoplay}
		{loop}
		bind:this={video}
		bind:currentTime={time}
		bind:duration
		bind:paused
		bind:muted
	>
		<track kind="captions" />
	</video>

	<button
		onmousemove={handleMove}
		ontouchmove={preventDefault(handleMove)}
		onmousedown={handleMousedown}
		onmouseup={handleMouseup}
		tabindex="0"
		class="controls h-full"
		style="opacity: {duration && showControls && controls ? 1 : 0}"
	>
		<progress class="progress" value={time / duration || 0}></progress>

		<div class="info relative tabular-nums">
			<span class="time">{format(time)}</span>
			<span class="text-sm">click to {paused ? 'play' : 'pause'}, drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
	</button>
	<button
		style="opacity: {duration && showControls && controls ? 1 : 0}"
		class="btn btn-circle btn-ghost btn-sm absolute bottom-3 left-3 transition-opacity duration-1000 lg:btn-lg"
		onclick={handleMuted}
	>
		<!-- this hidden checkbox controls the state -->
		{#if muted}
			<!-- volume off icon -->
			<SpeakerX weight="bold" />
		{:else}
			<!-- volume on icon -->
			<SpeakerHigh weight="bold" />
		{/if}
	</button>
</div>

<style>
	div {
		position: relative;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		opacity: 0.7;
	}

	.time {
		width: 3em;
	}

	.time:last-child {
		text-align: right;
	}

	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0, 0, 0, 0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255, 255, 255, 0.6);
	}

	video {
		width: 100%;
	}
</style>
