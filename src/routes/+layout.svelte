<script>
	import '../app.sass';

	import { Svrollbar } from 'svrollbar';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<main>
	<Svrollbar />
	<Header />
	<slot />
	<Footer />
</main>

<style lang="sass">

:global(html)
  font-size: 62.5%

:global(body)
  margin: 0 auto
  width: 90vw
  border-left: 1px solid black
  border-right: 1px solid black
  font-family: 'Good Sans', 'Helvetica', sans-serif

:global(*)
  &, &::before, &::after
    box-sizing: border-box

:global(::-webkit-scrollbar)
  display: none

main
  --svrollbar-track-width: 1.5rem
  --svrollbar-thumb-width: 0.8rem
  --svrollbar-thumb-radius: 0
  --svrollbar-thumb-background: black
  --svrollbar-thumb-opacity: 1


</style>
