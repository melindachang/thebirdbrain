export async function load({ params }) {
	const post = await import(`../../../posts/${params.slug}.svx`);
	const { title, date, author, image, snippet, source, source_url } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		image,
		author,
		source,
		source_url,
		snippet
	};
}
