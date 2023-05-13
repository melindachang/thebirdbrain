<script>
	import NowPlaying from './NowPlaying.svelte';
	import Search from './Search.svelte';
	import Menu from './Menu.svelte';
</script>

<div class="wrapper-header">
	<div class="container-header section-split section-split-auto">
		<a class="logo" href="/">
			<!-- <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_yaxlf0vy.json" background="transparent" speed="0.5" loop autoplay /> -->
			<lottie-player
				src="https://assets7.lottiefiles.com/packages/lf20_h5njm9gv.json"
				background="transparent"
				loop
				autoplay
			/>
			<h1>The Birdbrain</h1>
		</a>
		<Menu />
	</div>
	<div class="container-lower section-split section-split-auto">
		<div class="nowplaying">
			<NowPlaying />
		</div>
		<div class="search">
			<Search />
		</div>
	</div>
</div>

<style lang="sass">
    @use '../../sass/variables'
    $accent-red: #ed672c

    lottie-player
        width: 4.8rem
        height: 4.8rem
        margin-right: 1rem

    h1  
        text-transform: uppercase
        font-size: 3.2rem
        font-weight: 900

    .wrapper-header
        z-index: 20
        .container-lower
            border-bottom: 1px solid black
            display: flex
            .search
              border-left: 1px solid black
              padding: 0
        .container-header
            border-bottom: 1px solid black
            display: flex

            .logo
                padding: 2rem
                background: $accent-red
                text-decoration: none
                color: black

                h1
                    margin: 0



</style>
