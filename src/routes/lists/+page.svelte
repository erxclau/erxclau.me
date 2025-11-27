<script lang="ts">
	const data: Array<Category> = [
		{
			category: 'Theater',
			lists: [
				{
					date: 2025,
					items: [
						{
							name: 'Death Becomes Her',
							thoughts:
								'A funny, self-aware musical about living forever. Colorful, abundant, physically impressive.'
						}
					]
				}
			]
		},
		{
			category: 'Books',
			lists: [
				{
					date: 'Current',
					items: [
						{
							name: 'Orientalism',
							authors: ['Edward Said'],
							location: 'Mil Mundos',
							thoughts:
								'This has been a tough read for me. The writing is quite dense and, at least for me, difficult to understand at times. Regardless, I can appreciate the critical lenses into how Orientalist ideas built on each other to give us modern Western understanding of the Middle East and Islam. I find it disturbing how malleable we’ve been to centuries-old narratives that had no real authority. I found the passages relating to Marx’s defense of Indian colonization to be a prime example of how pervasive and mainstream Orientalist thought had become in the West.'
						},
						{
							name: 'Data Feminism',
							authors: ['Catherine D’Ignazio', 'Lauren Klein'],
							location: 'Literati Bookstore',
							thoughts:
								'I’ve read several chapters for different university courses, but have yet to read it in full. The chapters I have read give important guidances on how to work with data in ways that surface humanity and challenge power.'
						},
						{
							name: 'How Charts Lie: Getting Smarter about Visual Information',
							authors: ['Alberto Cairo']
						}
					]
				},
				{
					date: 2025,
					items: [
						{
							name: 'LatinX',
							authors: ['Claudia Milian'],
							location: 'Mil Mundos',
							thoughts:
								'Milian expands upon the common linguistic and gender discourse on LatinX. She talks of “the X” as it relates to unknowability, transition and fluidity beyond gender into themes around climate and politics.'
						},
						{
							name: 'Abundance',
							authors: ['Ezra Klein', 'Derek Thompson'],
							thoughts:
								'Klein and Thompson provide important reminders that supposedly progressive government bureaucracy can be burdensome despite good intentions. Certainly, the focus on housing affordability is timely.'
						},
						{
							name: 'Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection',
							authors: ['John Green'],
							location: 'Barnes & Noble',
							highlight: true
						},
						{
							name: 'Unassimilable: An Asian Diasporic Manifesto for the 21st Century',
							authors: ['Bianca Mabute-Louie'],
							location: 'Bridge Street Books',
							highlight: true,
							thoughts:
								'The “Asian Diaspora” framing is compelling, but I do not completely resonate with it as someone who does not have particular attachments to the motherland with respect to language, travel or culture. I do value the narrative on how Mabute-Louie grew up in a religious community and “ethnoburb,” two settings I could not count as my own.'
						},
						{
							name: 'The Year of Magical Thinking',
							authors: ['Joan Didion'],
							location: 'Strand Bookstore',
							highlight: true,
							thoughts: 'I enjoyed the fluidity of Didion’s writing.'
						},
						{ name: 'Living in Data', authors: ['Jer Thorp'], highlight: true },
						{ name: 'Killing Rage: Ending Racism', authors: ['bell hooks'], highlight: true },
						{
							name: 'All About Love: New Visions',
							authors: ['bell hooks'],
							highlight: true,
							thoughts:
								'hooks offers a useful definition of love in romantic, familial, parental and societal contexts.'
						},
						{ name: 'Time Is a Mother', authors: ['Ocean Vuong'] },
						{ name: 'The Message', authors: ['Ta-Nehisi Coates'], highlight: true }
					]
				},
				{
					date: 2024,
					items: [{ name: 'Anthropocene Reviewed', authors: ['John Green'], highlight: true }]
				},
				{
					date: undefined,
					items: [
						{ name: 'The Stranger', authors: ['Albert Camus'] },
						{ name: 'Crying in H Mart', authors: ['Michelle Zauner'], highlight: true }
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
						{ name: 'Wicked: For Good' },
						{ name: 'Wicked', highlight: true },
						{ name: 'Kiki’s Delivery Service', highlight: true },
						{ name: 'Independence Day' },
						{ name: 'The Day After Tomorrow' },
						{ name: 'When Harry Met Sally', highlight: true },
						{ name: 'Tron: Legacy' },
						{ name: 'Tron' },
						{ name: 'The Untouchables' },
						{ name: 'The Rules of Attraction' },
						{ name: 'American Psycho', highlight: true },
						{ name: 'War of the Worlds' },
						{ name: 'The Boy in the Striped Pyjamas', highlight: true },
						{ name: 'Braveheart' },
						{ name: 'Pulp Fiction' },
						{ name: 'The Italian Job', year: 2003 },
						{ name: 'Tropic Thunder' },
						{ name: 'Flight' },
						{ name: 'Reservoir Dogs', highlight: true },
						{ name: 'The Last Samurai' },
						{ name: 'Jack Reacher' },
						{ name: 'Top Gun: Maverick' },
						{ name: 'Top Gun' },
						{ name: 'Transformers: Rise of the Beasts' },
						{ name: 'Bumblebee' },
						{ name: 'Transformers: The Last Knight' },
						{ name: 'Transformers: Age of Extinction' },
						{ name: 'Mission: Impossible — Dead Reckoning' },
						{ name: 'Mission: Impossible — Fallout' },
						{ name: 'Mission: Impossible — Rogue Nation' },
						{ name: 'Mission: Impossible — Ghost Protocol' },
						{ name: 'Mission: Impossible III' },
						{ name: 'Mission: Impossible II' },
						{ name: 'Mission: Impossible' },
						{ name: 'No Hard Feelings' },
						{ name: 'The Secret Life of Walter Mitty', year: 2013 },
						{ name: 'Cloudy with a Chance of Meatballs 2' },
						{ name: 'Cloudy with a Chance of Meatballs' },
						{ name: 'Conclave', highlight: true },
						{ name: 'Sinners' },
						{ name: 'Frances Ha' },
						{ name: 'Arrival' },
						{ name: 'The Good Shepherd' },
						{ name: 'Patriots Day' },
						{ name: 'Marvelous and the Black Hole' },
						{ name: 'Always Be My Maybe' },
						{ name: 'The Half of It' },
						{ name: 'Marriage Story', highlight: true },
						{ name: 'Unbroken' },
						{ name: 'Take Out', highlight: true },
						{ name: 'Closing Dynasty' },
						{ name: 'To All the Boys: Always and Forever' },
						{ name: 'To All the Boys: P.S. I Still Love You' },
						{ name: 'The Fault in Our Stars' },
						{ name: 'Before We Go' },
						{ name: 'World War Z' },
						{ name: 'White House Down' },
						{ name: 'Sorry to Bother You', highlight: true },
						{ name: 'Uncharted' },
						{ name: '127 Hours', highlight: true },
						{ name: 'Anora', highlight: true },
						{ name: 'Transformers: Dark of the Moon' },
						{ name: 'Transformers: Revenge of the Fallen' },
						{ name: 'Transformers' },
						{ name: 'Pacific Rim' },
						{ name: 'Battleship' },
						{ name: 'The Help' },
						{ name: 'The Cider House Rules' },
						{ name: 'Life of Pi' },
						{ name: 'Almost Famous' },
						{ name: 'Eternal Sunshine of the Spotless Mind', highlight: true },
						{ name: '42', highlight: true },
						{ name: 'The Breakfast Club' },
						{ name: 'Perfect Days', highlight: true, thoughts: 'A lovely soundtrack.' }
					]
				},
				{
					date: 2024,
					items: [
						{ name: 'Interstellar', highlight: true },
						{ name: 'Midway' },
						{ name: 'The Hunger Games: Mockingjay — Part 2' },
						{ name: 'The Hunger Games: Mockingjay — Part 1' },
						{ name: 'The Hunger Games: Catching Fire' },
						{ name: 'The Hunger Games', highlight: true },
						{ name: '2012' },
						{ name: 'Legally Blonde' },
						{ name: 'Clueless' },
						{ name: 'Love in Taipei' },
						{ name: 'Bottoms', highlight: true },
						{ name: 'The Lego Movie', highlight: true },
						{ name: 'Power Rangers', year: 2017 },
						{ name: 'The Edge of Seventeen' },
						{ name: 'The Girl Next Door' },
						{ name: 'The Perks of Being a Wallflower', highlight: true },
						{ name: 'A Family Affair' },
						{ name: 'Inside Out 2' },
						{ name: 'Dìdi', highlight: true },
						{ name: 'Return to Seoul' },
						{ name: 'Past Lives', highlight: true },
						{ name: 'The Boy and the Heron', highlight: true }
					]
				},
				{
					date: 2023,
					items: [
						{ name: 'Midsommar', highlight: true },
						{ name: 'Barbie', highlight: true },
						{ name: 'Oppenheimer', highlight: true },
						{ name: 'Spider-Man: Across the Spider-Verse', highlight: true },
						{ name: 'Everything Everywhere All at Once', highlight: true },
						{ name: 'The Grand Budapest Hotel', highlight: true },
						{ name: 'Knives Out' },
						{ name: 'Guardians of the Galaxy Vol. 3' },
						{ name: 'Ant-Man and the Wasp: Quantumania' }
					]
				},
				{
					date: undefined,
					items: [
						{ name: 'In The Heights' },
						{ name: 'Whiplash', highlight: true },
						{ name: 'Mean Girls', highlight: true },
						{ name: 'World Trade Center' },
						{ name: 'Loving Vincent', highlight: true },
						{ name: 'Glory' },
						{ name: 'Bao' },
						{ name: '1917' },
						{ name: 'To All the Boys I’ve Loved Before' },
						{ name: 'Hidden Figures' },
						{ name: 'Inside Out' },
						{ name: 'Turning Red' },
						{ name: 'Soul' },
						{ name: 'Up' },
						{ name: 'WALL-E' },
						{ name: 'Ratatouille' },
						{ name: 'Cars' },
						{ name: 'The Incredibles' },
						{ name: 'Finding Nemo' },
						{ name: 'Monsters, Inc.' },
						{ name: 'Toy Story 2' },
						{ name: 'A Bug’s Life' },
						{ name: 'Toy Story' },
						{ name: 'Spider-Man: Into the Spider-Verse', highlight: true },
						{ name: 'The Amazing Spider-Man 2' },
						{ name: 'The Amazing Spider-Man' },
						{ name: 'Spider-Man 3' },
						{ name: 'Spider-Man 2' },
						{ name: 'Spider-Man' },
						{ name: 'Black Panther: Wakanda Forever' },
						{ name: 'Thor: Love and Thunder' },
						{ name: 'Doctor Strange in the Multiverse of Madness' },
						{ name: 'Spider-Man: No Way Home' },
						{ name: 'Eternals' },
						{ name: 'Shang-Chi and the Legend of the Ten Rings' },
						{ name: 'Black Widow' },
						{ name: 'Spider-Man: Far From Home' },
						{ name: 'Avengers: Endgame' },
						{ name: 'Captain Marvel' },
						{ name: 'Ant-Man and the Wasp' },
						{ name: 'Avengers: Infinity War' },
						{ name: 'Black Panther' },
						{ name: 'Thor: Ragnarok' },
						{ name: 'Spider-Man: Homecoming' },
						{ name: 'Guardians of the Galaxy Vol. 2' },
						{ name: 'Doctor Strange' },
						{ name: 'Captain America: Civil War' },
						{ name: 'Ant-Man' },
						{ name: 'Avengers: Age of Ultron' },
						{ name: 'Guardians of the Galaxy' },
						{ name: 'Captain America: The Winter Soldier' },
						{ name: 'Thor: The Dark World' },
						{ name: 'Iron Man 3' },
						{ name: 'The Avengers' },
						{ name: 'Captain America: The First Avenger' },
						{ name: 'Thor' },
						{ name: 'Iron Man 2' },
						{ name: 'The Incredible Hulk' },
						{ name: 'Iron Man' },
						{ name: 'Jaws' },
						{ name: 'Lawrence of Arabia' },
						{ name: 'Breakfast at Tiffany’s' },
						{ name: 'Ender’s Game' },
						{ name: 'All Quiet on the Western Front', year: 2022 },
						{ name: 'The Florida Project', highlight: true },
						{ name: 'Dunkirk' },
						{ name: 'Lady Bird' },
						{ name: 'Eighth Grade', highlight: true },
						{ name: 'The Truman Show', highlight: true },
						{ name: 'Ferris Bueller’s Day Off' },
						{ name: 'Crazy Rich Asians', highlight: true },
						{ name: 'Taxi Driver', highlight: true },
						{ name: 'The Godfather Part III' },
						{ name: 'The Godfather Part II' },
						{ name: 'The Godfather', highlight: true },
						{ name: 'Goodfellas', highlight: true },
						{ name: 'Straight Outta Compton' },
						{ name: 'One Flew Over the Cuckoo’s Nest' },
						{ name: 'Rocky IV' },
						{ name: 'Rocky III' },
						{ name: 'Rocky II' },
						{ name: 'Rocky' },
						{ name: 'Rambo III' },
						{ name: 'Rambo: First Blood Part II' },
						{ name: 'First Blood', highlight: true },
						{ name: 'Downfall', highlight: true },
						{ name: 'Fury' },
						{ name: 'Saving Private Ryan' },
						{ name: 'Inglorious Basterds' },
						{ name: 'Full Metal Jacket' },
						{ name: 'Letters from Iwo Jima' },
						{ name: 'Flags of Our Fathers' },
						{ name: 'The Thin Red Line', year: 1998 },
						{ name: 'Hacksaw Ridge' },
						{ name: 'Pearl Harbor' },
						{ name: 'Enemy at the Gates' },
						{ name: 'Patton' },
						{ name: 'Zulu' },
						{ name: 'The Karate Kid', year: 2010 },
						{ name: 'Spirited Away', highlight: true },
						{ name: 'Shawshank Redemption' },
						{ name: 'Good Will Hunting' },
						{ name: 'Forrest Gump', highlight: true },
						{ name: 'The Outsiders' },
						{ name: 'Grease' },
						{ name: 'Cast Away' },
						{ name: 'A Beautiful Mind' },
						{ name: 'School of Rock' },
						{ name: 'Lincoln' }
					]
				}
			]
		},
		{
			category: 'Shows',
			lists: [
				{
					date: 2025,
					items: [
						{ name: 'Abbott Elementary' },
						{ name: 'Atlanta', highlight: true },
						{ name: 'You' },
						{ name: 'Veep', highlight: true }
					]
				},
				{
					date: 2024,
					items: [{ name: 'Masters of the Air' }, { name: 'Moral Orel', highlight: true }]
				},
				{ date: 2023, items: [{ name: 'American Born Chinese' }] },
				{
					date: undefined,
					items: [
						{ name: 'Quiet on Set: The Dark Side of Kids TV' },
						{ name: 'Jet Lag: The Game', highlight: true },
						{ name: 'School Babysitters' },
						{ name: 'Attack on Titan' },
						{ name: 'Atypical' },
						{ name: 'Silicon Valley', highlight: true },
						{ name: 'The Pacific', highlight: true },
						{ name: 'Band of Brothers', highlight: true },
						{ name: 'Last Chance High', authors: ['Vice'] }
					]
				}
			]
		},
		{
			category: 'Documentaries',
			lists: [
				{
					date: undefined,
					items: [
						{ name: 'AlphaGo', authors: ['DeepMind'], highlight: true },
						{ name: 'The Fallen of World War II', authors: ['Neil Halloran'], highlight: true }
					]
				}
			]
		},
		{
			category: 'Talks',
			lists: [
				{
					date: undefined,
					items: [
						{ name: 'Rap Theory & Practice: an Introduction', authors: ['Lupe Fiasco'] },
						{ name: 'Web Without Walls', authors: ['Dan Abramov'] },
						{ name: 'Rethinking reactivity', authors: ['Rich Harris'], highlight: true },
						{ name: 'Computer, build me an app', authors: ['Rich Harris'] },
						{ name: 'The beauty of data visualization', authors: ['David McCandless'] },
						{ name: 'What the heck is the event loop anyway?', authors: ['Philip Roberts'] },
						{ name: 'Design is a Search Problem', authors: ['Mike Bostock'], highlight: true }
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
						{ name: 'Humanities Approaches to Graphical Display', authors: ['Johanna Drucker'] },
						{
							name: 'Anti-Semitism as Skill: Rudolf Virchow’s “Schulstatistik” and the Racial Composition of Germany',
							authors: ['Andrew Zimmerman']
						},
						{
							name: 'Situated Knowledges: The Science Question in Feminism and the Privilege of Partial Perspective',
							authors: ['Donna Haraway']
						}
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
						{ name: 'He’s dying. She’s pregnant', authors: ['The Washington Post'] },
						{ name: 'The Blast Effect', authors: ['The Washington Post'] },
						{
							name: 'The Firefighter With O.C.D. and the Vaccine He Believed Would Kill Him',
							authors: ['The New York Times']
						},
						{ name: 'The Anti-Social Century', authors: ['The Atlantic'] },
						{ name: 'The Agony of Texting With Men', authors: ['The Atlantic'] },
						{ name: 'The Militia and the Mole', authors: ['ProPublica'] },
						{ name: 'The Good Whale', authors: ['The New York Times'] },
						{ name: 'The Deserter', authors: ['The New York Times'] },
						{ name: 'Searching for Maura', authors: ['The Washington Post'] },
						{
							name: 'More than 1,800 congressmen once enslaved Black people. This is who they were, and how they shaped the nation.',
							authors: ['The Washington Post']
						},
						{ name: 'Machine Bias', authors: ['ProPublica'] },
						{
							name: 'How does ‘Hamilton,’ the non stop, hip-hop Broadway sensation tap rap’s master rhymes to blur musical lines?',
							authors: ['The Wall Street Journal']
						}
					]
				}
			]
		},
		{
			category: 'Essays',
			lists: [
				{
					date: 2025,
					items: [
						{ name: 'Last Boys at the Beginning of History', authors: ['Mana Afsari'] },
						{ name: 'ChatGPT Is a Gimmick', authors: ['Jonathan Malesic'] },
						{ name: 'The Worst Magazine In America', authors: ['Nathan J. Robinson'] },
						{ name: 'AI: The New Aesthetics of Fascism', authors: ['Gareth Watkins'] },
						{ name: 'Surely You’re a Creep, Mr. Feynman', authors: ['Leila McNeill'] }
					]
				},
				{
					date: 2024,
					items: [
						{
							name: 'The “Blob” Is Furious About Gaza. But That’s Not Enough.',
							authors: ['Josef Burton']
						}
					]
				}
			]
		}
	];
</script>

{#snippet authors(list: Array<string>)}
	{#if list.length === 0}
		{null}
	{:else if list.length === 1}
		{list.at(0)}
	{:else if list.length === 2}
		{list.at(0)} and {list.at(1)}
	{:else}
		{list.at(0)}, {authors(list.slice(1))}
	{/if}
{/snippet}

<main>
	<hgroup>
		<h1><a href="/">Eric Lau</a></h1>
		<p>My consumption, incomplete.</p>
	</hgroup>
	{#each data as { category, lists }}
		<section id={category.toLowerCase()}>
			<hgroup>
				<h2>{category}</h2>
				<b class="count">{lists.flatMap((d) => d.items).length}</b>
			</hgroup>
			{#each lists.filter((list) => list.items.length > 0) as { date, items }, i}
				<section>
					{#if date === undefined}
						{#if i > 0}
							<hgroup>
								<h3>Before</h3>
								<small class="count">{items.length}</small>
							</hgroup>
						{/if}
					{:else}
						<hgroup>
							<h3>{date}</h3>
							<small class="count">{items.length}</small>
						</hgroup>
					{/if}
					<ul>
						{#each items as item}
							<li>
								<div class="list-content" class:highlight={item.highlight}>
									<div>
										{item.name}
										{#if item.year}({item.year}){/if}
									</div>
									{#if item.authors}
										<div class="extra authors">
											by {@render authors(item.authors)}
										</div>
									{/if}
									{#if item.thoughts}
										<div class="extra">{item.thoughts}</div>
									{/if}
								</div>
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</section>
	{/each}
</main>

<style>
	main {
		display: grid;
		gap: 0.75rem;

		max-width: 75ch;
		width: 100%;
		margin: auto;

		padding: 0.25rem 0.75rem;
		box-sizing: border-box;
	}

	main > section {
		position: relative;
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

	main section hgroup:has(h2) {
		position: sticky;
		top: 0;
		background-color: var(--color-secondary);
		padding-bottom: 0.125rem;
	}

	h1 {
		margin: 0;
		font-family: var(--font-headline);
		text-transform: uppercase;
		color: var(--color-headline);
		letter-spacing: 0.0625ch;
		font-size: 3rem;
		font-weight: 400;
	}

	h2,
	h3 {
		margin: 0;
		text-transform: uppercase;
		font-family: sans-serif;
	}

	ul,
	p {
		margin: 0;
		text-wrap: pretty;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		line-height: 1.375rem;
	}

	ul {
		list-style-type: disc;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.375rem;
	}

	li .list-content {
		color: var(--color-primary);
		display: grid;
		gap: 0.25rem;
	}

	li .extra {
		--l-offset: 17.5;
		line-height: 1.125rem;
		font-family: var(--font-sans);
		color: lch(from var(--color-primary) calc(l + var(--l-offset)) c h);
		font-size: 0.875rem;
	}

	@media (prefers-color-scheme: dark) {
		li .extra {
			--l-offset: -17.5;
		}
	}

	li .authors {
		font-size: 0.925rem;
	}

	li .list-content.highlight > div:first-of-type {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	small {
		font-size: 0.925rem;
	}

	a {
		color: var(--color-primary);
		text-decoration: none;
	}

	.count {
		font-family: sans-serif;
	}

	h1 a {
		color: var(--color-headline);
	}
</style>
