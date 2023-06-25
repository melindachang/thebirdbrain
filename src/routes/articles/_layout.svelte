<script></script>

<div class="section prose paragraph">
	<slot />
</div>

<style lang="sass">
	@use '../../sass/_variables'

	.prose
		width: 100%
		@media screen and ( min-width: variables.$breakpoint-lg )
			width: 60%
</style>
