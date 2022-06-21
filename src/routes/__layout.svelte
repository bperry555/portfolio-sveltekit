<script lang="ts">
	import MainNav from '$lib/MainNav.svelte';
</script>

<MainNav />

<slot />

<style lang="scss">
	:global(body) {
		background-color: $bg-dark;
		color: $primary-color;
	}
</style>
