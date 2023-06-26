<script>
	import PageHeadline from '@lib/components/PageHeadline.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta
		name="description"
		content="Welcome to The Birdbrain! I'm a 17-year-old high school student from California. This
		website is part of a side project that I started to learn about birds."
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="author" content="Melinda Chang" />
</svelte:head>

<div class="sections">
	<PageHeadline headline="About" />
	<div class="section-split">
		<div class="section prose paragraph">
			<p>
				Welcome to The Birdbrain! I'm a 17-year-old high school student from California. This
				website is part of a side project that I started to learn about birds.
			</p>
			<p>
				It's been rather difficult for me to find a relevant online resource that presents
				information with coherence, so I made this. I plan to distill a multifaceted array of topics
				into short-form articles and infographics that are simultaneously accessible, entertaining,
				and instructive. I hope that this site helps you gain a greater appreciation for birds, as
				it has for me, or that you come away with something interesting to chew on.
			</p>
			<p>
				Other interests&mdash;I like computer science, particularly web programming and systems
				software. I write open-source JavaScript libraries, mostly. I also do amateur astronomy and
				watch an unreasonable amount of movies.
			</p>
		</div>
		<div class="section image">
			<img
				src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302485951/1800"
				alt="Chestnut-backed chickadee in a tree"
				title="Source: eBird"
			/>
			<p class="caption">The chestnut-backed chickadee, one of my favorite birds!</p>
		</div>
	</div>
	<div class="section-split">
		<div class="section empty" />
		<div class="section prose paragraph">
			<p>Here's a bit of additional info about this website and how I run it:</p>
			<ul>
				<li>
					It's written in SvelteKit and deployed on Vercel. You can check out the repository <a
						href="https://github.com/melindachang/thebirdbrain">here</a
					>.
				</li>
				<li>
					I much prefer markdown to HTML, so I use MDsveX to put out article content. Those files
					programmatically populate the article layout and the blog feed. There's a JSON file that
					creates the infographic gallery that I want to get rid of at some point.
				</li>
				<li>The song widget in the header displays what I'm currently listening to on Spotify.</li>
				<li>
					I tend to make the infographics in Photoshop (and GIMP, infrequently, depending on what I
					have on hand).
				</li>
			</ul>
		</div>
	</div>
</div>
