<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, DarkMode, NavUl, NavLi } from 'flowbite-svelte';

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<Navbar let:hidden let:toggle class="bg-slate-200">
	<NavBrand>
		<DarkMode {btnClass} />
		<span class="self-center ml-2 whitespace-nowrap text-xl font-semibold dark:text-white"> Blog </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/posts">Posts</NavLi>
	</NavUl>
</Navbar>
