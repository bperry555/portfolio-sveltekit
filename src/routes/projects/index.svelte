<script lang="ts">
	let searchString = '';

	const handleSearch = () => {
		console.log(searchString);
	};
</script>

<svelte:head>
	<title
		>Brian Perry: Projects | Data Analytics | Software Engineering | Automation | Web Developement</title
	>
</svelte:head>
<form on:submit={handleSearch} name="search__project">
	<input type="search" placeholder="Search" bind:value={searchString} />
	<button>Search</button>
</form>

<h1>hello {searchString}</h1>

<style lang="scss">
</style>
