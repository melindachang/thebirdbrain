<script>
	export let author, date;
</script>

<div class="subheading-wrapper">
	<span>Author: {author}</span>
	<span>{date}</span>
</div>

<style lang="sass">
  @use '@sass/variables'

  .subheading-wrapper
    padding: 2rem 4rem
    border-bottom: 1px solid black
    display: flex
    flex-direction: column
    justify-content: space-between
    @media screen and ( min-width: variables.$breakpoint-lg )
      flex-direction: row

    span
      font-size: 1.4rem
      text-transform: uppercase
      &:nth-child(2)
        padding-top: 0.5rem
        @media screen and ( min-width: variables.$breakpoint-lg )
          padding-top: 0

        
</style>
