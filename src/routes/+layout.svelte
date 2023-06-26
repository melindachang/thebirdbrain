<script>
	import '../app.sass';

	// import { Svrollbar } from 'svrollbar';

	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<main>
	<!-- <Svrollbar /> -->
	<Header />
  <div class="header-placeholder"></div>
  <main class="content">
  	<slot />
  </main>
	<Footer />
</main>

<style lang="sass">
  @use '@sass/variables'

  :global(html)
    font-size: 62.5%

  :global(body)
    margin: 0 auto
    font-family: 'Good Sans', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif
    @media screen and ( min-width: variables.$breakpoint-xl )
      width: 90vw
      border-left: 1px solid black
      border-right: 1px solid black

  :global(*)
    &, &::before, &::after
      box-sizing: border-box

  :global(::-webkit-scrollbar)
    display: none

  .header-placeholder
    padding-bottom: variables.$header-height


</style>
