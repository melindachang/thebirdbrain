<script></script>

<div class="section prose paragraph">
	<slot />
</div>

<style>
	div {
		width: 100%;
	}
	@media screen and (min-width: 992px) {
		div {
			width: 80%;
		}
	}
	@media screen and (min-width: 1200px) {
		div {
			width: 60%;
		}
	}
</style>
