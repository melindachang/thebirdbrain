<script>
	import NowPlaying from './NowPlaying.svelte';
	import Search from './Search.svelte';
	import Menu from './Menu.svelte';

	let menuActive = false;

	let screenSize,
		scrollY,
		hidden = false,
		prevY = 0;

	const handleScroll = () => {
		const newVal = scrollY > prevY && scrollY > 130 && screenSize < 1200 && !menuActive;
		prevY = scrollY;
		if (hidden === newVal) return;
		hidden = newVal;
	};
</script>

<svelte:window on:scroll={handleScroll} bind:innerWidth={screenSize} bind:scrollY />

<div class="wrapper-header" class:hidden>
	<div class="container-header section-split section-split-auto">
		<a class="logo" href="/">
			<lottie-player
				src="https://assets7.lottiefiles.com/packages/lf20_h5njm9gv.json"
				background="transparent"
				loop
				autoplay
			/>
			<h1>The Birdbrain</h1>
		</a>
		<Menu bind:active={menuActive} />
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
    @use '@sass/variables'
    $accent-red: #ed672c

    lottie-player
        width: 4.8rem
        height: 4.8rem
        margin-right: 1rem

    h1  
        text-transform: uppercase
        font-weight: 900
        white-space: nowrap

    .wrapper-header
        top: 0
        z-index: 20
        position: fixed
        background: white
        width: 100%
        transition: all .35s ease

        &.hidden
            top: -13rem

        .container-lower
            border-bottom: 1px solid black
            display: flex
            .search
              border-left: 1px solid black
              padding: 0
              display: none
              @media screen and ( min-width: variables.$breakpoint-lg )
                display: flex
        .container-header
            border-bottom: 1px solid black
            display: flex
            flex-direction: row
            height: 7rem

            .logo
                margin: 0 auto
                background: $accent-red
                text-decoration: none
                color: black
                display: flex
                align-items: center
                width: 50%
                flex-grow: 1

                h1
                    margin: 0

</style>
