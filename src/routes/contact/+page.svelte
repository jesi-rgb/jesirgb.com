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
	<div class="text-3xl md:text-4xl text-center">Find me all over <br /> the internet</div>

	<div class="grid grid-cols-2 md:grid-cols-3 w-fit mx-auto gap-4 mt-10">
		<a href="https://twitter.com/jesi_rgb">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<TwitterLogo size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://github.com/jesi-rgb">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<GithubLogo size="48" weight="duotone" />
			</div>
		</a>
		<a href="https://www.linkedin.com/in/jesi-rgb/">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<LinkedinLogo size="48" weight="duotone" />
			</div>
		</a>

		<a href="mailto:jesirgb@gmail.com">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<At size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://instagram.com/jesi_rgb">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<InstagramLogo size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://t.me/jrascon">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<TelegramLogo class="mr-2" size="48" weight="duotone" />
			</div>
		</a>
	</div>

	<div class="mt-56 opacity-50">
		Webapge typeset in <a
			class="underline hover:text-primary transition-colors font-title"
			href="https://whirlybirdie.com/">Whirly Birdie</a
		>,
		<a
			class="underline hover:text-primary transition-colors"
			href="https://www.fontshare.com/fonts/supreme">Supreme</a
		>
		and
		<a
			class="underline hover:text-primary transition-colors font-mono"
			href="https://www.recursive.design/">Recursive</a
		>.
		<br />
		<a class="underline hover:text-primary transition-colors" href="https://svelte.dev">Svelte</a>
		+
		<a class="underline hover:text-primary transition-colors" href="https://tailwindcss.com"
			>Tailwind</a
		>
		through
		<a class="underline hover:text-primary transition-colors" href="https://daisyui.com">DaisyUI</a
		>.
	</div>
</section>
