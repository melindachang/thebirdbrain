<script>
	export let data;
	import PageHeadline from '../../../lib/components/PageHeadline.svelte';
	import Banner from '../../../lib/components/Banner.svelte';
	import Subheading from '../../../lib/components/Subheading.svelte';
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.snippet} />
</svelte:head>

<article>
	<PageHeadline headline={data.title} size="md" />
	<Subheading author={data.author} date={data.date} />
	<Banner src={data.image} />
	<svelte:component this={data.content} />
</article>

<style lang="sass">
  article
    border-bottom: 1px solid black
</style>
