<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article>
	<hgroup>
		<h1>{data.title}</h1>
		<h3>published: {data.date}</h3>
	</hgroup>
	<svelte:component this={data.content} />
</article>
