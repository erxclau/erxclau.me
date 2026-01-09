<script lang="ts">
	import policeUrl from '$lib/assets/work/police.png?url';
	import grammyUrl from '$lib/assets/work/grammy.jpg?url';

	const works: Array<{ category: string; description?: string; list: Array<Work> }> = [
		{
			category: 'Journalism',
			description: 'I tell visual stories with graphics and data.',
			list: [
				{
					link: 'https://wapo.st/4oDpAJH',
					name: 'Trump’s USAID pause stranded lifesaving drugs. Children died waiting.',
					description: 'Created interactive graphics showing delay in USAID shipments.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://wapo.st/44AyAb0',
					name: 'How Mamdani stunned in New York City’s mayoral primary, mapped',
					description: 'Mapped precinct-level results around the city.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://wapo.st/4jYmNZn',
					name: '‘DEI’ vanishing from corporate filings, mirroring business world’s retreat',
					description: 'Analyzed and visualized a decade of S&P 500 filings.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://wapo.st/4luwnox',
					name: 'Elon Musk gets government policy ideas from X. Here’s how.',
					description: 'Visualized Musk’s X universe with a orbiting graphic form.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://wapo.st/3ZoJVcG',
					name: 'Who won the Harris-Trump debate? We asked swing-state voters.',
					description: 'Built a live-updating page showing voters’ reactions the debate.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://wapo.st/3yEm9OR',
					name: 'Pro-Harris groups embrace identity to fundraise via Zoom',
					description: 'Reported and gathered data on “for Harris” Zoom calls.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://wapo.st/3Ughxpz',
					name: 'Crypto cash is flooding the 2024 election. Here’s who’s benefiting.',
					description: 'Made an interactive beeswarm for crypto political funding.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://www.texastribune.org/2022/08/10/texas-politics-project-abortion-polling/',
					name: 'Abortion should be permitted in cases of rape and incest, around 80% of Texas voters say in UT poll',
					description: 'Wrote a story on abortion public opinion.',
					affiliation: 'The Texas Tribune'
				},
				{
					link: 'https://www.michigandaily.com/news/news-briefs/massive-power-outage-in-ann-arbor-leaves-thousands-in-the-dark/',
					name: 'Massive power outage in Ann Arbor leaves thousands in the dark',
					description:
						'Built a <a href="https://github.com/MichiganDaily/dte-outage-tracker">power outage tracker</a> and live-updating visuals.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://www.texastribune.org/2022/06/28/texas-drought-agriculture/',
					name: 'West Texas farmers and ranchers fear the worst as drought, heat near 2011 records',
					description: 'Created maps showing drought severity over time.',
					affiliation: 'The Texas Tribune'
				},
				{
					link: 'https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/',
					name: 'Daily analysis finds historically large salary disparities between three U-M campuses',
					description: 'Analyzed data and made visuals for salary and budget records.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://www.michigandaily.com/news/academics/we-looked-301-high-schools-most-applicants-u-m-heres-what-we-found/',
					name: 'We looked at the 301 high schools with the most applicants to U-M. Here’s what we found',
					description: 'Analyzed data and made visuals on university feeder schools.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://www.michigandaily.com/news/ann-arbor/city-of-ann-arbor-2021-special-election-results/',
					name: 'Ann Arbor 2021 Special Election Results',
					description: 'Built a tracker and page for live election results.',
					affiliation: 'The Michigan Daily'
				}
			]
		},
		{
			category: 'Engineering',
			description:
				'I build applications, often times with interactive, photographic and geographic elements. I care about making my work accessible to people with disabilities.',
			list: [
				{
					link: 'https://wapo.st/3WjjAKt',
					name: 'Tracking Trump’s Cabinet and administration nominations',
					description: 'Created a searchable and filterable database.',
					affiliation: 'The Washington Post'
				},
				{
					link: 'https://apps.apple.com/us/app/the-michigan-daily/id1615063980?platform=iphone',
					name: 'The Michigan Daily',
					description: 'Engineered a cross-platform mobile application.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://games.michigandaily.com/crosswords',
					name: 'The Michigan Daily Crosswords',
					description: 'Built infrastructure to publish and play crosswords.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://www.detroit-neighborhoods.com/',
					name: 'Detroit neighborhoods mapping tool',
					description: 'Built an application to crowdsource neighborhood boundaries.',
					affiliation: 'DETROITography'
				},
				{
					link: 'https://mic.michigandaily.com/2023/the-fable-of-the-lion-the-butcher-and-three-kings/',
					name: 'The Fable of the Lion, the Butcher, and Three Kings',
					description: 'Developed a page for a poem about Jordan.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://specials.michigandaily.com/2023/writing-in-the-digital-dark-age/',
					name: 'Writing in the Digital Dark Age',
					description: 'Created a visual story about the Internet.',
					affiliation: 'The Michigan Daily'
				},
				{
					link: 'https://www.michigandaily.com/statement/love-notes-2022/',
					name: 'Love Notes 2022 Edition',
					description: 'Designed and developed a page of student love notes.',
					affiliation: 'The Michigan Daily'
				}
			]
		},
		{
			category: 'Other',
			description: 'A collection of personal and academic work.',
			list: [
				{
					link: 'https://erxclau.github.io/taxonomy-of-a-computer/',
					name: 'Taxonomy of a computer',
					description: 'Wrote a visual brief on my computer usage.',
					affiliation: 'The Rhetoric of Infographics with Cat Cassel at the University of Michigan'
				},
				{
					link: 'https://erxclau.github.io/september-of-bereal/',
					name: 'September of BeReal',
					description: 'Created a graphic showing my BeReal usage over a month.',
					affiliation: 'The Rhetoric of Infographics with Cat Cassel at the University of Michigan'
				},
				{
					link: policeUrl,
					name: 'Police Officer',
					affiliation:
						'Critical Data Visualization with Catherine Griffiths at the University of Michigan'
				},
				{
					link: grammyUrl,
					name: 'GRAMMY',
					affiliation: 'How Algorithms See with Catherine Griffiths at the University of Michigan'
				},
				{
					link: 'https://github.com/erxclau/rare-botanist',
					name: 'Rare Botanist',
					description:
						'Created an automated Reddit bot to monitor house plant transactions between 14,000 members.'
				},
				{
					link: 'https://observablehq.com/@ericlau/law-enforcement-management-and-administrative-statistic',
					name: 'U.S. police agencies with external investigations into injurious use of force',
					description: 'An exploration of law enforcement data.',
					affiliation: 'Data Visualization with Justin Joque at the University of Michigan'
				}
			]
		},
		{
			category: 'Talks',
			list: [
				{
					link: 'https://docs.google.com/presentation/d/1q2K8ycYSfrE41ai8gzp5Z0zWobl1n45wYu-liAFzM18/edit',
					name: 'Drawing Detroit: Crowdsourcing Detroit neighborhood boundaries',
					description: 'Detroit GIS Day 2023 — Lightning Talks'
				},
				{
					link: 'https://www.youtube.com/watch?v=9WkSCphC9-o&t=12797s',
					name: 'DTE Data Dive: A reflection on data from the February power outages',
					description:
						'Michigan Public Service Commission Resilience Tech Conference — Data and Mapping: Gaps and Solutions'
				}
			]
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
			<h1>Eric Lau</h1>
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
		<p>
			Reach me at <code style="font-size: 1rem">hello@[domain]</code>. Look at my
			<a href="/resume.pdf">resume</a>
			or
			<a href="/lists">consumption</a>.
		</p>
	</section>
	{#each works as { category, description, list }}
		<section id={category.toLowerCase()}>
			<hgroup>
				<h2>{category}</h2>
				{#if description}
					<p>{description}</p>
				{/if}
			</hgroup>
			<ul>
				{#each list as item}
					<li>
						<div class="content">
							<a href={item.link} target="_blank">{item.name}</a>
							<div class="description">{@html item.description}</div>
							{#if item.affiliation}
								<div class="affiliation">For {item.affiliation}</div>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</main>

<style>
	main {
		padding: 0.25rem 0.75rem;
		display: grid;
		gap: 1.25rem;
	}

	section {
		margin: auto;
		max-width: 70ch;
		width: 100%;
		display: grid;
		gap: 0.5rem;
	}

	hgroup {
		display: grid;
		gap: 0.5rem;
	}

	h1,
	h2 {
		font-family: var(--font-headline);
		font-weight: 400;
		margin: 0;
		color: var(--color-headline);
	}

	h1 {
		text-transform: uppercase;
		font-size: 5rem;
		line-height: 5rem;
		letter-spacing: 0.0625ch;
	}

	h2 {
		font-size: 2.5rem;
		line-height: 2.5rem;
	}

	p {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		color: var(--color-primary);
		line-height: 1.625rem;
		margin: 0;
		text-wrap: balance;
		text-wrap: pretty;
	}

	a {
		color: var(--color-highlight);
		text-underline-offset: 3px;
		text-decoration-thickness: 1.25px;
		transition: color 125ms linear;
		letter-spacing: 0.05ch;
		word-spacing: -0.125ch;
	}

	a:hover,
	a:focus {
		color: var(--color-primary-active);
	}

	ul {
		margin: 0;
		font-size: 1.25rem;
		display: grid;
		gap: 0.5rem;
		font-family: var(--font-serif);
	}

	ul a {
		font-family: var(--font-serif);
	}

	.content {
		display: grid;
		gap: 0.25rem;
		text-wrap: balance;
		text-wrap: pretty;
	}

	.description {
		font-family: var(--font-sans);
		font-size: 0.925rem;
		color: var(--color-primary);
	}

	.affiliation {
		font-family: var(--font-sans);
		font-size: 0.825rem;
		color: var(--color-neutral);
	}

	.description :global(a) {
		color: var(--color-primary);
		transition: color 125ms linear;
		text-underline-offset: 3px;
	}

	.description :global(a:focus),
	.description :global(a:hover) {
		color: var(--color-primary-active);
	}
</style>
