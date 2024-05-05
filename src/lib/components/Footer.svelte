<script>
	import { fly } from 'svelte/transition';
	let randomWord = 'EMBRACE';
	let loading = false;

	const loadWord = async () => {
		loading = true;
		let object = await fetch('https://random-word-api.vercel.app/api');
		randomWord = await object.json();
		loading = false;
	};

	// loadWord();
</script>

<div class="divider-base-content/50 divider mt-10" />
<footer class="mb-20 flex h-full flex-col items-baseline justify-between md:flex-row">
	{#if loading}
		<div class="whirly text-5xl font-[50] transition-all duration-500 hover:font-[100]" />
	{:else}
		<button
			in:fly={{ y: -20 }}
			out:fly={{ y: 20 }}
			on:click={loadWord}
			class="whirly text-5xl font-[50] transition-all duration-500 hover:font-[100]"
		>
			{randomWord}
		</button>
	{/if}
	<div class="whirly whirly text-5xl font-[50] transition-all duration-500 hover:font-[100]">
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
