<footer>
	<ul class="notices">
		<li>Made with &#x2764; by Melinda Chang.</li>
		<li>
			<a href="http://reddit.com/u/reeltoreelhistory" rel="noreferrer" target="_blank">Reddit</a>
		</li>
		<!-- <li><a href="http://instagram.com/">Instagram</a></li> -->
		<li><a href="https://github.com/melindachang" rel="noreferrer" target="_blank">GitHub</a></li>
		<li><a href="mailto:melindachang.hy@gmail.com">Email</a></li>
	</ul>
</footer>

<style lang="sass">
  @use '../../sass/variables'
  $background: #f4f4f4

  footer
    padding: 2rem 4.5rem
    background: $background
    border-top: 1px solid black
    @media screen and ( min-width: variables.$breakpoint-lg )
      border-top: none
    ul
      list-style: none
      margin: 0
      padding: 0

      li
        font-size: 1.3rem
        display: inline-block
        text-transform: uppercase

        a
          text-decoration: none
          color: black
          &:hover
            text-decoration: underline

        &:not(:last-child)
          margin-right: 4rem

</style>
