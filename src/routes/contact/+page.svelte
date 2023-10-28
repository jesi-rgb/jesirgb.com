<script>
	import MegaTitle from '$lib/components/MegaTitle.svelte';
	import { At, GithubLogo, LinkedinLogo, TelegramLogo, TwitterLogo } from 'phosphor-svelte';
</script>

<MegaTitle>Contact</MegaTitle>

<section class="h-56">
	<div class="text-3xl md:text-4xl text-center">Find me all over <br /> the internet</div>

	<div
		class="flex flex-col justify-center space-y-3 md:space-y-0 md:space-x-3 md:w-fit sm:mx-auto sm:flex-row items-center mt-10"
	>
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

		<a href="mailto:blograso@gmail.com">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<At size="48" weight="duotone" />
			</div>
		</a>

		<a href="https://t.me/jrascon">
			<div class="btn btn-lg btn-circle btn-ghost btn-primary hover:rotate-12 transition-all">
				<TelegramLogo class="mr-2" size="48" weight="duotone" />
			</div>
		</a>
	</div>
</section>
