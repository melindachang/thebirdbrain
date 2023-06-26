<script>
	export let data;
	import PageHeadline from '@lib/components/PageHeadline.svelte';
	import Banner from '@lib/components/Banner.svelte';
	import Subheading from '@lib/components/Subheading.svelte';
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="title" content={data.title} />
	<meta name="description" content={data.snippet} />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="author" content="Melinda Chang" />
	<meta
		name="keywords"
		content={data.title +
			',bird,birding,birdwatching,birds,wildlife,blog,bird blog,birding blog,ornithology,ornithology blog,bird news,melinda chang'}
	/>
</svelte:head>

<article>
	<PageHeadline headline={data.title} size="md" />
	<Subheading author={data.author} date={data.date} />
	<Banner src={data.image} source={data.source} source_url={data.source_url} />
	<svelte:component this={data.content} />
</article>

<style lang="sass">
	@use '@sass/variables'

	article
		@media screen and ( min-width: variables.$breakpoint-lg )
			border-bottom: 1px solid black
</style>
