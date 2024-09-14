<script>
	import House from 'phosphor-svelte/lib/House';
	import Newspaper from 'phosphor-svelte/lib/Newspaper';
	import PencilCircle from 'phosphor-svelte/lib/PencilCircle';
	import UserCircle from 'phosphor-svelte/lib/UserCircle';
	import Camera from 'phosphor-svelte/lib/Camera';
</script>

<header class="mt-10">
	<nav class="flex w-full flex-row justify-between sm:mx-auto sm:w-1/2">
		<a href="/" class="btn btn-circle btn-ghost">
			<House weight="duotone" size="32" />
		</a>
		<a href="/blog" class="btn btn-circle btn-ghost">
			<Newspaper weight="duotone" size="32" />
		</a>
		<a href="/portfolio" class="btn btn-circle btn-ghost">
			<PencilCircle weight="duotone" size="32" />
		</a>

		<a href="/pictures" class="btn btn-circle btn-ghost">
			<Camera weight="duotone" size="32" />
		</a>
		<a href="/contact" class="btn btn-circle btn-ghost">
			<UserCircle weight="duotone" size="32" />
		</a>
	</nav>
</header>
