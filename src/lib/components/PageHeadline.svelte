<script>
	export let headline,
		size = 'lg';
</script>

<div class="headline-wrapper">
	{#if size === 'md'}
		<h3 class="caption">Article</h3>
		<h1 class="page-headline md">{headline}</h1>
	{:else}
		<h1 class="page-headline lg">{headline}</h1>
	{/if}
</div>

<style lang="sass">
  @use '@sass/variables'
  
  .headline-wrapper
    padding: 4rem
    border-bottom: 1px solid black

  .caption
    font-size: 1.4rem
    font-weight: 400
    text-transform: uppercase
    margin: 0 0 2rem 0

  .page-headline
    margin: 0
    font-weight: 400
    text-transform: uppercase

    &.lg
      font-size: 3.2rem
      @media screen and ( min-width: variables.$breakpoint-lg )
        font-size: 9.6rem

    &.md
      font-size: 3.2rem
      @media screen and ( min-width: variables.$breakpoint-lg )
        font-size: 4.8rem
      

</style>
