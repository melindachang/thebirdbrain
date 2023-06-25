<footer>
	<span>Made with &#x2764; by Melinda Chang.</span>
	<ul class="notices">
		<li>
			<a href="http://reddit.com/u/reeltoreelhistory" rel="noreferrer" target="_blank">Reddit</a>
		</li>
		<!-- <li><a href="http://instagram.com/">Instagram</a></li> -->
		<li><a href="https://github.com/melindachang" rel="noreferrer" target="_blank">GitHub</a></li>
		<li><a href="mailto:melindachang.hy@gmail.com">Email</a></li>
	</ul>
</footer>

<style lang="sass">
  @use '@sass/variables'
  $background: #f4f4f4

  footer
    padding: 2rem 4.5rem
    background: $background
    border-top: 1px solid black
    font-size: 1.3rem
    text-transform: uppercase
    @media screen and ( min-width: variables.$breakpoint-lg )
      border-top: none

    
    span
      display: inline-block
      margin: 0
      @media screen and ( min-width: variables.$breakpoint-md )
        margin: 0 4rem 0 0

    ul
      display: inline-block
      @media screen and ( min-width: variables.$breakpoint-md )
        padding: 0
      list-style: none
      margin: 0
      padding: 2rem 0 0 0

      li
        display: inline-block

        a
          text-decoration: none
          color: black
          &:hover
            text-decoration: underline

        &:not(:last-child)
          margin-right: 4rem

</style>
