<script>
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';
	let time = $state(new Date());
	let seconds = $state(false);
	let colon = $derived(seconds ? ' ' : ':');

	let hours = $derived(time.getHours().toString().padStart(2, '0'));
	let minutes = $derived(time.getMinutes().toString().padStart(2, '0'));

	run(() => {
		console.log(minutes);
	});

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
			seconds = !seconds;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="w-fit mx-auto font-['DSEG7ClassicMini']">
	{hours}{colon}{minutes}
</div>
