<svelte:head>
	<title>Brian Perry | Data Analytics | Software Engineering | Automation | Web Developement</title>
</svelte:head>

<section>
	<div class="box">
		<h1>Hello, I'm Brian <span>&#x1F44B;</span></h1>
		<p class="skills-list">
			Problem Solver <span class="pipe">|</span> Data Analytics <span class="pipe">|</span> Data
			Visualizations <span class="pipe">|</span> Software Engineering
			<span class="pipe">|</span> Automation <span class="pipe">|</span> Web Developement
		</p>
		<p class="location">San Francisco CA.</p>
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 60% 40%;
		margin: 8em 8em;

		.box {
			padding: 1rem 2rem;
			border: 3px;
			border-radius: 20px;
			border-style: outset;
			border-color: $primary-color;
			box-shadow: 10px 12px 0.2px;

			h1 {
				font-family: $secondary-font;
			}
			p {
				grid-column: 1/1;
				font-family: $primary-font;
				font-weight: 400;
				font-size: 1.5rem;
				line-height: 2rem;
			}
			.location {
				font-size: 1.1rem;
				font-style: italic;
			}

			.pipe {
				color: purple;
				font-weight: bold;
			}
			background-color: $text-box-light;
		}
	}
</style>
