<script>
	import { page } from '$app/stores';
</script>

<div class="min-h-screen flex flex-col text-5xl">
	<div class="w-fit my-auto mx-auto text-center">
		<h1 class="font-mono">{$page.error.message}</h1>
		<a class="btn btn-outline btn-primary" href="/">Maybe go back?</a>
	</div>
</div>
