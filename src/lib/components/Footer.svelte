<script>
	import { fly } from 'svelte/transition';
	let randomWord = '';
	let loading = false;

	const loadWord = async () => {
		loading = true;
		let object = await fetch('https://random-word-api.vercel.app/api');
		randomWord = await object.json();
		loading = false;
	};

	loadWord();
</script>

<div class="divider divider-neutral mt-10" />
<footer class="h-full mb-20 flex flex-col md:flex-row items-baseline justify-between">
	{#if loading}
		<div class="whirly text-5xl font-[50] hover:font-[100] transition-all duration-500" />
	{:else}
		<button
			in:fly={{ y: -20 }}
			out:fly={{ y: 20 }}
			on:click={loadWord}
			class="whirly text-5xl font-[50] hover:font-[100] transition-all duration-500"
		>
			{randomWord}
		</button>
	{/if}
	<div class="whirly text-5xl whirly font-[50] hover:font-[100] transition-all duration-500">
		{new Date().getFullYear()}
	</div>
</footer>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 50;
	}

	.whirly:hover {
		font-variation-settings: 'wdth' 77;
	}
</style>
