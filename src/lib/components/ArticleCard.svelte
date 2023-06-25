<script>
	export let article;
</script>

<div class="section-split">
	<div class="section">
		<h2>
			<span class="date">{article.date} &mdash;</span>
			<a href={`/articles/${article.slug}`}>{article.title}</a>
		</h2>
	</div>
	<div class="section prose paragraph" style="border:none">
		<p>{article.snippet} <br /><a href={`/articles/${article.slug}`}>Read More</a></p>
	</div>
</div>

<style lang="sass">

  h2
    font-weight: 400
    text-transform: uppercase
    font-size: 2.8rem

    .date
      color: #888

    a
      color: black
      text-decoration: none

      &:hover
        text-decoration: underline

</style>
