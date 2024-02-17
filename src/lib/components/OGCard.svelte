<script lang="ts">
	export let title: string;
	export let desc: string;
</script>

<main
	style="background-image: linear-gradient(to bottom, #021713, #001410)"
	class="h-full w-full text-center"
>
	<div class="mx-auto flex max-w-[80%] flex-col">
		<div class="mx-auto my-20 w-fit text-[120px] font-bold tracking-tighter text-white">
			{title}
		</div>
		<div class="mx-auto mt-10 w-fit text-center text-[50px] font-thin text-white opacity-50">
			{desc}
		</div>
		<div class="mx-auto mt-32 w-fit font-mono text-white">jesirgb.com</div>
	</div>
</main>
