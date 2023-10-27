<script>
	/* export let title; */
</script>

<a href="https://cycles-sup.vercel.app">
	<div class="flex items-center space-x-3 group">
		<div
			class="h-16 w-16 rounded-full flex items-center border-neutral-700 border-2 bg-base-200 group-hover:border-primary transition-all"
		>
			<div class="mx-auto no-prose">
				<slot name="icon" />
			</div>
		</div>
		<div class="flex flex-col group-hover:text-base-content transition-colors">
			<div class="font-bold font-title no-prose">
				<slot name="title" />
			</div>
			<div class="not-prose">
				<slot name="description" />
			</div>
		</div>
	</div>
</a>
