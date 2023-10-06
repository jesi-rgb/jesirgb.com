<div class="relative pl-8 sm:pl-32 py-6 group">
	<!-- Purple label -->
	<div class=" font-bold text-3xl mb-1 sm:mb-0"><slot name="title" /></div>
	<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
	<div
		class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gradient-to-b before:from-primary/40 before:to-primary-content/40 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-base-100 after:border-2 after:box-content after:border-base-content after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
	>
		<time
			class="sm:absolute left-0 font-mono recursive translate-y-0.5 inline-flex text-xs font-semibold w-22 h-6 mb-3 sm:mb-0 badge badge-primary"
			><slot name="date" /></time
		>
		<div class="text-xl font-bold"><slot name="subtitle" /></div>
	</div>
	<!-- Content -->
	<div class="text-lg">
		<slot name="content" />
	</div>
</div>

<style>
	.recursive {
		font-variation-settings: 'MONO' 1, 'CASL' 0.4, 'CRSV' 1;
	}
</style>
