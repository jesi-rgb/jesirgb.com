<script lang="ts">
	export let title: string;
	export let desc: string;
</script>

<main class="h-full w-full bg-[#021713] text-center">
	<div class="mx-auto flex max-w-[80%] flex-col">
		<div class="mx-auto my-20 w-fit text-7xl font-bold text-white">
			{title}
		</div>
		<div class="mx-auto mt-10 w-fit text-center text-3xl font-thin text-white opacity-80">
			{desc}
		</div>
	</div>
</main>
