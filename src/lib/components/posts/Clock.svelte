<script>
	import { onMount } from 'svelte';
	let time = new Date();
	let seconds = false;
	$: colon = seconds ? ' ' : ':';

	$: hours = time.getHours().toString().padStart(2, '0');
	$: minutes = time.getMinutes().toString().padStart(2, '0');

	$: console.log(minutes);

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
