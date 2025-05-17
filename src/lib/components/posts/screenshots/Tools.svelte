<script lang="ts">
	import { fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement = $state();
	let intersecting: boolean = $state();
</script>

<figure class="mt-32">
	<div class="relative h-[400px]">
		<IntersectionObserver once {element} bind:intersecting>
			<div bind:this={element}>
				{#if intersecting}
					<img
						transition:fly={{ y: 20, duration: 500, delay: 200 }}
						class="absolute -left-10 -top-10 -rotate-6 rounded-lg shadow-xl shadow-primary/20 transition-transform duration-500 hover:rotate-6"
						width="500"
						src="/assets/screenshooting-essentials/shottr.webp"
						alt="Shottr landing page"
					/>
					<img
						transition:fly={{ y: 50, duration: 500, delay: 400 }}
						class="absolute -right-10 bottom-0 w-[330px] rotate-[8deg] rounded-md shadow-xl shadow-primary/20 transition-transform duration-500 hover:rotate-[-8deg] md:w-[380px]"
						src="/assets/screenshooting-essentials/cleanshot.webp"
						alt="Shottr landing page"
					/>
				{/if}
			</div>
		</IntersectionObserver>
	</div>
	<figcaption>Shottr and CleanShot landing pages</figcaption>
</figure>
