<script>
	export let data;

	import PageHeadline from '../lib/components/PageHeadline.svelte';
	import ArticleCard from '../lib/components/ArticleCard.svelte';
</script>

<svelte:head>
	<title>The Birdbrain</title>
	<meta name="title" content="The Birdbrain" />
	<meta
		name="description"
		content="The Birdbrain is a blog dedicated to the examination and appreciation of all things birds!"
	/>
	<meta
		name="keywords"
		content="bird,birding,birdwatching,birds,wildlife,blog,bird blog,birding blog,ornithology,ornithology blog,bird news,melinda chang"
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="author" content="Melinda Chang" />
</svelte:head>

<div class="sections">
	<PageHeadline headline="Blog" />
	{#if !data.posts.length}
		<div class="section prose paragraph"><p>Nothing yet... Check back later for new posts.</p></div>
	{/if}
	{#each data.posts as article}
		<ArticleCard {article} />
	{/each}
</div>

<style lang="sass">
</style>
