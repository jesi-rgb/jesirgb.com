<script lang="ts">
	import SpeakerHigh from 'phosphor-svelte/lib/SpeakerHigh';
	import SpeakerX from 'phosphor-svelte/lib/SpeakerX';

	// These values are bound to properties of the video
	let time = 0;
	let duration: number;
	let paused = true;
	let video: HTMLVideoElement;

	export let url: string;

	let showControls = true;
	let showControlsTimeout: Timeout;
	let muted = true;

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

<div class="overflow-clip rounded-xl">
	<video
		src={url}
		class="pointer-events-none h-auto w-full rounded-xl border-4 border-dashed drop-shadow-lg"
		playsinline
		bind:this={video}
		bind:currentTime={time}
		bind:duration
		bind:paused
		bind:muted
	>
		<track kind="captions" />
	</video>

	<button
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
		tabindex="0"
		class="controls h-full"
		style="opacity: {duration && showControls ? 1 : 0}"
	>
		<progress class="progress" value={time / duration || 0} />

		<div class="info relative tabular-nums">
			<span class="time">{format(time)}</span>
			<span class="text-sm">click to {paused ? 'play' : 'pause'}, drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
	</button>
	<button
		style="opacity: {duration && showControls ? 1 : 0}"
		class="btn btn-circle btn-ghost btn-sm absolute bottom-3 left-3 transition-[opacity] duration-1000 lg:btn-lg"
		on:click={handleMuted}
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
