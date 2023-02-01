<script lang="ts">
	import type { PageData } from './$types';
	import { Card, Button } from 'flowbite-svelte';

	export let data: PageData;
	const { posts } = data;
</script>

<section class="flex flex-wrap items-center justify-center">
	{#each posts as post}
		<Card class='m-2'>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{post.meta.title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
			<Button><a href={post.path}>Read More</a></Button>
		</Card>
	{/each}
</section>
