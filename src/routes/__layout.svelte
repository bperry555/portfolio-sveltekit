<nav>
	<div class="nav__personal">
		<a class="name" href="/">Brian Perry</a>
		<a class="about" href="/">About Me</a>
	</div>

	<div class="nav__links">
		<a href="/">Services</a>
		<a href="/">Portfolio</a>
		<a href="/">Blog</a>
	</div>
	<div class="nav__socials">
		<a href="/" class="">LinkedIn</a>
		<a href="/" class="">Email</a>
		<a href="/" class="">GitHub</a>
	</div>
</nav>

<slot />

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
	}
</style>
