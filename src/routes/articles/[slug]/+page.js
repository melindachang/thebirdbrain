export async function load({ params }) {
	const post = await import(`../../../posts/${params.slug}.svx`);
	const { title, date, author, image, snippet } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		image,
		author,
		snippet
	};
}
