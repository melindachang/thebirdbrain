<script>
	export let data;

	import PageHeadline from '../lib/components/PageHeadline.svelte';
	import ArticleCard from '../lib/components/ArticleCard.svelte';
</script>

<svelte:head>
	<title>The Birdbrain</title>
	<meta
		name="description"
		content="The Birdbrain is a blog dedicated to the examination and appreciation of historical musicology. Learn about the artists, ideas, and cultures that make up the fabric of modern music!"
	/>
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
