<script>
	let active = false;
	const handleClick = () => (active = !active);
</script>

<div class="menu-sm" on:click={handleClick}>
	<div class="line" class:active />
	<div class="line" class:active />
	<div class="line" class:active />
</div>
<div class="mobile-links" class:active>
	<a href="/" on:click={handleClick}>Blog</a>
	<!-- <a href="/infographics" on:click={handleClick}>Infographics</a>-->
	<a href="/about" on:click={handleClick}>About</a>
</div>

<div class="section-split-auto inline-container">
	<div class="menu-lg">
		<ul>
			<li><a href="/">Blog</a></li>
			<!-- <li><a href="/infographics">Infographics</a></li> -->
			<li><a href="/about">About</a></li>
		</ul>
	</div>
</div>

<style lang="sass">
  @use '../../sass/_variables'

  .mobile-links
    display: none
    position: absolute
    top: 7.1rem
    left: 0
    right: 0
    height: calc(100vh - 7.1rem)
    flex-direction: column
    background: white
    align-items: center
    justify-content: start
    padding: 3.2rem 0
    z-index: 2
    a
      font-size: 1.6rem
      color: #000
      text-decoration: none
      text-transform: uppercase
      padding: 2.4rem
      position: relative 

    &.active
      display: flex

  .menu-sm
    width: 9.4rem
    min-width: 9.4rem
    padding: 2.6rem 3.1rem
    border-left: 1px solid black
    @media screen and ( min-width: variables.$breakpoint-lg )
        display: none
    display: flex
    flex-direction: column
    justify-content: space-between
    .line
        width: 100%
        border-bottom: 2px solid black
        transition: opacity .2s, transform .3s

        &:nth-child(1).active
            transform: translateY(7px) rotate(-45deg)
        &:nth-child(2).active
            opacity: 0
        &:nth-child(3).active
            transform: translateY(-9px) rotate(45deg)


  .section-split-auto
    display: none
    @media screen and ( min-width: variables.$breakpoint-lg )
        display: flex

    .menu-lg
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
