<div class="group relative py-6 pl-8 sm:pl-32">
	<!-- Purple label -->
	<div class="whirly mb-1 text-3xl sm:mb-0"><slot name="title" /></div>
	<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
	<div
		class="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-gradient-to-b before:from-primary/40 before:to-primary-content/40 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-2 after:border-base-content after:bg-base-100 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
	>
		<time
			class="recursive w-22 badge badge-primary left-0 mb-3 inline-flex h-6 translate-y-0.5 font-mono text-xs font-semibold sm:absolute sm:mb-0"
			><slot name="date" /></time
		>
		<div class="subtitle text-xl font-semibold"><slot name="subtitle" /></div>
	</div>
	<!-- Content -->
	<p>
		<slot name="content" />
	</p>
</div>

<style>
	.recursive {
		font-variation-settings:
			'MONO' 1,
			'CASL' 0.4,
			'CRSV' 1;
	}

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
