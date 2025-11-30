<script lang="ts">
	const data: Array<Lists> = [
		{
			category: 'Theater',
			lists: [
				{
					date: 2025,
					items: [
						{
							name: 'Death Becomes Her',
							thoughts:
								'A funny, self-aware musical about living forever. Colorful, abundant, physically impressive.',
							notes: 'Watched at Lunt-Fontanne Theatre'
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
					items: []
				},
				{
					date: 2025,
					items: [
						{
							name: 'Orientalism',
							authors: ['Edward Said'],
							thoughts: `Said provides a critical lens into Orientalism by analyzing centuries of
							texts and characters. I struggled to retain all of the detail, but I did grasp the
							broad strokes of how Said characterizes the development of Orientalist ideas, 
							from “objective” European observer-scholars journeying through the Middle East to 
							Anglo-French colonizers to the “liberal” American foreign affairs apparatus. 
							It’s disturbing how malleable we (not just the West, but the East as well) have been
							to centuries-old racist and essentializing narratives — that the “Orientals” are stuck 
							in the past and need their own history written for them, that Islam is an all-controlling 
							deviant religion, that the exotic East ought to be dictated by the superior West.
							The passages relating to Marx’s defense of Indian colonization is a prime example of 
							how pervasive and mainstream Orientalist thought had became in the West. I do feel the
							sense that I had already encountered many of the overarching themes of the book 
							in academic settings or other modern pieces of cultural critique, a testament
							to the long-lasting and wide-ranging influence Said has had on discourse around Orientalism.`,
							notes: 'Purchased at Mil Mundos'
						},
						{
							name: 'LatinX',
							authors: ['Claudia Milian'],
							notes: 'Purchased at Mil Mundos',
							thoughts:
								'Milian expands upon the common linguistic and gender discourse on LatinX. She talks of “the X” as it relates to unknowability, transition and fluidity beyond gender into themes around climate and politics.'
						},
						{
							name: 'Abundance',
							authors: ['Ezra Klein', 'Derek Thompson'],
							thoughts:
								'Klein and Thompson remind us that supposedly progressive government bureaucracy can become burdensome despite good intentions. Certainly, the emphasis on housing affordability is timely.',
							notes: 'Purchased at Barnes & Noble'
						},
						{
							name: 'Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection',
							authors: ['John Green'],
							notes: 'Purchased at Barnes & Noble',
							thoughts: `In the midst of the many acute disasters we give our attention to, 
								we often forget about the chronic, persisting tragedies that play out over decades or centuries.
								Green puts tuberculosis back in focus by telling the history of the disease alongside the story of Henry Reider.
								The book serves as an advocate to Western audiences for funding tuberculosis treatment, 
								especially as the United States cut USAID programs for the disease around the time the book was released.
							`,
							highlight: true
						},
						{
							name: 'Unassimilable: An Asian Diasporic Manifesto for the 21st Century',
							authors: ['Bianca Mabute-Louie'],
							notes: 'Purchased at Bridge Street Books',
							highlight: true,
							thoughts:
								'The “Asian Diaspora” framing is compelling, but I do not completely resonate with it as someone who does not have particular attachments to the motherland with respect to language, travel or culture. I do value the narrative on how Mabute-Louie grew up in a religious community and “ethnoburb,” two settings I could not count as my own.'
						},
						{
							name: 'The Year of Magical Thinking',
							authors: ['Joan Didion'],
							notes: 'Purchased at Strand Bookstore',
							highlight: true,
							thoughts: 'I enjoyed the fluidity of Didion’s writing.'
						},
						{ name: 'Living in Data', authors: ['Jer Thorp'], highlight: true },
						{ name: 'Killing Rage: Ending Racism', authors: ['bell hooks'], highlight: true },
						{
							name: 'All About Love: New Visions',
							authors: ['bell hooks'],
							highlight: true,
							thoughts: `hooks offers a useful definition of love in romantic, familial, parental and communal contexts. 
								I carry the definition — the will to extend oneself for the purpose of nurturing one’s own or another’s spiritual growth — with me.
								The spiritual essense eludes me. But I agree with the active nature, that love is not a situation to fall into but a process to continue. 
								In the familial context, hooks argues that rearing a child should not just be the responsibility of a mother and father,
								but of an entire community of adults who can provide a breath of advice and perspectives.`
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
					date: 2023,
					items: [{ name: 'The Stranger', authors: ['Albert Camus'] }]
				},
				{
					date: 2022,
					items: [
						{ name: 'Crying in H Mart', authors: ['Michelle Zauner'], highlight: true },
						{ name: 'Ender’s Game', authors: ['Orson Scott Card'] }
					]
				},
				{
					date: 2020,
					items: [
						{
							name: 'Princess: A True Story of Life Behind the Veil in Saudi Arabia',
							authors: ['Jean Sasson']
						},
						{
							name: 'We Should All Be Feminists',
							authors: ['Chimamanda Ngozi Adichie']
						},
						{
							name: 'The Ones Who Walk Away from Omelas',
							authors: ['Ursula K. Le Guin']
						}
					]
				},
				{
					date: 2019,
					items: [
						{
							name: 'Sir Gawain and the Green Knight',
							notes: 'Read for school'
						},
						{
							name: 'Beowulf',
							notes: 'Read for school'
						},
						{
							name: 'The Brief and Wondrous Life of Oscar Wao',
							authors: ['Junot Díaz'],
							notes: 'Read for school'
						},
						{
							name: 'Moby-Dick',
							authors: ['Herman Melville'],
							notes: 'Read for school'
						}
					]
				},
				{
					date: 2018,
					items: [
						{ name: 'Revolutionary Road', authors: ['Richard Yates'], notes: 'Read for school' },
						{
							name: 'The Great Gatsby',
							authors: ['F. Scott Fitzgerald'],
							notes: 'Read for school'
						},
						{
							name: 'The Unbearable Lightness of Being',
							authors: ['Milan Kundera'],
							notes: 'Read for school'
						},
						{ name: 'Maus', authors: ['Art Spiegelman'], notes: 'Read for school' },
						{ name: 'Metamorphosis', authors: ['Franz Kafka'], notes: 'Read for school' },
						{
							name: 'The Picture of Dorian Gray',
							authors: ['Oscar Wilde'],
							notes: 'Read for school'
						}
					]
				},
				{
					date: 2017,
					items: [
						{
							name: 'The Odyssey',
							authors: ['Homer'],
							notes: 'Read for school'
						},
						{
							name: 'Oedipus Rex',
							authors: ['Sophocles'],
							notes: 'Read for school'
						},
						{
							name: 'Othello',
							authors: ['William Shakespeare'],
							notes: 'Read for school'
						},
						{
							name: 'The Sorrows of Young Werther',
							authors: ['Johann Wolfgang von Goethe'],
							notes: 'Read for school'
						},
						{
							name: 'The Lost City of Z',
							authors: ['David Grann'],
							notes: 'Read for school'
						},
						{
							name: 'Things Fall Apart',
							authors: ['Chinua Achebe'],
							notes: 'Read for school'
						},
						{ name: 'Julius Caesar', authors: ['William Shakespeare'], notes: 'Read for school' },
						{ name: 'The Kite Runner', authors: ['Khaled Hosseini'], notes: 'Read for school' }
					]
				},
				{
					date: 2016,
					items: [
						{
							name: 'One Flew Over The Cuckoo’s Nest',
							authors: ['Ken Kesey'],
							notes: 'Read for school'
						},
						{
							name: 'The Curious Incident of the Dog in the Night-Time',
							authors: ['Mark Haddon'],
							notes: 'Read for school'
						},
						{
							name: 'Stitches',
							authors: ['David Small'],
							notes: 'Read for school'
						},
						{
							name: 'American Born Chinese',
							authors: ['Gene Luen Yang'],
							notes: 'Read for school'
						},
						{
							name: '1984',
							authors: ['George Orwell'],
							notes: 'Read for school'
						},
						{
							name: 'Frankenstein',
							authors: ['Mary Shelley'],
							notes: 'Read for school'
						},
						{
							name: 'Survival of the Sickest',
							authors: ['Sharon Moalem'],
							notes: 'Read for school'
						}
					]
				},
				{
					date: undefined,
					items: [
						{
							name: 'Data Feminism',
							authors: ['Catherine D’Ignazio', 'Lauren Klein'],
							notes: 'Purchased at Literati Bookstore',
							thoughts:
								'I’ve read several chapters for different university courses, but have yet to read it in full. The chapters I have read give guidance on how to work with data in ways that surface humanity, challenge power and retain context.'
						},
						{
							name: 'How Charts Lie: Getting Smarter about Visual Information',
							authors: ['Alberto Cairo']
						},
						{ name: 'Siddhartha', authors: ['Hermann Hesse'], notes: 'Read for school' },
						{
							name: 'Delusions of Gender: How Our Minds, Society, and Neurosexism Create Difference',
							authors: ['Cordelia Fine']
						},
						{ name: 'Crazy Rich Asians', authors: ['Kevin Kwan'] },
						{ name: 'A Long Way Gone', authors: ['Ishmael Beah'] }
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
						{
							name: 'Wicked: For Good',
							notes: 'Watched at AMC Courthouse Plaza 8',
							thoughts: `I think it was fine. The musical numbers were less memorable than the ones from the first part.`
						},
						{
							name: 'Wicked',
							highlight: true,
							notes:
								'I watched on Halloween Eve, then dresssed as Elphaba (yes, with green face paint) on Halloween.'
						},
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
						{
							name: 'Sinners',
							thoughts: `As a whole, I did not immediately love Sinners after seeing it. 
								Michael B. Jordan’s dual role, the musical elements and historical worldbuilding were impressive. 
								I also enjoyed learning about the Asian American presence in the early 20th century South.
								The vampire plot caught me off guard, and parts of the second half felt rushed.
								I can still appreciate the larger themes of the movie, some of which I admittedly did not fully understand
								until consuming media about the film such as F.D Signifier’s video on the movie and Black art.
								`,
							highlight: true
						},
						{ name: 'Frances Ha' },
						{ name: 'Arrival' },
						{ name: 'The Good Shepherd' },
						{ name: 'Patriots Day' },
						{ name: 'Marvelous and the Black Hole' },
						{ name: 'Always Be My Maybe' },
						{ name: 'The Half of It' },
						{ name: 'Marriage Story', highlight: true },
						{ name: 'Unbroken' },
						{
							name: 'Take Out',
							highlight: true,
							authors: ['Sean Baker', 'Shih-Ching Tsou'],
							thoughts: `A raw film from Baker and Tsou about Ming, an undocumented Chinese immigrant working 
							as a deliveryman in New York City during the early 2000s. I don’t know much about my father.
							Certainly Ming’s story is not my father’s. But I felt a certain lineage and bond to it all 
							as the child of Chinese immigrants who built a life through struggle at a Chinese restaurant in New York City.
							The early childhood sensations all flooded back to me — the cigarette smoke, the neon light, 
							the claustrophobic restaurant kitchen, the delivery bike, the torrential downpour.`
						},
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
						{
							name: 'Eternal Sunshine of the Spotless Mind',
							highlight: true,
							thoughts: 'What an awful thing: to forget a past life. A lovely soundtrack.'
						},
						{ name: '42', highlight: true },
						{ name: 'The Breakfast Club' },
						{
							name: 'Perfect Days',
							highlight: true,
							thoughts: `Sparse, pleasant. A lovely soundtrack. Is ambition the thief of joy?
								For Hirayama, stability and routine seem to be the key to a perfect day.`
						}
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
						{ name: 'The Lost City of Z' },
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
						{ name: 'Last Chance High', authors: ['Vice'] },
						{ name: 'America: The Story of Us' },
						{
							name: 'Battlefield',
							notes: `I watched several of the Second World War episodes during my childhood.`
						}
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
						{ name: 'The Thinking Game', authors: ['DeepMind'], highlight: true },
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
								<h3>Undated</h3>
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
								{#if !item.thoughts}
									<div class="list-content">
										<div class:highlight={item.highlight}>
											{item.name}
											{#if item.year}({item.year}){/if}
										</div>
										{#if item.authors}
											<div class="extra authors">
												by {@render authors(item.authors)}
											</div>
										{/if}
										{#if item.notes}
											<div class="extra note">{item.notes}</div>
										{/if}
									</div>
								{:else}
									<details>
										<summary>
											<div class="list-content">
												<div class:highlight={item.highlight}>
													{item.name}
													{#if item.year}({item.year}){/if}
												</div>
												{#if item.authors}
													<div class="extra authors">
														by {@render authors(item.authors)}
													</div>
												{/if}
											</div>
										</summary>
										<div class="list-content">
											{#if item.thoughts}
												<div class="extra">{item.thoughts}</div>
											{/if}
											{#if item.notes}
												<div class="extra note">{item.notes}</div>
											{/if}
										</div>
									</details>
								{/if}
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
		list-style-type: none;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.375rem;
	}

	li:not(:has(details)) {
		list-style-type: "•  ";
	}

	details,
	.list-content {
		display: grid;
		gap: 0.25rem;
	}

	summary {
		list-style-position: outside;
		color: var(--color-primary);
		list-style-type: '+ ';
	}

	summary:hover {
		cursor: pointer;
	}

	details[open] summary {
		list-style-type: '− ';
	}

	li .extra {
		line-height: 1.25rem;
		font-family: var(--font-sans);
		color: var(--color-neutral);
		font-size: 0.925rem;
	}

	li .note {
		font-size: 0.825rem;
	}

	li .authors {
		font-size: 1rem;
	}

	li .highlight {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	small {
		font-size: 1rem;
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
