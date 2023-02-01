<script lang="ts">
	import '../app.postcss';
	import type { LayoutData } from './$types';
	import Header from '../lib/Header.svelte';

	export let data: LayoutData;
	const { posts } = data;
	console.log(posts);
</script>

<Header />
<div class="flex">
	<main class="h-screen w-full container mt-8">
		<slot />
	</main>
</div>
