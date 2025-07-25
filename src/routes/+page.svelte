<script lang="ts">
	import policeUrl from '$lib/assets/work/police.png?url';
	import grammyUrl from '$lib/assets/work/grammy.jpg?url';

	// @ts-ignore
	import deciders from '$lib/assets/work/deciders.png?enhanced&aspect=1440:710&fit=cover&position=attention';

	// @ts-ignore
	import police from '$lib/assets/work/police.png?enhanced&aspect=1440:710&fit=cover&position=top';

	// @ts-ignore
	import taxonomy from '$lib/assets/work/taxonomy.png?enhanced&aspect=1440:710&fit=cover&position=top';

	import Figure from './figure.svelte';
	import type { Picture } from 'vite-imagetools';
	import type { Work } from '$lib/types';

	const pictures: Record<string, { default: Picture }> = import.meta.glob('$lib/assets/work/*', {
		eager: true,
		query: {
			enhanced: true,
			w: '1000',
			aspect: '1440:710'
		}
	});

	const journalism: Array<Work> = [
		{
			link: 'https://wapo.st/4jYmNZn',
			name: "‘DEI’ vanishing from corporate filings, mirroring business world’s retreat",
			description: 'Analyzed and visualized a decade of S&P 500 filings.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/dei.png'],
				alt: 'A line chart showing hundreds of lines, each representing the number of mentions of diversity, equity and inclusion in annual filings from S&P 500 companies. Between 2015 and 2019, the number of mentions remained near 0. In 2020, the average number of mentions increased to 9. The average number of mentions continued to increase to 12.5 in 2022 and then began to decrease, first to 11.4 in 2023 and then 4 in 2024.'
			}
		},
		{
			link: 'https://wapo.st/4luwnox',
			name: 'Elon Musk gets government policy ideas from X. Here’s how.',
			description: 'Visualized Musk’s X universe with a orbiting graphic form.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/musk-universe.png'],
				alt: 'Several hundred circles orbiting around a central orange circle labeled Musk. The circles are colored differently. Four dotted rings around Musk are labeled with 1,000, 250, 50 and 10 interactions.'
			}
		},
		{
			link: 'https://wapo.st/3ZoJVcG',
			name: 'Who won the Harris-Trump debate? We asked swing-state voters.',
			description: 'Built a live-updating page showing voters’ reactions the debate.',
			media: {
				type: 'url',
				source: deciders,
				alt: 'A grid of 23 people underneath a "Harris" performed better label along with an grid of 2 people underneath a "Trump performed better" label'
			}
		},
		{
			link: 'https://wapo.st/3yEm9OR',
			name: 'Pro-Harris groups embrace identity to fundraise via Zoom',
			description: 'Reported and gathered data on “for Harris” Zoom calls.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/zoom.jpeg'],
				alt: 'Four Zoom cells with written labels.'
			}
		},
		{
			link: 'https://wapo.st/3Ughxpz',
			name: "Crypto cash is flooding the 2024 election. Here’s who's benefiting.",
			description: 'Made an interactive beeswarm for crypto political funding.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/cryptocandidates.png'],
				alt: 'Red and blue circles representing different political candidates positioned along an axis showing amount of ad spending from crypto firms.'
			}
		},
		// {
		// 	link: 'https://wapo.st/4ctWtCm',
		// 	name: "Who is, and isn't, speaking at the Republican National Convention",
		// 	description: 'Built a page categorizing convention speakers.',
		// 	media: {
		// 		type: 'image',
		// 		source: pictures['/src/lib/assets/work/rnc.jpeg'],
		// 		alt: 'Collage of Donald Trump, JD Vance, Amber Rose, Melania Trump and Kevin McCarthy in front of a red background with white stars surrounding them.'
		// 	}
		// },
		{
			link: 'https://www.texastribune.org/2022/08/10/texas-politics-project-abortion-polling/',
			name: 'Abortion should be permitted in cases of rape and incest, around 80% of Texas voters say in UT poll',
			description: 'Wrote a story on abortion public opinion.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/abortion-polling.webp'],
				alt: "Medical equipment inside a room at the Alamo Women's Reproductive Services Clinic in San Antonio, Texas."
			}
		},
		{
			link: 'https://www.michigandaily.com/news/news-briefs/massive-power-outage-in-ann-arbor-leaves-thousands-in-the-dark/',
			name: 'Massive power outage in Ann Arbor leaves thousands in the dark',
			description:
				'Built a <a href="https://github.com/MichiganDaily/dte-outage-tracker">power outage tracker</a> and live-updating visuals.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/power-outages.webp'],
				alt: 'A row of houses in Ann Arbor on a cloudy day.'
			}
		},
		{
			link: 'https://www.texastribune.org/2022/06/28/texas-drought-agriculture/',
			name: 'West Texas farmers and ranchers fear the worst as drought, heat near 2011 records',
			description: 'Created maps showing drought severity over time.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/droughts.png'],
				alt: 'A series of Texas maps showing droughts severity from 2011 to 2022'
			}
		},
		{
			link: 'https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/',
			name: 'Daily analysis finds historically large salary disparities between three U-M campuses',
			description: 'Analyzed data and made visuals for salary and budget records.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/campus.png'],
				alt: 'Small multiple graphic showing the disparity in revenue between the three University of Michigan campuses'
			}
		},
		{
			link: 'https://www.michigandaily.com/news/academics/we-looked-301-high-schools-most-applicants-u-m-heres-what-we-found/',
			name: 'We looked at the 301 high schools with the most applicants to U-M. Here’s what we found',
			description: 'Analyzed data and made visuals on university feeder schools.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/feeder-schools.png'],
				alt: 'Graphic showing the 301 in- and out-of- state feeder schools to the University of Michigan'
			}
		},
		{
			link: 'https://www.michigandaily.com/news/ann-arbor/city-of-ann-arbor-2021-special-election-results/',
			name: 'Ann Arbor 2021 Special Election Results',
			description: 'Built a tracker and page for live election results.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/election-results.png'],
				alt: 'Choropleth map of Ann Arbor showing results from a 2021 election.'
			}
		}
	];

	const engineering: Array<Work> = [
		{
			link: 'https://wapo.st/3WjjAKt',
			name: 'Tracking Trump’s Cabinet and administration nominations',
			description: 'Created a searchable and filterable database.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/appointee-tracker.jpeg'],
				alt: 'The Washington Post Trump Political Appointee Tracker in collaboration with Partnership for Public Service',
				eager: true
			}
		},
		{
			link: 'https://apps.apple.com/us/app/the-michigan-daily/id1615063980?platform=iphone',
			name: 'The Michigan Daily',
			description: 'Engineered a cross-platform mobile application.',
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
			description: 'Built infrastructure to publish and play crosswords.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/crosswords.png'],
				alt: 'A crossword puzzle.'
			}
		},
		{
			link: 'https://www.detroit-neighborhoods.com/',
			name: 'Detroit neighborhoods mapping tool',
			description: 'Built an application to crowdsource neighborhood boundaries.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/detroit-neighborhoods.png'],
				alt: 'Dashed outlined map of Detroit.'
			}
		},
		{
			link: 'https://mic.michigandaily.com/2023/the-fable-of-the-lion-the-butcher-and-three-kings/',
			name: 'The Fable of the Lion, the Butcher, and Three Kings',
			description: 'Developed a page for a poem about Jordan.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/fable.webp'],
				alt: 'Amman, Jordan on a summer day in 2023.'
			}
		},
		{
			link: 'https://specials.michigandaily.com/2023/writing-in-the-digital-dark-age/',
			name: 'Writing in the Digital Dark Age',
			description: 'Created a visual story about the Internet.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/digital-dark-age.png'],
				alt: 'A pixelated illustration of a lighthouse near a cliff. The light is beaming out to sea.'
			}
		},
		{
			link: 'https://www.michigandaily.com/statement/love-notes-2022/',
			name: 'Love Notes 2022 Edition',
			description: 'Designed and developed a page of student love notes.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/love.jpg'],
				alt: 'Two cassette tapes with floating neon blue hearts.'
			}
		}
	];

	const other: Array<Work> = [
		{
			link: 'https://erxclau.github.io/taxonomy-of-a-computer/',
			name: 'Taxonomy of a computer',
			description: 'Wrote a visual brief on my computer usage.',
			media: {
				type: 'url',
				source: taxonomy,
				alt: 'A treemap showing different portions of my computer storage.'
			}
		},
		{
			link: 'https://erxclau.github.io/september-of-bereal/',
			name: 'September of BeReal',
			description: 'Created a graphic showing my BeReal usage over a month.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/bereal.png'],
				alt: 'A colored grid of rectangles laid out as a calendar.'
			}
		},
		{
			link: policeUrl,
			name: 'Police Officer',
			media: {
				type: 'url',
				source: police,
				alt: 'A figure composed of several police officers with tactical uniforms and riot gear. The figure is outlined by a green rectangle labeled "Police Officer" and another labeled "Soldier."'
			}
		},
		{
			link: grammyUrl,
			name: 'GRAMMY',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/grammy.jpg'],
				alt: 'A grid of Grammy winners. White winners are labeled as "People like me," whereas winners of color are labeled with their names.'
			}
		},
		{
			link: 'https://github.com/erxclau/rare-botanist',
			name: 'Rare Botanist',
			description:
				'Created an automated Reddit bot to monitor house plant transactions between 14,000 members.',
			media: {
				type: 'image',
				source: pictures['/src/lib/assets/work/plants.jpg'],
				alt: 'An assortment of rare house plants.'
			}
		},
		{
			link: 'https://observablehq.com/@ericlau/law-enforcement-management-and-administrative-statistic',
			name: 'U.S. police agencies with external investigations into injurious use of force',
			description: 'An exploration of law enforcement data.',
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
		<hgroup>
			<enhanced:img
				fetchpriority="high"
				src="$lib/assets/eric.png?enhanced"
				alt="Eric Lau in a white T-shirt with a blue long-sleeve shirt on top. He is wearing gold rim glasses and is looking to the right."
				style:width="135px"
				style:height="135px"
				style:border-radius="5px"
			></enhanced:img>
			<h1 aria-label="Eric Lau">Eric Lau</h1>
			<!-- <p>刘浩麟</p> -->
		</hgroup>
		<p>
			I am a graphics reporter at <a href="https://www.washingtonpost.com/people/eric-lau/"
				>The Washington Post</a
			>.
		</p>
		<p>
			I previously led the engineering and data journalism teams at <a
				href="https://www.michigandaily.com/author/ericlau/">The Michigan Daily</a
			>. I also worked as a data journalist and software engineer at
			<a href="https://sfstandard.com">The San Francisco Standard</a>
			and <a href="https://www.texastribune.org/about/staff/eric-lau/">The Texas Tribune</a>.
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
		<p>View my <a href="/resume.pdf">resume</a>, my <a href="/lists">consumption</a>.</p>
	</section>
	<section class="breakout" id="journalism">
		<hgroup class="inline">
			<h2>Journalism</h2>
			<p>I tell visual stories with graphics and data.</p>
		</hgroup>
		<ul class="inline">
			{#each journalism as item}
				<li>
					<Figure {item} />
				</li>
			{/each}
		</ul>
	</section>
	<section class="breakout" id="engineering">
		<hgroup class="inline">
			<h2>Engineering</h2>
			<p>
				I build applications, often times with interactive, photographic and geographic elements. I
				care about making my work accessible to people with disabilities.
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
		padding: 0.25rem 0;
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

	hgroup p {
		font-family: var(--font-serif);
	}

	h2 {
		font-size: calc(1.75rem + 1vw);
	}

	ul {
		margin: 0;
		display: grid;
		gap: 0.25rem;
	}

	p,
	#talks li {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		line-height: 1.75rem;
		margin: 0;
		text-wrap: balance;
	}

	:global(a) {
		color: var(--color-primary);
		text-underline-offset: 3px;
		transition: color 125ms linear;
	}

	:global(a:hover, a:focus) {
		color: var(--color-primary-active);
	}
</style>
