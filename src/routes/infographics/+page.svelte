<script>
	export let data;

	import PageHeadline from '@lib/components/PageHeadline.svelte';
	import Collection from '@lib/components/Collection.svelte';
</script>

<svelte:head>
	<title>Infographics</title>
	<meta
		name="description"
		content="See cool infographics about genres, stylistic influences, soundtracks, and more!"
	/>
</svelte:head>

<div class="sections">
	<PageHeadline headline="Infographics" />
	<Collection infographics={data.infographics} />
</div>
