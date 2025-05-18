<script lang="ts">
	interface Props {
		title?: import('svelte').Snippet;
		date?: import('svelte').Snippet;
		subtitle?: import('svelte').Snippet;
		content?: import('svelte').Snippet;
	}

	let { title, date, subtitle, content }: Props = $props();
</script>

<div class="group relative py-6 pl-8 sm:pl-32">
	<!-- Purple label -->
	<div class="whirly mb-1 text-3xl sm:mb-0">{@render title?.()}</div>
	<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
	<div
		class="before:from-primary/40 before:to-primary-content/40 after:border-base-content after:bg-base-100 mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-linear-to-b before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-2 sm:flex-row sm:before:left-0 sm:before:ml-26 sm:after:left-0 sm:after:ml-26"
	>
		<time
			class="badge badge-primary left-0 mb-3 inline-flex h-6 translate-y-0.5 font-mono text-xs sm:absolute sm:mb-0"
			>{@render date?.()}</time
		>
		<div class="subtitle text-xl font-semibold">{@render subtitle?.()}</div>
	</div>
	<!-- Content -->
	<p>
		{@render content?.()}
	</p>
</div>

<style>
	.whirly {
		font-family: 'Whirly Birdie';
		font-variation-settings: 'wdth' 75;
	}
	p {
		font-variation-settings: 'opsz' 12;
	}

	.subtitle {
		font-variation-settings: 'opsz' 15;
	}
</style>
