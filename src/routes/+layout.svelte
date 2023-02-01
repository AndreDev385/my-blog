<script lang="ts">
	import '../app.postcss';
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		DarkMode,
		NavUl,
		NavLi,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import type { LayoutData } from './$types';
	import { browser } from '$app/environment';

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

	export let data: LayoutData;
	const { posts } = data;
	console.log(posts);
</script>

<Navbar let:hidden let:toggle class="bg-gray-200">
	<NavBrand>
		<DarkMode {btnClass} />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Blog </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/posts">Posts</NavLi>
	</NavUl>
</Navbar>
<div class="flex">
	<main class="h-screen w-full container mt-8">
		<slot />
	</main>
</div>
