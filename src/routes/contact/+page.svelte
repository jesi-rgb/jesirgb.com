<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import At from 'phosphor-svelte/lib/At';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import TelegramLogo from 'phosphor-svelte/lib/TelegramLogo';
	import TwitterLogo from 'phosphor-svelte/lib/TwitterLogo';
</script>

<MegaTitle>Contact</MegaTitle>

<section class="h-fit min-h-full">
	<div class="prose mx-auto text-center text-xl md:text-2xl">Find me all over the internet</div>

	<div class="mx-auto mt-10 grid w-fit grid-cols-2 gap-4 md:grid-cols-3">
		<a href="https://twitter.com/jesi_rgb">
			<div class="btn btn-circle btn-ghost btn-primary btn-lg transition-all hover:rotate-12">
				<TwitterLogo size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://github.com/jesi-rgb">
			<div class="btn btn-circle btn-ghost btn-primary btn-lg transition-all hover:rotate-12">
				<GithubLogo size="48" weight="duotone" />
			</div>
		</a>
		<a href="https://www.linkedin.com/in/jesi-rgb/">
			<div class="btn btn-circle btn-ghost btn-primary btn-lg transition-all hover:rotate-12">
				<LinkedinLogo size="48" weight="duotone" />
			</div>
		</a>

		<a href="mailto:jesirgb@gmail.com">
			<div class="btn btn-circle btn-ghost btn-primary btn-lg transition-all hover:rotate-12">
				<At size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://instagram.com/jesi_rgb">
			<div class="btn btn-circle btn-ghost btn-primary btn-lg transition-all hover:rotate-12">
				<InstagramLogo size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://t.me/jrascon">
			<div class="btn btn-circle btn-ghost btn-primary btn-lg transition-all hover:rotate-12">
				<TelegramLogo class="mr-2" size="48" weight="duotone" />
			</div>
		</a>
	</div>

	<div class="mt-56 opacity-50">
		Webapge typeset in <a
			class="font-title underline transition-colors hover:text-primary"
			href="https://whirlybirdie.com/">Whirly Birdie</a
		>,
		<a
			class="underline transition-colors hover:text-primary"
			href="https://www.arrowtype.com/name-sans">AT Name Sans</a
		>
		and
		<a
			class="font-mono underline transition-colors hover:text-primary"
			href="https://typeof.net/Iosevka/">Iosevka</a
		>.
		<br />
		<a class="underline transition-colors hover:text-primary" href="https://svelte.dev">Svelte</a>
		+
		<a class="underline transition-colors hover:text-primary" href="https://tailwindcss.com"
			>Tailwind</a
		>
		through
		<a class="underline transition-colors hover:text-primary" href="https://daisyui.com">DaisyUI</a
		>.
	</div>
</section>
