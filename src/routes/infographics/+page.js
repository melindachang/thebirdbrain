export async function load({ fetch }) {
	const infographics = await fetch('/infographics.json')
		.then((res) => res.json())
		.then((body) => body.items);

	infographics.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { infographics };
}
