<script lang="ts">
	export let title: string;
	export let desc: string;
</script>

<main style="background-image: linear-gradient(to bottom, #021713, #001410)" class="h-full w-full">
	<div class="mx-10 flex max-w-[80%] flex-col">
		<div class="my-20 w-fit font-title text-[120px] font-bold tracking-tighter text-white">
			{title}
		</div>
		<div class="mt-10 w-fit text-[50px] font-thin text-white opacity-50">
			{desc}
		</div>
		<div class="mt-32 w-fit font-mono text-white">jesirgb.com</div>
	</div>
</main>
