<script lang="ts">
	import video from '$lib/assets/work/class-of-2025.mp4?url';
	import policeUrl from '$lib/assets/work/police.png?url';
	import grammyUrl from '$lib/assets/work/grammy.jpg?url';

	import police from '$lib/assets/work/police.png?enhanced&aspect=1440:710&fit=cover&position=top';
	import taxonomy from '$lib/assets/work/taxonomy.png?enhanced&aspect=1440:710&fit=cover&position=top';

	import Figure from './figure.svelte';
	import type { Image, Work } from '$lib/types';

	const pictures: Record<string, Image> = import.meta.glob('$lib/assets/work/*', {
		eager: true,
		query: {
			enhanced: true,
			w: '1000',
			aspect: '1440:710'
		}
	});

	const engineering: Array<Work> = [
		{
			link: 'https://apps.apple.com/us/app/the-michigan-daily/id1615063980?platform=iphone',
			name: 'The Michigan Daily',
			description:
				'Engineered a cross-platform mobile application for The Michigan Daily. Built with React Native and Expo.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/daily.webp'],
				alt: '"The Michigan Daily" written in white on a blue background',
				eager: true
			}
		},
		{
			link: 'https://games.michigandaily.com/crosswords',
			name: 'The Michigan Daily Crosswords',
			description:
				'Created infrastructure to publish and play crosswords. Built with SvelteKit and SQLite.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/crosswords.png'],
				alt: 'A crossword puzzle.',
				eager: true
			}
		},
		{
			link: 'https://mic.michigandaily.com/2023/the-fable-of-the-lion-the-butcher-and-three-kings/',
			name: 'The Fable of the Lion, the Butcher, and Three Kings',
			description: 'Designed and developed poem layout. Built with Svelte, Scrollama and Mapbox.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/fable.webp'],
				alt: 'Amman, Jordan on a summer day in 2023.'
			}
		},
		{
			link: 'https://specials.michigandaily.com/2023/writing-in-the-digital-dark-age/',
			name: 'Writing in the Digital Dark Age',
			description:
				'Designed and developed story layout. Collaborated and prototyped visual elements with the writer.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/digital-dark-age.png'],
				alt: 'A pixelated illustration of a lighthouse near a cliff. The light is beaming out to sea.'
			}
		},
		{
			link: 'https://www.michigandaily.com/statement/love-notes-2022/',
			name: 'Love Notes 2022 Edition',
			description:
				'Designed and developed a website displaying student love notes as cassette tapes. Built using Svelte.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/love.jpg'],
				alt: 'Two cassette tapes with floating neon blue hearts.'
			}
		},
		{
			link: 'https://mic.michigandaily.com/mic-style/',
			name: 'MiC Style',
			description:
				'Developed a Michigan in Color website to showcase fashion and clothing from people of color. Built with Next.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/mic-style.png'],
				alt: 'A woman wearing a strawberry sweater in a corn field.'
			}
		},
		{
			link: 'https://mic.michigandaily.com/black-hair-series/',
			name: 'Black Hair Series',
			description:
				'Developed a Michigan in Color website featuring photography, video and interviews on Black hair. Built with Svelte.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/black-hair-series.png'],
				alt: 'An assortment of barber shop supplies including hair trimmers, combs and hair spray.'
			}
		},
		{
			link: 'https://specials.michigandaily.com/2022/photographers-favorite/',
			name: "2022 Photographers' Favorites",
			description:
				"Designed and developed a multimedia article showcasing Daily photographers' favorite photos from 2022. Built with Scrollama.",
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/photographers-favorites.png'],
				alt: 'Students standing in front of trees with autumn leaves.'
			}
		},
		{
			link: 'https://www.detroit-neighborhoods.com/',
			name: 'Detroit neighborhoods mapping tool',
			description:
				'Designed and developed an application to crowdsource Detroit neighborhood boundaries. Built with SvelteKit, OpenLayers and PostGIS.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/detroit-neighborhoods.png'],
				alt: 'Dashed outlined map of Detroit.'
			}
		}
	];

	const journalism: Array<Work> = [
		{
			link: 'https://www.texastribune.org/2022/08/10/texas-politics-project-abortion-polling/',
			name: 'Abortion should be permitted in cases of rape and incest, around 80% of Texas voters say in UT poll',
			description:
				'Wrote a story on abortion public opinion. Interviewed several pollsters. Gathered historical polling data and built visualizations with Datawrapper.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/abortion-polling.webp'],
				alt: "Medical equipment inside a room at the Alamo Women's Reproductive Services Clinic in San Antonio, Texas."
			}
		},
		{
			link: 'https://www.texastribune.org/2022/07/19/abbott-beto-fundraising-governor-2022/',
			name: "Here's how much Greg Abbott and Beto O'Rourke have raised in the race for Texas governor",
			description:
				'Created several data visualizations with Datawrapper to showcase gubernatorial fundraising.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/fundraising.webp'],
				alt: "Greg Abbott and Beto O'Rourke"
			}
		},
		{
			link: 'https://www.michigandaily.com/news/news-briefs/massive-power-outage-in-ann-arbor-leaves-thousands-in-the-dark/',
			name: 'Massive power outage in Ann Arbor leaves thousands in the dark',
			description:
				'Built a <a href="https://github.com/MichiganDaily/dte-outage-tracker"> tracker</a> based on internal DTE APIs to retrieve power outage data. Created live-updating visualizations with D3 and Datawrapper.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/power-outages.webp'],
				alt: 'A row of houses in Ann Arbor on a cloudy day.'
			}
		},
		{
			link: 'https://www.texastribune.org/2022/08/02/texas-juvenile-prisons-crisis/',
			name: 'Almost 600 Texas youths are trapped in a juvenile prison system on the brink of collapse',
			description:
				'Collaborated with Jolie McCullough to analyze and visualize data on the Texas juvenile prison system. Used Datawrapper and Observable.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/prison.webp'],
				alt: 'The entrance to Giddings State School, a Texas Juvenile Justice Department prison in Lee County.'
			}
		},
		{
			link: 'https://www.michigandaily.com/campus-life/umich-class-of-2025-by-the-numbers-and-their-hopes-for-college/',
			name: 'UMich Class of 2025: By the numbers and their hopes for college',
			description:
				'Created data visuals conveying results from The Michigan Daily Class of 2025 survey. Built with D3 and Scrollama.',
			media: {
				type: 'video',
				source: video
			}
		},
		{
			link: 'https://www.texastribune.org/2022/06/28/texas-drought-agriculture/',
			name: 'West Texas farmers and ranchers fear the worst as drought, heat near 2011 records',
			description:
				'Created small multiple maps of Texas showing drought severity over time. Built with Illustrator.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/droughts.png'],
				alt: 'A series of Texas maps showing droughts severity from 2011 to 2022'
			}
		},
		{
			link: 'https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/',
			name: 'Daily analysis finds historically large salary disparities between three U-M campuses',
			description:
				'Created data visuals and analyzed University salary and budget records. Used Python and D3. Collaborated with editors and reporters to write stories.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/campus.png'],
				alt: 'Small multiple graphic showing the disparity in revenue between the three University of Michigan campuses'
			}
		},
		{
			link: 'https://www.michigandaily.com/news/more-than-100-ann-arbor-restaurants-closed-in-the-past-three-years-how-have-these-closures-affected-the-community/',
			name: 'More than 100 Ann Arbor restaurants closed in the past three years',
			description:
				'Created a map showing the status of Ann Arbor restaurants. Proxied restaurant status via inspection data. Built with QGIS and Adobe Illustrator.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/map.png'],
				alt: 'Map showing whether Ann Arbor restaurants are closed or open'
			}
		},
		{
			link: 'https://www.michigandaily.com/news/academics/we-looked-301-high-schools-most-applicants-u-m-heres-what-we-found/',
			name: "We looked at the 301 high schools with the most applicants to U-M. Here's what we found",
			description:
				'Created data visuals and analyzed FOIA request data on university feeder high schools. Used Python and D3.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/feeder-schools.png'],
				alt: 'Graphic showing the 301 in- and out-of- state feeder schools to the University of Michigan'
			}
		},
		{
			link: 'https://www.texastribune.org/2022/07/28/texas-covid-vaccines-babies-toddlers/',
			name: 'Familiar racial disparities emerge in first month of COVID-19 vaccinations for the youngest Texans',
			description:
				'Created a data graphic in Illustrator on vaccination rates among Texas children. Contributed to data-heavy writing.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/vaccinations.png'],
				alt: 'Graphic showing the proportions of youth ethnic group populations in Texas and their vaccination rates. Asian and white children receive a higher share of vaccinations.'
			}
		},
		{
			link: 'https://www.michigandaily.com/news/ann-arbor/city-of-ann-arbor-2021-special-election-results/',
			name: 'City of Ann Arbor 2021 Special Election Results',
			description:
				'Created a tracker in Python to retrieve live election results. Built a page to show results in Svelte.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/election-results.png'],
				alt: 'Choropleth map of Ann Arbor showing results from a 2021 election.'
			}
		}
	];

	const other: Array<Work> = [
		{
			link: 'https://erxclau.github.io/taxonomy-of-a-computer/',
			name: 'Taxonomy of a computer',
			description: 'Wrote a visual brief on my computer usage. Made with D3 and Scrollama.',
			media: {
				type: 'url',
				source: taxonomy,
				alt: 'A treemap showing different portions of my computer storage.'
			}
		},
		{
			link: 'https://erxclau.github.io/september-of-bereal/',
			name: 'September of BeReal',
			description: 'Created a graphic showing my BeReal usage over a month. Made with D3.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/bereal.png'],
				alt: 'A colored grid of rectangles laid out as a calendar.'
			}
		},
		{
			link: policeUrl,
			name: 'Police Officer (Soldier)',
			description: 'Made with Photoshop.',
			media: {
				type: 'url',
				source: police,
				alt: 'A figure composed of several police officers with tactical uniforms and riot gear. The figure is outlined by a green rectangle labeled "Police Officer" and another labeled "Soldier."'
			}
		},
		{
			link: grammyUrl,
			name: 'GRAMMY (People like me)',
			description: 'Made with Processing.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/grammy.jpg'],
				alt: 'A grid of Grammy winners. White winners are labeled as "People like me," whereas winners of color are labeled with their names.'
			}
		},
		{
			link: 'https://erxclau.github.io/ninety-eight-days-on-the-internet/',
			name: '98 Days on the Internet',
			description: 'Wrote a visual story about my Internet history. Used Scrollama and D3.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/history.png'],
				alt: 'A bubble chart with circles of various sizes and colors signifying number of visits to different websites.'
			}
		},
		{
			link: 'https://github.com/erxclau/rare-botanist',
			name: 'Rare Botanist',
			description:
				'Created an automated Reddit bot to monitor house plant transactions between 14,000 members. Made with Python.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/plants.jpg'],
				alt: 'An assortment of rare house plants.'
			}
		},
		{
			link: 'https://observablehq.com/@ericlau/law-enforcement-management-and-administrative-statistic',
			name: 'U.S. police agencies with external investigations into injurious use of force',
			description:
				'An exploration of Law Enforcement Management and Administrative Statistics (2016) in Observable.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/lemas.jpg'],
				alt: 'A bubble map of the United States showing populations covered by external investigations into police use of force.'
			}
		}
	];
</script>

<main>
	<section>
		<div>
			<enhanced:img
				fetchpriority="high"
				src="$lib/assets/eric.png?enhanced"
				alt="Eric Lau wearing a white T-shirt with a blue long-sleeve shirt on top. He is wearing gold rim glasses and is looking to the right."
				style:width="135px"
				style:height="135px"
				style:border-radius="5px"
			></enhanced:img>
			<h1 aria-label="Eric Lau">Eric Lau</h1>
		</div>
		<p>
			I am the summer 2024 <a href="https://washingtonpost.com">Washington Post</a> graphics intern.
		</p>
		<p>
			I previously led the engineering and data journalism teams at <a
				href="https://michigandaily.com">The Michigan Daily</a
			>. I also worked as a data journalist and software engineer at
			<a href="https://sfstandard.com">The San Francisco Standard</a>
			and <a href="https://texastribune.org">The Texas Tribune</a>.
		</p>
		<p>
			I studied computer science and digital studies at the <a href="https://umich.edu"
				>University of Michigan</a
			> in Ann Arbor.
		</p>
	</section>
	<section id="links">
		<hgroup>
			<h2>Links</h2>
		</hgroup>
		<p>
			Reach me on <a href="https://twitter.com/erxclau">Twitter</a> or via
			<code>hello@[domain]</code>.
		</p>
		<p>View my <a href="/resume.pdf">resume</a> for a summary of my experiences.</p>
	</section>
	<section class="breakout" id="engineering">
		<hgroup class="inline">
			<h2>Engineering</h2>
			<p>
				I enjoy building websites with unique interactive components and strong visual design. Often
				times, I work with photographic or geographic elements. I care a lot about making sure my
				work is accessible to people with disabilities.
			</p>
		</hgroup>
		<ul class="inline">
			{#each engineering as item}
				<li>
					<Figure {item} />
				</li>
			{/each}
		</ul>
	</section>
	<section class="breakout" id="journalism">
		<hgroup class="inline">
			<h2>Journalism</h2>
			<p>
				I work with journalists to tell important stories with graphics and visualizations. I am
				particularly experienced with building data trackers and bespoke interactives. I have
				interest in exploring illustrative and 3D forms.
			</p>
		</hgroup>
		<ul class="inline">
			{#each journalism as item}
				<li>
					<Figure {item} />
				</li>
			{/each}
		</ul>
	</section>
	<section class="breakout" id="other">
		<hgroup class="inline">
			<h2>Other</h2>
			<p>Here is a collection of personal and academic work I've produced.</p>
		</hgroup>
		<ul class="inline">
			{#each other as item}
				<li>
					<Figure {item} />
				</li>
			{/each}
		</ul>
	</section>
	<section id="talks">
		<h2>Talks</h2>
		<ul>
			<li>
				<a
					href="https://docs.google.com/presentation/d/1q2K8ycYSfrE41ai8gzp5Z0zWobl1n45wYu-liAFzM18/edit"
					>Drawing Detroit: Crowdsourcing Detroit neighborhood boundaries</a
				> (Detroit GIS Day 2023 — Lightning Talks)
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=9WkSCphC9-o&t=12797s"
					>DTE Data Dive: A reflection on data from the February power outages</a
				> (Michigan Public Service Commission Resilience Tech Conference — Data and Mapping: Gaps and
				Solutions)
			</li>
		</ul>
	</section>
</main>

<style>
	section,
	.inline {
		display: grid;
		gap: 0.5rem;

		max-width: 75ch;
		width: 100%;
		margin: auto;

		padding: 0.25rem 0.75rem;
		box-sizing: border-box;
	}

	.breakout {
		padding: 0;
		max-width: unset;
	}

	.breakout ul {
		max-width: 120ch;
		list-style: none;

		margin-block-start: 0;
		margin-block-end: 0;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
		gap: 1.5rem 1.25rem;
	}

	main {
		display: grid;
		gap: 1.25rem;
	}

	h1,
	h2 {
		text-transform: uppercase;
		font-family: var(--font-sans);
		margin: 0;
	}

	h1 {
		font-size: calc(3rem + 1vw);
	}

	h2 {
		font-size: calc(1.75rem + 1vw);
	}

	ul {
		margin: 0;
	}

	p,
	#talks li {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		line-height: 1.925rem;
		margin: 0;
		text-wrap: balance;
	}

	:global(a) {
		color: var(--color-text);
		text-underline-offset: 3px;
	}
</style>
