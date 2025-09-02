<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import At from 'phosphor-svelte/lib/At';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import Butterfly from 'phosphor-svelte/lib/Butterfly';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import TelegramLogo from 'phosphor-svelte/lib/TelegramLogo';
	import TwitterLogo from 'phosphor-svelte/lib/TwitterLogo';
	import ReadCvLogo from 'phosphor-svelte/lib/ReadCvLogo';

	const links = [
		{ link: 'https://twitter.com/jesi_rgb', icon: TwitterLogo },
		{ link: 'https://bsky.app/profile/jesirgb.com', icon: Butterfly },
		{ link: 'https://github.com/jesi-rgb', icon: GithubLogo },
		{ link: 'https://www.linkedin.com/in/jesi-rgb/', icon: LinkedinLogo },
		{ link: 'mailto:jesirgb@gmail.com', icon: At },
		{ link: 'https://t.me/jrascon', icon: TelegramLogo }
	];
</script>

<MegaTitle>Contact</MegaTitle>

<section class="h-fit min-h-full">
	<div class="prose mx-auto text-center text-xl md:text-2xl">Find me all over the internet</div>

	<div class="mx-auto mt-10 grid w-full grid-cols-2 place-items-center md:grid-cols-3">
		{#each links as link}
			<a
				class="hover:bg-base-300 border-base-content/30 flex size-30 w-full
				items-center transition-colors hover:border"
				href={link.link}
			>
				<div
					class="btn btn-circle btn-ghost btn-primary mx-auto
					size-15 transition-all hover:rotate-12"
				>
					<svelte:component this={link.icon} class="p-1" size="48" weight="duotone" />
				</div>
			</a>
		{/each}
	</div>
	<button
		onclick={() => window.open('/jesus_rascon_CV.pdf')}
		class="btn btn-primary main-button group mt-10 w-full rounded-full"
	>
		<ReadCvLogo
			size={23}
			weight="bold"
			class="cv-logo transition-transform
			group-hover:-rotate-10"
		/>Download CV</button
	>

	<div class="mt-26 opacity-50">
		Webapge typeset in <a
			class="font-title hover:text-primary underline transition-colors"
			href="https://whirlybirdie.com/">Whirly Birdie</a
		>,
		<a
			class="hover:text-primary underline transition-colors"
			href="https://www.arrowtype.com/name-sans">AT Name Sans</a
		>
		and
		<a
			class="hover:text-primary font-mono underline transition-colors"
			href="https://typeof.net/Iosevka/">Iosevka</a
		>.
		<br />
		<a class="hover:text-primary underline transition-colors" href="https://svelte.dev">Svelte</a>
		+
		<a class="hover:text-primary underline transition-colors" href="https://tailwindcss.com"
			>Tailwind</a
		>
		through
		<a class="hover:text-primary underline transition-colors" href="https://daisyui.com">DaisyUI</a
		>.
	</div>
</section>
