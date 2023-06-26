<script>
	export let src, source, source_url;
</script>

<div class="hero">
	<img {src} alt="" />
</div>
<div class="caption">
	Source: <a href={source_url} target="_blank" rel="noreferrer">{source}</a>
</div>

<style lang="sass">
  .hero 
    max-height: 100vh
    width: 100%
    // background-size: cover
    // background-repeat: no-repeat
    // background-position: center center
    overflow: hidden
    position: relative

    img
      width: 100%

  .caption
    font-size: 1.2rem
    padding: 2rem 0 0 4rem
    text-transform: uppercase
    
    &, a
      color: rgba(0,0,0,0.7)

    

</style>
