<script>
	export let infographics;
</script>

<div class="grid">
	{#each infographics as graphic}
		<div class="grid-item">
			<div class="content">
				<div class="img" />
				<span class="caption"><span class="date">{graphic.date} &mdash;</span> {graphic.title}</span
				>
			</div>
		</div>
	{/each}
</div>

<style lang="sass">
  @use '../../sass/variables'

  .grid
    display: grid
    grid-gap: 1px
    @media screen and ( min-width: variables.$breakpoint-md )
      grid-template-columns: 1fr 1fr
    @media screen and ( min-width: variables.$breakpoint-xl )
      grid-template-columns: 1fr 1fr 1fr
    @media screen and ( min-width: variables.$breakpoint-xxl )
      grid-template-columns: 1fr 1fr 1fr 1fr

    .grid-item
      outline: 1px solid
      padding: 5rem
      span
        font-size: 1.4rem
        text-transform: uppercase
        &.date
          color: #888

      .img
        background: gray
        width: 100%
        height: 0
        padding-bottom: 100%
        margin-bottom: 2rem


</style>
