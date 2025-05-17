<script lang="ts">
	interface Props {
		title: string;
		desc: string;
	}

	let { title, desc }: Props = $props();
</script>

<main
	style="background: radial-gradient(circle, rgba(13,81,68,1) 0%, rgba(0,20,16,1) 80%);"
	class="h-full w-full rounded-xl border border-[#A8F3D0]"
>
	<div class="mx-20 my-auto flex h-[80%] flex-col justify-between">
		<div class="flex max-w-[80%] flex-col">
			<div
				class="w-fit font-title text-[120px] font-bold leading-[.95] tracking-tighter text-white"
			>
				{title}
			</div>
			<div class="mt-20 w-fit text-[50px] font-thin text-white opacity-50">
				{desc}
			</div>
		</div>
		<div class="w-fit font-mono text-[40px] text-white">jesirgb.com</div>
	</div>
</main>
