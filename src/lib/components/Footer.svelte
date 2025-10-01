<script>
	import Sun from 'phosphor-svelte/lib/Sun';
	import Moon from 'phosphor-svelte/lib/Moon';

	import { fly } from 'svelte/transition';
	let randomWord = $state('EMBRACE');
	let loading = $state(false);

	// migrate
	const loadWord = async () => {
		loading = true;
		let object = await fetch('https://random-word-api.vercel.app/api');
		randomWord = await object.json();
		loading = false;
	};
</script>

<div class="divider-base-content/50 divider mt-10"></div>
<footer class="mb-20 flex h-full flex-col items-baseline justify-between md:flex-row">
	{#if loading}
		<div class="whirly text-5xl font-[50] transition-all duration-500 hover:font-thin"></div>
	{:else}
		<button
			in:fly={{ y: -20 }}
			out:fly={{ y: 20 }}
			onclick={loadWord}
			class="whirly text-5xl font-[50] transition-all duration-500 hover:font-thin"
		>
			{randomWord}
		</button>
	{/if}
	<label class="swap swap-rotate self-start md:self-center">
		<!-- this hidden checkbox controls the state -->
		<input type="checkbox" class="theme-controller" value="jesi-dark" />

		<!-- sun icon -->
		<Sun class="swap-off" size={32} weight={'duotone'} />

		<!-- moon icon -->
		<Moon class="swap-on" size={32} weight={'duotone'} />
	</label>
	<div class="whirly whirly text-5xl font-[50] transition-all duration-500 hover:font-thin">
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
