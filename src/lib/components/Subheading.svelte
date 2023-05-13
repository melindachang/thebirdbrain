<script>
	export let author, date;
</script>

<div class="subheading-wrapper">
	<span>Author: {author}</span>
	<span>{date}</span>
</div>

<style lang="sass">
  .subheading-wrapper
    padding: 2rem 4rem
    border-bottom: 1px solid black
    display: flex
    justify-content: space-between
    span
      font-size: 1.4rem
      text-transform: uppercase

</style>
