<script>
	let randomWord = '';

	const loadWord = async () => {
		let object = await fetch('https://random-word-api.vercel.app/api');
		randomWord = await object.json();
	};

	loadWord();
</script>

<div class="divider mt-20" />
<footer class="h-full mb-20 flex flex-col md:flex-row items-baseline justify-between">
	<div class="whirly text-5xl font-[50] hover:font-[100] transition-all duration-500">
		{randomWord}
	</div>
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
