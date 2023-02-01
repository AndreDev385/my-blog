import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	console.log('params', params);
	const post = await import(`../../posts/${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		title,
		date,
		content
	};
};
