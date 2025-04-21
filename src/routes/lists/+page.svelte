<script lang="ts">
	import type { Category } from '$lib/types';

	const data: Array<Category> = [
		{
			category: 'Books',
			lists: [
				{
					date: 'Current',
					items: [
						'Unassimilable: An Asian Diasporic Manifesto for the 21st Century / Bianca Mabute-Louie'
					]
				},
				{
					date: 2025,
					items: [
						'The Year of Magical Thinking / Joan Didion',
						'Living in Data / Jer Thorp',
						'Killing Rage: Ending Racism / bell hooks',
						'All About Love: New Visions / bell hooks',
						'Time Is a Mother / Ocean Vuong',
						'The Message / Ta-Nehisi Coates'
					]
				},
				{
					date: 2024,
					items: ['Anthropocene Reviewed / John Green']
				},
				{
					date: undefined,
					items: [
						'The Stranger / Albert Camus',
						'Crying in H Mart / Michelle Zauner',
						"Data Feminism / Catherine D'Ignazio and Lauren Klein",
						'How Charts Lie: Getting Smarter about Visual Information / Alberto Cairo'
					]
				}
			]
		},
		{
			category: 'Film',
			lists: [
				{
					date: 2025,
					items: [
						'Frances Ha',
						'Arrival',
						'The Good Shepherd',
						'Patriots Day',
						'Marvelous and the Black Hole',
						'Always Be My Maybe',
						'The Half of It',
						'Marriage Story',
						'Unbroken',
						'Take Out',
						'Closing Dynasty',
						'To All the Boys: Always and Forever',
						'To All the Boys: P.S. I Still Love You',
						'The Fault in Our Stars',
						'Before We Go',
						'World War Z',
						'White House Down',
						'Sorry to Bother You',
						'Uncharted',
						'127 Hours',
						'Anora',
						'Transformers: Dark of the Moon',
						'Transformers: Revenge of the Fallen',
						'Transformers',
						'Pacific Rim',
						'Battleship',
						'The Help',
						'The Cider House Rules',
						'Life of Pi',
						'Almost Famous',
						'Eternal Sunshine of the Spotless Mind',
						'42',
						'The Breakfast Club',
						'Perfect Days'
					]
				},
				{
					date: 2024,
					items: [
						'Interstellar',
						'Midway',
						'The Hunger Games: Mockingjay — Part 2',
						'The Hunger Games: Mockingjay — Part 1',
						'The Hunger Games: Catching Fire',
						'The Hunger Games',
						'Legally Blonde',
						'Clueless',
						'Love in Taipei',
						'Bottoms',
						'The Lego Movie',
						'Power Rangers (2017)',
						'The Edge of Seventeen',
						'The Perks of Being a Wallflower',
						'A Family Affair',
						'Inside Out 2',
						'Dìdi',
						'Return to Seoul',
						'Past Lives',
						'The Boy and the Heron'
					]
				},
				{
					date: 2023,
					items: [
						'Midsommar',
						'Barbie',
						'Oppenheimer',
						'Spider-Man: Across the Spider-Verse',
						'Everything Everywhere All at Once',
						'The Grand Budapest Hotel',
						'Knives Out',
						'Guardians of the Galaxy Vol. 3',
						'Ant-Man and the Wasp: Quantumania'
					]
				},
				{
					date: undefined,
					items: [
						'Mean Girls',
						'World Trade Center',
						'Loving Vincent',
						'Glory',
						'Bao',
						'1917',
						"To All the Boys I've Loved Before",
						'Hidden Figures',
						'Inside Out',
						'Turning Red',
						'Soul',
						'Up',
						'WALL-E',
						'Ratatouille',
						'Cars',
						'The Incredibles',
						'Finding Nemo',
						'Monsters, Inc.',
						'Toy Story 2',
						"A Bug's Life",
						'Toy Story',
						'Spider-Man: Into the Spider-Verse',
						'The Amazing Spider-Man 2',
						'The Amazing Spider-Man',
						'Spider-Man 3',
						'Spider-Man 2',
						'Spider-Man',
						'Black Panther: Wakanda Forever',
						'Thor: Love and Thunder',
						'Doctor Strange in the Multiverse of Madness',
						'Spider-Man: No Way Home',
						'Eternals',
						'Shang-Chi and the Legend of the Ten Rings',
						'Black Widow',
						'Spider-Man: Far From Home',
						'Avengers: Endgame',
						'Captain Marvel',
						'Ant-Man and the Wasp',
						'Avengers: Infinity War',
						'Black Panther',
						'Thor: Ragnarok',
						'Spider-Man: Homecoming',
						'Guardians of the Galaxy Vol. 2',
						'Doctor Strange',
						'Captain America: Civil War',
						'Ant-Man',
						'Avengers: Age of Ultron',
						'Guardians of the Galaxy',
						'Captain America: The Winter Soldier',
						'Thor: The Dark World',
						'Iron Man 3',
						'The Avengers',
						'Captain America: The First Avenger',
						'Thor',
						'Iron Man 2',
						'The Incredible Hulk',
						'Iron Man',
						"Ender's Game",
						'All Quiet on the Western Front (2022)',
						'The Florida Project',
						'Dunkirk',
						'Lady Bird',
						'Eighth Grade',
						'The Truman Show',
						"Ferris Bueller's Day Off",
						'Crazy Rich Asians',
						'Taxi Driver',
						'The Godfather',
						'The Godfather Part II',
						'Goodfellas',
						"One Flew Over the Cuckoo's Nest",
						'Rocky IV',
						'Rocky III',
						'Rocky II',
						'Rocky',
						'Rambo III',
						'Rambo: First Blood Part II',
						'First Blood',
						'Downfall',
						'Fury',
						'Saving Private Ryan',
						'Inglorious Basterds',
						'Full Metal Jacket',
						'Letters from Iwo Jima',
						'Flags of Our Fathers',
						'Hacksaw Ridge',
						'Pearl Harbor',
						'Enemy at the Gates',
						'Patton',
						'Spirited Away',
						'Shawshank Redemption',
						'Good Will Hunting',
						'Forrest Gump',
						'Cast Away',
						'A Beautiful Mind',
						'School of Rock',
						'Lincoln'
					]
				}
			]
		},
		{
			category: 'Shows',
			lists: [
				{ date: 2025, items: ['Veep'] },
				{ date: 2024, items: ['Masters of the Air', 'Moral Orel'] },
				{ date: 2023, items: ['American Born Chinese'] },
				{
					date: undefined,
					items: [
						'Last Chance High',
						'Quiet on Set: The Dark Side of Kids TV',
						'Jet Lag: The Game',
						'School Babysitters',
						'Attack on Titan',
						'Atypical',
						'Silicon Valley',
						'Band of Brothers',
						'The Pacific'
					]
				}
			]
		},
		{
			category: 'Documentaries',
			lists: [
				{
					date: undefined,
					items: ['AlphaGo / DeepMind', 'The Fallen of World War II / Neil Halloran']
				}
			]
		},
		{
			category: 'Talks',
			lists: [
				{
					date: undefined,
					items: [
						'Rap Theory & Practice: an Introduction / Lupe Fiasco',
						'Web Without Walls / Dan Abramov',
						'Rethinking reactivity / Rich Harris',
						'Computer, build me an app / Rich Harris',
						'The beauty of data visualization / David McCandless',
						'What the heck is the event loop anyway? / Philip Roberts',
						'Design is a Search Problem / Mike Bostock'
					]
				}
			]
		},
		{
			category: 'Papers',
			lists: [
				{
					date: undefined,
					items: [
						'Humanities Approaches to Graphical Display / Johanna Drucker',
						'Anti-Semitism as Skill: Rudolf Virchow\'s "Schulstatistik" and the Racial Composition of Germany / Andrew Zimmerman',
						'Situated Knowledges: The Science Question in Feminism and the Privilege of Partial Perspective / Donna Haraway'
					]
				}
			]
		},
		{
			category: 'Journalism',
			lists: [
				{
					date: undefined,
					items: [
						'The Firefighter With O.C.D. and the Vaccine He Believed Would Kill Him / The New York Times',
						'The Anti-Social Century / The Atlantic',
						'The Agony of Texting With Men / The Atlantic',
						'The Militia and the Mole / ProPublica',
						'The Good Whale / The New York Times',
						'The Deserter / The New York Times',
						'Searching for Maura / The Washington Post',
						'More than 1,800 congressmen once enslaved Black people. This is who they were, and how they shaped the nation. / The Washington Post',
						'Machine Bias / ProPublica',
						"How does 'Hamilton,' the non stop, hip-hop Broadway sensation tap rap's master rhymes to blur musical lines? / The Wall Street Journal"
					]
				}
			]
		},
		{
			category: 'Essays',
			lists: [
				{
					date: undefined,
					items: [
						'The Worst Magazine In America / Nathan J. Robinson',
						'AI: The New Aesthetics of Fascism / Gareth Watkins',
						"Surely You're a Creep, Mr. Feynman / Leila McNeill",
						'The "Blob" Is Furious About Gaza. But That\'s Not Enough. / Josef Burton'
					]
				}
			]
		}
	];
</script>

<main>
	<hgroup>
		<h1><a href="/">Eric Lau</a></h1>
		<p>My consumption, incomplete.</p>
	</hgroup>
	{#each data as { category, lists }}
		<section id={category.toLowerCase()}>
			<hgroup>
				<h2>{category}</h2>
				<b>{lists.flatMap((d) => d.items).length}</b>
			</hgroup>
			{#each lists.filter((list) => list.items.length > 0) as { date, items }, i}
				<section>
					{#if date === undefined}
						{#if i > 0}
							<hgroup>
								<h3>Before</h3>
								<small>{items.length}</small>
							</hgroup>
						{/if}
					{:else}
						<hgroup>
							<h3>{date}</h3>
							<small>{items.length}</small>
						</hgroup>
					{/if}
					<ul>
						{#each items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</section>
			{/each}
		</section>
	{/each}
</main>

<style>
	main {
		font-family: var(--font-serif);
		display: grid;
		gap: 0.75rem;

		max-width: 75ch;
		width: 100%;
		margin: auto;

		padding: 0.25rem 0.75rem;
		box-sizing: border-box;
	}

	main > section {
		display: grid;
		gap: 0.375rem;
	}

	main section section {
		display: grid;
		gap: 0.25rem;
	}

	main section hgroup {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: var(--font-sans);
	}

	h1,
	h2,
	h3 {
		margin: 0;
		font-family: var(--font-sans);
		text-transform: uppercase;
	}

	ul,
	p {
		margin: 0;
		text-wrap: balance;
		font-family: var(--font-serif);
		font-size: 1.125rem;
		line-height: 1.625rem;
	}

	ul {
		list-style-type: disc;
		padding-left: 1.25rem;
	}

	small {
		font-size: 0.925rem;
	}

	a {
		color: var(--color-text);
		text-decoration: none;
	}
</style>
