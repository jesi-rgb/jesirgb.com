<script>
	import { House, Newspaper, PencilCircle, UserCircle } from 'phosphor-svelte';
</script>

<header class="mt-10">
	<nav class="flex flex-row justify-between w-full sm:w-1/2 sm:mx-auto">
		<a href="/" class="btn btn-circle btn-ghost">
			<House weight="duotone" size="32" />
		</a>
		<a href="/blog" class="btn btn-circle btn-ghost">
			<Newspaper weight="duotone" size="32" />
		</a>
		<a href="/portfolio" class="btn btn-circle btn-ghost">
			<PencilCircle weight="duotone" size="32" />
		</a>
		<a href="/about" class="btn btn-circle btn-ghost">
			<UserCircle weight="duotone" size="32" />
		</a>
	</nav>
</header>
