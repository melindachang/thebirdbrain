import { slugFromPath } from '../lib/slugFromPath.js';

const MAX_POSTS = 10;

export async function load({ url }) {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: slugFromPath(path),
			...post.metadata
		}))
	);
	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	publishedPosts.forEach((post) => (post.snippet = post.snippet.substring(0, 250) + '...'));

	return { posts: publishedPosts };
}
