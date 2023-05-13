<script>
	export let src;
</script>

<div class="hero" style={`background-image:url(${src})`} />

<style lang="sass">
  .hero 
    height: 75vh
    width: 100%
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    position: relative

</style>
