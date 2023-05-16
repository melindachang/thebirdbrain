<script>
</script>

<div class="section-split-auto inline-container">
	<div class="menu-sm">img</div>
	<div class="menu-lg">
		<ul>
			<li><a href="/">Blog</a></li>
			<li><a href="/infographics">Infographics</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
</div>

<style lang="sass">
  @use '../../sass/variables'
  
  .menu-sm
    @media screen and ( min-width: variables.$breakpoint-lg )
        display: none

  .menu-lg
    display: none
    @media screen and ( min-width: variables.$breakpoint-lg )
        display: block
    ul
        margin: 0
        padding: 0
        list-style: none
        li
            display: inline-block
            text-transform: uppercase
            font-size: 1.4rem
            &:not(:last-child)
                margin-right: 3rem
            a
                color: black
                text-decoration: none
                &:hover
                    text-decoration: underline
</style>
