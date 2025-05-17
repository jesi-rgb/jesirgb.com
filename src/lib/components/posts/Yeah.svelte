<script>
	let a = $state(0);
</script>

<button
	class="btn btn-circle btn-primary btn-outline btn-lg text-2xl font-extrabold font-mono mx-auto not-prose"
	onclick={() => {
		a += 1;
	}}
>
	{a}
</button>
