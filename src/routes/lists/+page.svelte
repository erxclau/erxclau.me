<script lang="ts">
	import { TemporalDate, TemporalPartialDate } from '$lib/temporal';

	const data: Array<Lists> = [
		{
			category: 'Theater',
			lists: [
				{
					date: 2026,
					items: [
						{
							name: 'Hamilton',
							date: new TemporalDate(2026, 1, 15),
							thoughts: `
							Ever since my seventh grade history teacher showed me Lin-Manuel Miranda performing Alexander Hamilton at 
							the White House Poetry Jam, I’ve wanted to be in the room where it happens. Hamilton was my introduction to rap music.
							Daveed Digg’s apperance in the original cast led me to explore his experimental work in clipping. 
							Lin’s nods to Biggie and Mobb Deep gave me starting points for rap from the 1990s. While I did play trumpet and guitar in middle school, 
							I had not deeply listened to or appreciated music before Hamilton. The show itself was wonderful. I was initially uncertain. 
							Having listened to the original cast recording countless times in the past decade, I had certain expectations about the annunciations and voices. 
							I was able to enjoy the show after letting go of those expectations. I appreciated the more conversational, awkward and whimsical
							moments that were not particularly conveyed in the original recording. I loved how versatile the rotating floor was.
							I cried through much of the second half.`,
							notes: 'At Richard Rodgers Theater'
						}
					]
				},
				{
					date: 2025,
					items: [
						{
							name: 'Death Becomes Her',
							date: new TemporalDate(2025, 11, 22),
							thoughts:
								'A funny, self-aware musical about living forever. Colorful, abundant, physically impressive.',
							notes: 'At Lunt-Fontanne Theatre'
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
							name: 'The Thing Around Your Neck',
							authors: ['Chimamanda Ngozi Adichie'],
							notes: 'From Freebird Books'
						},
						{
							name: 'The Power Broker',
							authors: ['Robert Caro']
						}
					]
				},
				{
					date: 2026,
					items: [
						{
							name: 'Tomorrow, and Tomorrow, and Tomorrow',
							authors: ['Gabrielle Zevin'],
							thoughts: `I felt that Zevin touched on a couple of political topics (gun violence, LGBTQ rights) but did not explore them in much depth. 
							I think the writing itself was fine, but explaining things like what an NPC is felt pedantic. Perhaps gamers (or people who are at least
							somewhat familiar with gaming culture) are not the target audience. In what seems like a story meant to be about how people change over time,
							Sam and Sadie did not grow very much as individuals or together. They learn to forgive each other (over and over again). But what else?
							Maybe I am missing something.`,
							notes: 'From Kramers',
							date: new TemporalDate(2026, 1, 11)
						},
						{
							name: 'The Sympathizer',
							authors: ['Viet Thanh Nguyen'],
							date: new TemporalDate(2026, 1, 8),
							thoughts: `Nguyen explores many facets of storytelling, perspective and duality in his novel. 
							The story is told first (and mostly) through the narrator’s written confessions, then through 
							first and third person reprecussions of how the confessions were written to omit certain details
							or forgotten memories. How should one narrate their own life, or live at all, when they have 
							sympathies to so many thoughts or people? What does it mean to live and breathe in the institutions
							one wants to revolutionize, to complete a mission at the expense of your kin? Is all at expense
							for the revolution? If so, what is left afterwards? The novel expanded my limited understanding 
							of the war from a non-military, non-American perpsective. Yes, I had been familiar with
							at least some of the atrocities the United States military committed in Vietnam, Laos and Cambodia.
							Nguyen told a horrifying story of the war and its aftermath in an intimate and critical manner that
							implicated not just American soldiers but American media, the French, the West more generally as well
							as the Vietnamese people themselves. The narrator is (or narrators are) left in an uncertain state by 
							the end of the novel, literally drifting through the water and open to a new beginning. 
							I am quite excited to read the sequel.`,
							highlight: true
						}
					]
				},
				{
					date: 2025,
					items: [
						{
							name: 'Ornamentalism',
							date: new TemporalDate(2025, 12, 28),
							authors: ['Anne Anlin Cheng'],
							thoughts: `Cheng presents a thingness—personness spectrum in Asian American women through legal, satorial 
							(i.e., fashion or style), culinary and technological lenses. The vision of the “yellow woman” stirs a particular
							image in the mind, often one ornamented in one way or another. The book is guided by analyses of various media
							including historical photos, movies, a short story and museum exhibit. While I was able to follow the movie-centered
							(Anna May Wong and Piccadilly, Ghost in the Shell, Ex Machina) and short story (Bottles of Beaujolais) analyses,
							I was not familiar with any of the original media discussed and felt I lacked the proper frame to think more
							critically about the ideas Cheng offered in those parts. The analyses of the historical photos and museum exhibits
							were easier for me to think through with the photo artifacts themselves helpfully provided inline with the text.
							While there were photos and screenshots of certain scenes discussed from the movies, I felt this insufficient to
							fully grasp the totality of the film.`,
							notes: 'From McNally Jackson'
						},
						{
							name: 'Orientalism',
							date: new TemporalDate(2025, 11, 29),
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
							notes: 'From Mil Mundos'
						},
						{
							name: 'LatinX',
							authors: ['Claudia Milian'],
							notes: 'From Mil Mundos',
							thoughts:
								'Milian expands upon the common linguistic and gender discourse on LatinX. She talks of “the X” as it relates to unknowability, transition and fluidity beyond gender into themes around climate and politics.'
						},
						{
							name: 'Abundance',
							authors: ['Ezra Klein', 'Derek Thompson'],
							thoughts:
								'Klein and Thompson remind us that supposedly progressive government bureaucracy can become burdensome despite good intentions. Certainly, the emphasis on housing affordability is timely.',
							notes: 'From Barnes & Noble'
						},
						{
							name: 'Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection',
							authors: ['John Green'],
							notes: 'From Barnes & Noble',
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
							notes: 'From Bridge Street Books',
							highlight: true,
							thoughts:
								'The “Asian Diaspora” framing is compelling, but I do not completely resonate with it as someone who does not have particular attachments to the motherland with respect to language, travel or culture. I do value the narrative on how Mabute-Louie grew up in a religious community and “ethnoburb.”'
						},
						{
							name: 'The Year of Magical Thinking',
							authors: ['Joan Didion'],
							notes: 'From Strand Bookstore',
							highlight: true,
							thoughts: 'I enjoyed the fluidity of Didion’s writing.'
						},
						{ name: 'Living in Data', authors: ['Jer Thorp'], highlight: true },
						{
							name: 'Killing Rage: Ending Racism',
							authors: ['bell hooks'],
							highlight: true,
							thoughts: `In relation to Black beauty standards that I read about in The Message, 
							hooks discusses the “Black is beautiful” movement of the 1960s that rejected Eurocentric 
							beauty standards. Yet, because of robust Western programming and lasting white prejudice
							against “looking Black,” only those who looked white could climb the American social ladder.
							Black Americans who chose to straighten their hair or wear wigs said they did so out of
							personal preference, rather than an attempt to appeal to white America. The dissolution of
							radical movements during the 1960s was not limited to Black beauty. hooks contends that other
							movements, particularly ones based on economic and racial communalism, fell apart as young
							radicals realized the difficulty of living communally in a white supremacist, capitalist patriarchy.
							hooks views race through many intersections: that Black liberation is undermined by outdated
							patriarchal modes of thought where Black men will silence Black women to align closer with white men, 
							that middle class Black Americans will perpetuate caustic stereotypes and pimp Black culture to
							appeal to white American taste.`,
							notes: 'From Yu & Me Books'
						},
						{
							name: 'All About Love: New Visions',
							authors: ['bell hooks'],
							highlight: true,
							thoughts: `hooks offers a useful definition of love in romantic, familial, parental and communal contexts. 
								I carry the definition — the will to extend oneself for the purpose of nurturing one’s own or another’s spiritual growth — with me.
								The spiritual essense eludes me. But I agree with the active nature, that love is not a situation to fall into but a process to continue. 
								In the familial context, hooks argues that rearing a child should not just be the responsibility of a mother and father,
								but of an entire community of adults who can provide a breath of advice and perspectives.`,
							notes: 'From Codex Books'
						},
						{ name: 'Time Is a Mother', authors: ['Ocean Vuong'] },
						{
							name: 'The Message',
							authors: ['Ta-Nehisi Coates'],
							highlight: true,
							thoughts: `I appreciated the connective tissue that linked the essays on Africa and Palestine.
							Following the end of slavery in the United States, some white and African Americans began the
							back-to-Africa movement on the basis that white and African Americans could not coexist. Many 
							African Americans did migrate, particularly to Liberia, despite no clear history of where in 
							Africa they originated. As with many settlement projects, African Americans settling in Liberia
							was done at the expense of the native African population — African Americans necessarily took 
							land, brought Christianity, and spread a related but distinct culture. African Americans also
							brought a different beauty standard to Africa (through settlement and later global media) of 
							straight hair and lighter skin. Coates contends with this when he ponders beauty in his visit to
							Senegal. Beauty aside, the African American settlement project has narrative similarities to Zionism.
							Jews fled Europe after the Second World War to establish the new state of Israel, on Palestinian
							land. The United States is implicated in rejecting both African Americans (by promoting the black-to-Africa
							movement and centuries of systemic racism) and Jews (by rejecting Jewish refugees after the Holocaust).`
						}
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
							date: new TemporalPartialDate(2020, 7),
							authors: ['Jean Sasson']
						},
						{
							name: 'We Should All Be Feminists',
							date: new TemporalDate(2020, 6, 29),
							authors: ['Chimamanda Ngozi Adichie']
						},
						{
							name: 'The Ones Who Walk Away from Omelas',
							date: new TemporalDate(2020, 3, 15),
							authors: ['Ursula K. Le Guin']
						}
					]
				},
				{
					date: 2019,
					items: [
						{
							name: 'Sir Gawain and the Green Knight',
							notes: 'For school'
						},
						{
							name: 'Beowulf',
							notes: 'For school'
						},
						{
							name: 'The Brief and Wondrous Life of Oscar Wao',
							authors: ['Junot Díaz'],
							notes: 'For school'
						},
						{
							name: 'Moby-Dick',
							authors: ['Herman Melville'],
							notes: 'For school'
						}
					]
				},
				{
					date: 2018,
					items: [
						{ name: 'Revolutionary Road', authors: ['Richard Yates'], notes: 'For school' },
						{
							name: 'The Great Gatsby',
							authors: ['F. Scott Fitzgerald'],
							notes: 'For school'
						},
						{
							name: 'The Unbearable Lightness of Being',
							authors: ['Milan Kundera'],
							notes: 'For school'
						},
						{ name: 'Maus', authors: ['Art Spiegelman'], notes: 'For school' },
						{ name: 'Metamorphosis', authors: ['Franz Kafka'], notes: 'For school' },
						{
							name: 'The Picture of Dorian Gray',
							authors: ['Oscar Wilde'],
							notes: 'For school'
						}
					]
				},
				{
					date: 2017,
					items: [
						{
							name: 'The Odyssey',
							authors: ['Homer'],
							notes: 'For school'
						},
						{
							name: 'Oedipus Rex',
							authors: ['Sophocles'],
							notes: 'For school'
						},
						{
							name: 'Othello',
							authors: ['William Shakespeare'],
							notes: 'For school'
						},
						{
							name: 'The Sorrows of Young Werther',
							authors: ['Johann Wolfgang von Goethe'],
							notes: 'For school'
						},
						{
							name: 'The Lost City of Z',
							authors: ['David Grann'],
							notes: 'For school'
						},
						{
							name: 'Things Fall Apart',
							authors: ['Chinua Achebe'],
							notes: 'For school'
						},
						{ name: 'Julius Caesar', authors: ['William Shakespeare'], notes: 'For school' },
						{ name: 'The Kite Runner', authors: ['Khaled Hosseini'], notes: 'For school' }
					]
				},
				{
					date: 2016,
					items: [
						{
							name: 'One Flew Over The Cuckoo’s Nest',
							authors: ['Ken Kesey'],
							notes: 'For school'
						},
						{
							name: 'The Curious Incident of the Dog in the Night-Time',
							authors: ['Mark Haddon'],
							notes: 'For school'
						},
						{
							name: 'Stitches',
							authors: ['David Small'],
							notes: 'For school'
						},
						{
							name: 'American Born Chinese',
							authors: ['Gene Luen Yang'],
							notes: 'For school'
						},
						{
							name: '1984',
							authors: ['George Orwell'],
							notes: 'For school'
						},
						{
							name: 'Frankenstein',
							authors: ['Mary Shelley'],
							notes: 'For school'
						},
						{
							name: 'Survival of the Sickest',
							authors: ['Sharon Moalem'],
							notes: 'For school'
						}
					]
				},
				{
					date: undefined,
					items: [
						{
							name: 'Data Feminism',
							authors: ['Catherine D’Ignazio', 'Lauren Klein'],
							notes: 'From Literati',
							thoughts:
								'I’ve read several chapters for different university courses, but have yet to read it in full. The chapters I have read give guidance on how to work with data in ways that surface humanity, challenge power and retain context.'
						},
						{
							name: 'How Charts Lie: Getting Smarter about Visual Information',
							authors: ['Alberto Cairo']
						},
						{ name: 'Siddhartha', authors: ['Hermann Hesse'], notes: 'For school' },
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
							name: 'Before Midnight',
							date: new TemporalDate(2025, 12, 30),
							notes: 'On YouTube',
							thoughts: `I enjoyed the trilogy as a whole. The physical changes in the actors over decades made the progression
							in themselves and their relationship feel believable. Love is perhaps at its most innocent when composed of just two
							people existing in some ephemeral place or existence together. Life — through family, friends and work — complicates
							love as in the second and third movies. To love, in a real world, is to endure with all of life’s necessary complexities.`,
							highlight: true
						},
						{
							name: 'Before Sunset',
							date: new TemporalDate(2025, 12, 30),
							notes: 'On YouTube',
							highlight: true
						},
						{
							name: 'Before Sunrise',
							date: new TemporalDate(2025, 12, 30),
							notes: 'On YouTube',
							highlight: true
						},
						{
							name: 'Moonlight',
							date: new TemporalDate(2025, 12, 29),
							notes: 'On YouTube',
							thoughts: `I thought the scene of Juan teaching Chiron to swim was beautiful — the colors, the camera positioning, the act itself.`,
							highlight: true
						},
						{
							name: 'Wicked: For Good',
							date: new TemporalDate(2025, 11, 21),
							notes: 'At AMC Courthouse Plaza 8',
							thoughts: `I think it was fine. The musical numbers were less memorable than the ones from the first part.`
						},
						{
							name: 'Wicked',
							date: new TemporalDate(2025, 10, 30),
							notes: 'On YouTube',
							thoughts: 'I dresssed as Elphaba (yes, with green face paint) on Halloween.'
						},
						{
							name: 'Kiki’s Delivery Service',
							date: new TemporalDate(2025, 8, 30),
							thoughts: ``
						},
						{
							name: 'Independence Day',
							date: new TemporalDate(2025, 7, 20),
							notes: 'On YouTube'
						},
						{
							name: 'The Day After Tomorrow',
							date: new TemporalDate(2025, 7, 19),
							notes: 'On YouTube',
							thoughts: `Love a snowy New York City backdrop in any movie.`
						},
						{
							name: 'When Harry Met Sally',
							highlight: true,
							date: new TemporalDate(2025, 7, 14),
							notes: 'On Pluto TV'
						},
						{
							name: 'Tron: Legacy',
							date: new TemporalPartialDate(2025, 7),
							thoughts: `Tron: Legacy improved on the original by creating a world with more definition beyond the lines and shapes in the cyberspace from the original movie.`
						},
						{
							name: 'Tron',
							date: new TemporalPartialDate(2025, 7),
							thoughts: `I can understand that the cyberspace concept was in vogue, but I can’t get 
							behind the idea of physical entities acting “inside” some abstract computer software world.
							The visuals also felt lacking, though I know that CGI was novel in the 1980s.`
						},
						{
							name: 'The Untouchables',
							date: new TemporalDate(2025, 6, 28),
							notes: 'On Paramount+',
							thoughts: `I finally understand what Dr. Dre meant in California Love.`
						},
						{
							name: 'The Rules of Attraction',
							date: new TemporalDate(2025, 6, 26),
							notes: 'On Tubi'
						},
						{
							name: 'American Psycho',
							highlight: true,
							date: new TemporalDate(2025, 6, 26),
							notes: 'On Paramount+',
							thoughts: `Psychotic indeed. Is this what happens to those soulless, good-looking New York City suits?`
						},
						{
							name: 'War of the Worlds',
							date: new TemporalDate(2025, 6, 25),
							notes: 'On Paramount+'
						},
						{
							name: 'The Boy in the Striped Pyjamas',
							highlight: true,
							date: new TemporalDate(2025, 6, 23),
							notes: 'On Paramount+'
						},
						{
							name: 'Braveheart',
							date: new TemporalDate(2025, 6, 22),
							notes: 'On Paramount+'
						},
						{
							name: 'Pulp Fiction',
							date: new TemporalDate(2025, 6, 22),
							notes: 'On Paramount+'
						},
						{
							name: 'The Italian Job',
							year: 2003,
							date: new TemporalDate(2025, 6, 22),
							notes: 'On Paramount+'
						},
						{
							name: 'Tropic Thunder',
							date: new TemporalDate(2025, 6, 22),
							notes: 'On Paramount+'
						},
						{ name: 'Flight', date: new TemporalPartialDate(2025, 6) },
						{ name: 'Reservoir Dogs', highlight: true, date: new TemporalPartialDate(2025, 6) },
						{ name: 'Edge of Tomorrow', date: new TemporalPartialDate(2025, 6) },
						{
							name: 'The Last Samurai',
							notes: 'On Paramount+',
							date: new TemporalDate(2025, 6, 3)
						},
						{ name: 'Jack Reacher', notes: 'On Paramount+', date: new TemporalDate(2025, 6, 2) },
						{
							name: 'Top Gun: Maverick',
							notes: 'On Paramount+',
							date: new TemporalDate(2025, 6, 2)
						},
						{ name: 'Top Gun', notes: 'On Paramount+', date: new TemporalDate(2025, 6, 2) },
						{
							name: 'Transformers: Rise of the Beasts',
							notes: 'On Paramount+',
							date: new TemporalDate(2025, 6, 1)
						},
						{ name: 'Bumblebee', notes: 'On Paramount+', date: new TemporalDate(2025, 6, 1) },
						{
							name: 'Transformers: The Last Knight',
							notes: 'On Paramount+',
							date: new TemporalDate(2025, 5, 27)
						},
						{
							name: 'Transformers: Age of Extinction',
							notes: 'On Paramount+',
							date: new TemporalDate(2025, 5, 23)
						},
						{
							name: 'Mission: Impossible — Dead Reckoning',
							notes: 'On Paramount+',
							date: new TemporalPartialDate(2025, 5)
						},
						{
							name: 'Mission: Impossible — Fallout',
							notes: 'On Paramount+',
							date: new TemporalPartialDate(2025, 5)
						},
						{
							name: 'Mission: Impossible — Rogue Nation',
							notes: 'On Paramount+',
							date: new TemporalPartialDate(2025, 5)
						},
						{
							name: 'Mission: Impossible — Ghost Protocol',
							notes: 'On Paramount+',
							date: new TemporalPartialDate(2025, 5)
						},
						{ name: 'Mission: Impossible III', date: new TemporalPartialDate(2025, 5) },
						{ name: 'Mission: Impossible II', date: new TemporalPartialDate(2025, 5) },
						{ name: 'Mission: Impossible', date: new TemporalPartialDate(2025, 5) },
						{
							name: 'No Hard Feelings',
							date: new TemporalPartialDate(2025, 5),
							thoughts: `This was mostly an uncomfortable situation to watch. I liked the Maneater rendition.`
						},
						{
							name: 'The Secret Life of Walter Mitty',
							year: 2013,
							date: new TemporalDate(2025, 5, 21),
							thoughts: `The movie explores the wandering mind of Walter Mitty, a mundane office employee at Life magazine. It is relatively straightforward in the approach,
							developing from fantastical daydreams to actualizing an adventure to find a photo negative. After watching Severance,
							I appreciate this film as a foundation or first pass for Ben Stiller in developing a more ambitious project on our relationship to work.
							The use of Space Oddity in the film served as an entry point for me to explore David Bowie music.`
						},
						{ name: 'Cloudy with a Chance of Meatballs 2', date: new TemporalDate(2025, 5, 21) },
						{ name: 'Cloudy with a Chance of Meatballs', date: new TemporalDate(2025, 5, 21) },
						{
							name: 'Conclave',
							highlight: true,
							date: new TemporalDate(2025, 5, 5),
							thoughts: `The drama, the colors and the costumes all felt at place. A helpful and entertaining watch for me in the days prior to the actual papal conclave.`
						},
						{
							name: 'Sinners',
							thoughts: `As a whole, I did not immediately love Sinners after seeing it. 
								Michael B. Jordan’s dual role, the musical elements and historical worldbuilding were impressive. 
								I also enjoyed learning about the Asian American presence in the early 20th century South.
								The vampire plot caught me off guard, and parts of the second half felt rushed.
								I can still appreciate the larger themes of the movie, some of which I admittedly did not fully understand
								until consuming media about the film such as F.D Signifier’s video on the movie and Black art.
								`,
							highlight: true,
							date: new TemporalDate(2025, 5, 4)
						},
						{
							name: 'Arrival',
							date: new TemporalDate(2025, 4, 8),
							thoughts: `The concepts around time and human-alien communication felt novel.`
						},
						{ name: 'Frances Ha', date: new TemporalDate(2025, 4, 7) },
						{ name: 'The Good Shepherd', date: new TemporalDate(2025, 4, 6) },
						{ name: 'Patriots Day', date: new TemporalDate(2025, 4, 6) },
						{ name: 'Marvelous and the Black Hole', date: new TemporalDate(2025, 4, 6) },
						{
							name: 'Always Be My Maybe',
							date: new TemporalPartialDate(2025, 4),
							thoughts: `The Keanu Reeves bit was so unexpected but very funny.`
						},
						{
							name: 'The Half of It',
							date: new TemporalDate(2025, 4, 5),
							thoughts: `I thought the starting premise was crazy but ultimately a welcome deviation on traditional roles of Asian kids.`
						},
						{
							name: 'Marriage Story',
							highlight: true,
							date: new TemporalDate(2025, 4, 5)
						},
						{ name: 'Unbroken', date: new TemporalDate(2025, 4, 5) },
						{
							name: 'Take Out',
							highlight: true,
							authors: ['Sean Baker', 'Shih-Ching Tsou'],
							thoughts: `A raw film from Baker and Tsou about Ming, an undocumented Chinese immigrant working 
							as a deliveryman in New York City during the early 2000s. I don’t know much about my father.
							Certainly Ming’s story is not my father’s. But I felt a certain lineage and bond to it all 
							as the child of Chinese immigrants who built a life through struggle at a Chinese restaurant in New York City.
							The early childhood sensations all flooded back to me — the cigarette smoke, the neon light, 
							the claustrophobic restaurant kitchen, the delivery bike, the torrential downpour.`,
							date: new TemporalDate(2025, 3, 30)
						},
						{ name: 'Closing Dynasty', date: new TemporalDate(2025, 3, 30), notes: 'On Netflix' },
						{
							name: 'To All the Boys: Always and Forever',
							date: new TemporalDate(2025, 3, 30),
							notes: 'On Netflix'
						},
						{
							name: 'To All the Boys: P.S. I Still Love You',
							date: new TemporalDate(2025, 3, 30),
							notes: 'On Netflix'
						},
						{ name: 'The Fault in Our Stars', date: new TemporalDate(2025, 3, 29) },
						{
							name: 'Before We Go',
							date: new TemporalDate(2025, 3, 26),
							notes: 'On YouTube'
						},
						{
							name: 'World War Z',
							date: new TemporalDate(2025, 3, 26),
							notes: 'On YouTube'
						},
						{
							name: 'White House Down',
							date: new TemporalDate(2025, 3, 26),
							notes: 'On YouTube'
						},
						{
							name: 'Sorry to Bother You',
							highlight: true,
							date: new TemporalPartialDate(2025, 3),
							thoughts: `To compromise on your values for (capitalist) gain is to sacrifice your identity. Sorry to Bother You delivers in a more extravagant and inflated way.`
						},
						{ name: 'Uncharted', date: new TemporalDate(2025, 3, 25) },
						{
							name: '127 Hours',
							highlight: true,
							date: new TemporalDate(2025, 3, 24),
							thoughts: `The exhaustion, utter frustration and scream-inducing horror of being helplessly stuck.`
						},
						{ name: 'Anora', highlight: true, date: new TemporalDate(2025, 3, 23) },
						{ name: 'Transformers: Dark of the Moon', date: new TemporalDate(2025, 3, 23) },
						{ name: 'Transformers: Revenge of the Fallen', date: new TemporalDate(2025, 3, 23) },
						{ name: 'Transformers', date: new TemporalDate(2025, 3, 23) },
						{ name: 'Pacific Rim', date: new TemporalDate(2025, 3, 19) },
						{ name: 'Battleship', date: new TemporalPartialDate(2025, 3) },
						{ name: 'The Help', date: new TemporalDate(2025, 3, 17) },
						{ name: 'The Cider House Rules', date: new TemporalPartialDate(2025, 3) },
						{ name: 'Life of Pi', date: new TemporalDate(2025, 3, 16) },
						{ name: 'Almost Famous', date: new TemporalDate(2025, 3, 16) },
						{
							name: 'Eternal Sunshine of the Spotless Mind',
							highlight: true,
							date: new TemporalDate(2025, 3, 16),
							thoughts: 'What an awful thing: to forget a past life. A lovely soundtrack.'
						},
						{ name: '42', highlight: true, date: new TemporalDate(2025, 3, 16) },
						{ name: 'The Breakfast Club', date: new TemporalDate(2025, 3, 15) },
						{
							name: 'Perfect Days',
							date: new TemporalDate(2025, 1, 19),
							notes: 'On YouTube',
							highlight: true,
							thoughts: `Sparse, pleasant. Splendid music. Is ambition the thief of joy?
								For Hirayama, stability and routine seem to be the key to a perfect day.`
						}
					]
				},
				{
					date: 2024,
					items: [
						{
							name: 'Interstellar',
							highlight: true,
							thoughts: `The right way to do time travel. And the saddest consequences.`
						},
						{ name: 'Midway' },
						{ name: 'The Hunger Games: Mockingjay — Part 2' },
						{ name: 'The Hunger Games: Mockingjay — Part 1' },
						{ name: 'The Hunger Games: Catching Fire' },
						{ name: 'The Hunger Games', highlight: true },
						{ name: '2012' },
						{ name: 'Legally Blonde' },
						{ name: 'Clueless' },
						{ name: 'Love in Taipei' },
						{ name: 'Bottoms', highlight: true, thoughts: 'Hilarious and absurd.' },
						{
							name: 'The Lego Movie',
							highlight: true,
							thoughts: `I grew up playing with Lego but it (and other forms of play) largely disappeared from my life as I focused more on schooling. 
							Maybe watching this made me want to play again. Or maybe I was already trying to play more when I watched the movie. 
							Regardless, I’m glad I watched.`
						},
						{
							name: 'Power Rangers',
							year: 2017,
							thoughts: `As someone who dressed as the Red Ranger one cold New York City Halloween, this did not revive my childhood love for the series.`
						},
						{ name: 'The Edge of Seventeen' },
						{ name: 'The Girl Next Door' },
						{ name: 'The Perks of Being a Wallflower', highlight: true },
						{ name: 'A Family Affair' },
						{
							name: 'Inside Out 2',
							date: new TemporalDate(2024, 6, 18),
							notes: 'At Landmark’s E Street Cinema'
						},
						{
							name: 'Dìdi',
							highlight: true,
							thoughts: `The story in Dìdi is not my story, but I did resonate with the dynamics of an angry, younger brother to older sister and mother.`
						},
						{
							name: 'Return to Seoul',
							date: new TemporalDate(2024, 1, 20),
							notes: 'At Michigan Theater'
						},
						{
							name: 'The Boy and the Heron',
							highlight: true,
							date: new TemporalDate(2024, 1, 14),
							notes: 'At State Theater'
						},
						{
							name: 'Past Lives',
							highlight: true,
							date: new TemporalDate(2024, 1, 13),
							thoughts: `Bittersweet, as past lives are?`
						}
					]
				},
				{
					date: 2023,
					items: [
						{ name: 'Midsommar', highlight: true, thoughts: 'Chilling. Great aesthetics.' },
						{
							name: 'Oppenheimer',
							highlight: true,
							date: new TemporalDate(2023, 7, 30),
							thoughts: `A power outage meant I did not see Barbie and Oppenheimer on the same day. 
							I appreciate that the film extends beyond Hiroshima and Nagasaki and addresses the brewing American 
							fear of communism and the Soviet Union before, during and immediately after the Second World War.
							I also enjoyed seeing Robert Downey Jr. in a post-Marvel role.`
						},
						{
							name: 'Barbie',
							highlight: true,
							date: new TemporalDate(2023, 7, 23),
							thoughts: `Pink pants. Fun time.`
						},
						{
							name: 'Spider-Man: Across the Spider-Verse',
							highlight: true,
							date: new TemporalDate(2023, 6, 13),
							notes: 'At State Theater',
							thoughts: `I loved the style of Across the Spider-Verse (and Into the Spider-Verse).
								I felt that animation allowed for very creative uses of cartoon physics, vibrant colors and visual effects.`
						},
						{ name: 'Everything Everywhere All at Once', highlight: true },
						{ name: 'The Grand Budapest Hotel', highlight: true },
						{ name: 'Knives Out' },
						{ name: 'Guardians of the Galaxy Vol. 3' },
						{ name: 'Ant-Man and the Wasp: Quantumania' }
					]
				},
				{
					date: 2022,
					items: [
						{ name: 'Drive My Car', date: new TemporalDate(2022, 2, 26) },
						{ name: 'Ender’s Game' }
					]
				},
				{
					date: 2020,
					items: [
						{
							name: 'Loving Vincent',
							highlight: true,
							thoughts: 'Really a gorgeous movie.',
							date: new TemporalDate(2020, 4, 3)
						}
					]
				},
				{
					date: 2018,
					items: [
						{ name: 'Spirited Away', highlight: true, date: new TemporalPartialDate(2018, 7) },
						{ name: 'The Godfather Part III', date: new TemporalPartialDate(2018, 7) },
						{
							name: 'The Godfather Part II',
							highlight: true,
							date: new TemporalPartialDate(2018, 7)
						},
						{ name: 'The Godfather', highlight: true, date: new TemporalPartialDate(2018, 7) },
						{
							name: 'Mean Girls',
							highlight: true,
							date: new TemporalDate(2018, 7, 29),
							thoughts: `I was told I was a mix of Regina and Janis in high school.`
						},
						{
							name: 'The Truman Show',
							highlight: true,
							thoughts: `The occasional paranoid thought crosses my mind that there are powerful forces conspiring against me or that I am in a simulation. And then I think back to this movie.`
						},
						{ name: 'Lawrence of Arabia' }
					]
				},
				{
					date: undefined,
					items: [
						{ name: 'The Martian' },
						{ name: 'Catch Me If You Can' },
						{ name: 'In The Heights' },
						{
							name: 'Whiplash',
							highlight: true,
							thoughts: `Jazz but also competition and abuse. There’s a good Adam Neely video about this that put the jazz parts into better perspective for me, as someone who only played jazz in middle school.`
						},
						{ name: 'World Trade Center' },
						{ name: 'Glory' },
						{ name: 'Bao' },
						{ name: '1917' },
						{ name: 'To All the Boys I’ve Loved Before' },
						{ name: 'Hidden Figures', thoughts: `Badass women! Also, what a cast.` },
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
						{
							name: 'Eternals',
							thoughts: `Where and how does this connect to the rest of the world?`
						},
						{ name: 'Shang-Chi and the Legend of the Ten Rings' },
						{ name: 'Black Widow' },
						{ name: 'Spider-Man: Far From Home' },
						{ name: 'Avengers: Endgame' },
						{ name: 'Captain Marvel' },
						{ name: 'Ant-Man and the Wasp' },
						{ name: 'Avengers: Infinity War' },
						{ name: 'Black Panther' },
						{ name: 'Thor: Ragnarok', thoughts: `I think Ragnarok had the right amount of humor.` },
						{ name: 'Spider-Man: Homecoming' },
						{ name: 'Guardians of the Galaxy Vol. 2' },
						{ name: 'Doctor Strange' },
						{ name: 'Captain America: Civil War' },
						{ name: 'Ant-Man' },
						{ name: 'Avengers: Age of Ultron' },
						{ name: 'Guardians of the Galaxy', thoughts: `Love the music.` },
						{ name: 'Captain America: The Winter Soldier' },
						{ name: 'Thor: The Dark World' },
						{ name: 'Iron Man 3' },
						{ name: 'The Avengers' },
						{ name: 'Captain America: The First Avenger', thoughts: `Just some Brooklyn boys.` },
						{ name: 'Thor' },
						{ name: 'Iron Man 2' },
						{ name: 'The Incredible Hulk' },
						{ name: 'Iron Man' },
						{ name: 'Jaws' },
						{ name: 'Breakfast at Tiffany’s' },
						{ name: 'All Quiet on the Western Front', year: 2022 },
						{ name: 'The Florida Project', highlight: true },
						{
							name: 'Dunkirk',
							thoughts: `I feel a lot of war movies don’t portray the very real ways civilians contributed. 
							I think the film did a great job showing the scale of the evacuation.`
						},
						{ name: 'Lady Bird' },
						{ name: 'Eighth Grade', highlight: true },
						{ name: 'Ferris Bueller’s Day Off' },
						{ name: 'Crazy Rich Asians', highlight: true },
						{ name: 'Taxi Driver', highlight: true },
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
						{ name: 'Downfall', highlight: true, thoughts: `The crash out scene is so well done.` },
						{ name: 'Fury' },
						{
							name: 'Saving Private Ryan',
							thoughts: `Memorable beginning beach scene and end with the tank, plane and pistol.`
						},
						{ name: 'Inglorious Basterds' },
						{ name: 'Full Metal Jacket' },
						{ name: 'Letters from Iwo Jima' },
						{ name: 'Flags of Our Fathers' },
						{ name: 'The Thin Red Line', year: 1998 },
						{ name: 'Hacksaw Ridge' },
						{ name: 'Tora! Tora! Tora', thoughts: `The better Pearl Harbor movie.` },
						{ name: 'Pearl Harbor' },
						{ name: 'Enemy at the Gates' },
						{ name: 'Patton' },
						{ name: 'Zulu' },
						{ name: 'The Karate Kid', year: 2010 },
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
					date: 2026,
					items: [
						{
							name: 'Severance',
							notes: 'On Apple TV',
							highlight: true,
							date: new TemporalPartialDate(2026, 1),
							thoughts: `The obvious question I asked myself is whether I would ever sever.
							Is it justifiable to work an objectionable job if you live a good life otherwise?
							Maybe I have to some extent already bifurcated my work and personal life.
							
							There was something sinister to me about Gemma Scout being Asian and morphing into
							all of these different innies with different outfits, that the Asian woman’s body is
							the one to be particularly experimented on, identified through ornamentation and changed.`
						},
						{
							name: 'Jet Lag: The Game',
							highlight: true,
							notes: 'I started watching in 2023. On YouTube and Nebula'
						}
					]
				},
				{
					date: 2025,
					items: [
						{ name: 'Abbott Elementary', notes: 'Yet to watch season 5. On Hulu' },
						{ name: 'Atlanta', highlight: true, notes: 'On Hulu' },
						{ name: 'You', notes: 'On Netflix' },
						{
							name: 'Veep',
							highlight: true,
							date: new TemporalPartialDate(2025, 2),
							notes: 'On HBO Max'
						}
					]
				},
				{
					date: 2024,
					items: [
						{ name: 'Masters of the Air' },
						{ name: 'Moral Orel', highlight: true },
						{ name: 'Quiet on Set: The Dark Side of Kids TV' }
					]
				},
				{
					date: 2023,
					items: [
						{ name: 'School Babysitters', notes: 'On Crunchyroll' },
						{
							name: 'American Born Chinese',
							notes: 'On Disney+',
							date: new TemporalPartialDate(2023, 6)
						},
						{ name: 'Atypical' }
					]
				},
				{ date: 2020, items: [{ name: 'Silicon Valley', highlight: true }] },
				{
					date: undefined,
					items: [
						{ name: 'Grand Army' },
						{
							name: 'Attack on Titan',
							notes: 'Yet to watch past the first part of season 4. On Hulu'
						},
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
						{
							name: 'The Thinking Game',
							authors: ['DeepMind'],
							highlight: true,
							url: 'https://www.youtube.com/watch?v=d95J8yzvjbQ'
						},
						{
							name: 'AlphaGo',
							authors: ['DeepMind'],
							highlight: true,
							url: 'https://www.youtube.com/watch?v=WXuK6gekU1Y'
						},
						{
							name: 'The Fallen of World War II',
							authors: ['Neil Halloran'],
							highlight: true,
							url: 'https://www.youtube.com/watch?v=DwKPFT-RioU'
						}
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
						{
							name: 'Rap Theory & Practice: an Introduction',
							authors: ['Lupe Fiasco'],
							url: 'https://www.youtube.com/watch?v=zBHRsYhYb-o'
						},
						{
							name: 'Web Without Walls',
							authors: ['Dan Abramov'],
							url: 'https://www.youtube.com/watch?v=F1sJW6nTP6E'
						},
						{
							name: 'Rethinking reactivity',
							authors: ['Rich Harris'],
							highlight: true,
							url: 'https://www.youtube.com/watch?v=AdNJ3fydeao'
						},
						{
							name: 'Computer, build me an app',
							authors: ['Rich Harris'],
							url: 'https://www.youtube.com/watch?v=qqt6YxAZoOc'
						},
						{
							name: 'The beauty of data visualization',
							authors: ['David McCandless'],
							url: 'https://www.youtube.com/watch?v=5Zg-C8AAIGg'
						},
						{
							name: 'What the heck is the event loop anyway?',
							authors: ['Philip Roberts'],
							url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ'
						},
						{
							name: 'Design is a Search Problem',
							authors: ['Mike Bostock'],
							highlight: true,
							url: 'https://www.youtube.com/watch?v=fThhbt23SGM'
						}
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
						{
							name: 'He’s dying. She’s pregnant',
							authors: ['The Washington Post'],
							url: 'https://wapo.st/3LijDEa'
						},
						{
							name: 'The Blast Effect',
							authors: ['The Washington Post'],
							url: 'https://wapo.st/4pYrs15'
						},
						{
							name: 'The Firefighter With O.C.D. and the Vaccine He Believed Would Kill Him',
							authors: ['The New York Times'],
							url: 'https://www.nytimes.com/2025/04/17/nyregion/firefighter-mental-health-ocd.html?unlocked_article_code=1.AFA.GV9H.ZmCU7wEc3HDd&smid=url-share'
						},
						{
							name: 'The Anti-Social Century',
							authors: ['The Atlantic'],
							url: 'https://www.theatlantic.com/magazine/archive/2025/02/american-loneliness-personality-politics/681091/'
						},
						{
							name: 'The Agony of Texting With Men',
							authors: ['The Atlantic'],
							url: 'https://www.theatlantic.com/family/archive/2025/01/men-texting-men-loneliness/681076/'
						},
						{
							name: 'The Militia and the Mole',
							authors: ['ProPublica'],
							url: 'https://www.propublica.org/article/ap3-oath-keepers-militia-mole'
						},
						{
							name: 'The Good Whale',
							authors: ['The New York Times'],
							url: 'https://www.nytimes.com/interactive/2024/podcasts/serial-good-whale.html'
						},
						{
							name: 'The Deserter',
							authors: ['The New York Times'],
							url: 'https://www.nytimes.com/2024/09/21/podcasts/russia-ukraine-deserter-audio.html'
						},
						{
							name: 'Searching for Maura',
							authors: ['The Washington Post'],
							url: 'https://wapo.st/3N6ObJz'
						},
						{
							name: 'More than 1,800 congressmen once enslaved Black people. This is who they were, and how they shaped the nation.',
							authors: ['The Washington Post'],
							url: 'https://wapo.st/4jdw0hk'
						},
						{
							name: 'Machine Bias',
							authors: ['ProPublica'],
							url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing'
						},
						{
							name: 'How does ‘Hamilton,’ the non stop, hip-hop Broadway sensation tap rap’s master rhymes to blur musical lines?',
							authors: ['The Wall Street Journal'],
							thoughts: `This page unfortunately no longer works due to digital decay, 
							but I remember spending a lot of time typing my own (in hindsight, nonsensical) 
							multisyllabic rhyme schemes into the interactive element at the end of the page. 
							I often attribute the start of my interest in pursuing a journalism career to 
							interfacing with COVID-19 coverage in 2020, but perhaps I should really be 
							attributing this piece.`,
							url: 'https://graphics.wsj.com/hamilton/'
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
						{
							name: 'Last Boys at the Beginning of History',
							authors: ['Mana Afsari'],
							url: 'https://thepointmag.com/politics/last-boys-at-the-beginning-of-history/'
						},
						{
							name: 'ChatGPT Is a Gimmick',
							authors: ['Jonathan Malesic'],
							url: 'https://hedgehogreview.com/web-features/thr/posts/chatgpt-is-a-gimmick'
						},
						{
							name: 'The Worst Magazine In America',
							authors: ['Nathan J. Robinson'],
							url: 'https://www.currentaffairs.org/news/the-worst-magazine-in-america'
						},
						{
							name: 'AI: The New Aesthetics of Fascism',
							authors: ['Gareth Watkins'],
							url: 'https://newsocialist.org.uk/transmissions/ai-the-new-aesthetics-of-fascism/'
						},
						{
							name: 'Surely You’re a Creep, Mr. Feynman',
							authors: ['Leila McNeill'],
							url: 'https://thebaffler.com/outbursts/surely-youre-a-creep-mr-feynman-mcneill'
						}
					]
				},
				{
					date: 2024,
					items: [
						{
							name: 'The “Blob” Is Furious About Gaza. But That’s Not Enough.',
							authors: ['Josef Burton'],
							url: 'https://www.thenation.com/article/world/blob-gaza-biden-blinken/'
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

{#snippet dateCompleted(date: TemporalDate | TemporalPartialDate, category: string)}
	{@const preposition = date.partial ? 'in' : 'on'}
	<div class="extra date">
		{#if category === 'Books' || category === 'Shows'}Finished {preposition}
		{:else if category === 'Theater' || category === 'Film'}Watched {preposition}
		{/if}
		{date}
	</div>
{/snippet}

<main>
	<hgroup>
		<h1><a href="/">Eric Lau</a></h1>
		<p>My consumption, incomplete.</p>
	</hgroup>
	<div style="display: grid; gap: 1.25rem;">
		{#each data as { category, lists }}
			<section id={category.toLowerCase()}>
				<hgroup>
					<h2>{category}</h2>
					<b class="count">{lists.flatMap((d) => d.items).length}</b>
				</hgroup>
				<div style="display: grid; gap: 0.75rem;">
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
									{@const title = `${item.name}${item.year === undefined ? '' : ` (${item.year})`}`}
									<li>
										{#if !item.thoughts}
											<div class="list-content">
												<div class:highlight={item.highlight}>
													{#if item.url}
														<a href={item.url} target="_blank">{title}</a>
													{:else}
														<span>{title}</span>
													{/if}
												</div>
												{#if item.authors}
													<div class="extra authors">
														by {@render authors(item.authors)}
													</div>
												{/if}
												<div>
													{#if item.date}
														{@render dateCompleted(item.date, category)}
													{/if}
													{#if item.notes}
														<div class="extra note">{item.notes}</div>
													{/if}
												</div>
											</div>
										{:else}
											<div class="list-content">
												<details>
													<summary>
														<div class="list-content">
															<div class:highlight={item.highlight}>
																{#if item.url}
																	<a href={item.url} target="_blank">{title}</a>
																{:else}
																	<span>{title}</span>
																{/if}
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
													</div>
												</details>
												<div>
													{#if item.date}
														{@render dateCompleted(item.date, category)}
													{/if}
													{#if item.notes}
														<div class="extra note">{item.notes}</div>
													{/if}
												</div>
											</div>
										{/if}
									</li>
								{/each}
							</ul>
						</section>
					{/each}
				</div>
			</section>
		{/each}
	</div>
	<nav>
		<div style="font-family: var(--font-sans); font-size: 0.925rem;">
			<div style="display: inline-flex; column-gap: 0.5rem; row-gap: 0.375rem;">
				<div style="flex-shrink: 0;">Jump to:</div>
				<div style="display: inline-flex; column-gap: 0.375rem; row-gap: 0.25rem; flex-wrap: wrap;">
					{#each data as { category }}<a href="#{category.toLowerCase()}">{category}</a>{/each}
				</div>
			</div>
		</div>
	</nav>
</main>

<style>
	main {
		display: grid;
		gap: 1.25rem;

		max-width: 75ch;
		width: 100%;
		margin: auto;

		padding: 0.25rem 0.75rem;
		box-sizing: border-box;
		position: relative;
	}

	nav {
		position: sticky;
		bottom: 0;
		z-index: 1;
		background: var(--color-secondary);
		padding: 8px 0;
		box-sizing: content-box;
	}

	main > div > section {
		position: relative;
		display: grid;
		gap: 0.375rem;
	}

	main section section {
		display: grid;
		gap: 0.5rem;
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

	p {
		font-size: 1.25rem;
		line-height: 1.4375rem;
		margin: 0;
	}

	ul {
		margin: 0;
		text-wrap: pretty;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		line-height: 1.4375rem;
		list-style-type: none;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.5rem;
	}

	li:not(:has(details)) {
		list-style-type: '•  ';
	}

	details[open],
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
		text-wrap: pretty;
	}

	li .note,
	li .date {
		font-size: 0.825rem;
	}

	li .authors {
		font-size: 1rem;
	}

	li .highlight span,
	li .highlight a {
		background-color: var(--color-highlight);
		color: var(--color-secondary);
		padding: 0 0.25rem;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}

	small {
		font-size: 1rem;
	}

	a {
		color: var(--color-primary);
		text-decoration: none;
	}

	li a,
	nav a {
		text-decoration-line: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
		text-decoration-color: var(--color-primary);
	}

	li .highlight a {
		text-underline-offset: 2px;
		text-decoration-color: var(--color-secondary);
	}

	nav a {
		text-underline-offset: 4px;
	}

	.count {
		font-family: sans-serif;
	}

	h1 a {
		color: var(--color-headline);
	}
</style>
