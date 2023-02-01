import type { LayoutServerData } from './$types'

export const load: LayoutServerData = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts = await response.json();

	return {
		posts
	};
};
