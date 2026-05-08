<main>
	<section>
		<hgroup>
			<h1><a href="/">Eric Lau</a></h1>
			<p>My commonplace</p>
		</hgroup>

		<ul>
			<li>
				<figure>
					<blockquote>You’re not a visionary, you’re a vendor.</blockquote>
					<figcaption>
						Miranda Priestly <cite>The Devil Wears Prada 2</cite>
					</figcaption>
				</figure>
			</li>
			<li>
				<figure>
					<blockquote>
						It’s only a paper moon. Just as phony as it can be. But it wouldn’t be make-believe, if
						you believed in me.
					</blockquote>
					<figcaption>
						Blanche DuBois <cite>A Streetcar Named Desire</cite>
					</figcaption>
				</figure>
			</li>
			<li>
				<figure>
					<blockquote>I don’t want realism. I want magic!</blockquote>
					<figcaption>
						Blanche DuBois <cite>A Streetcar Named Desire</cite>
					</figcaption>
				</figure>
			</li>
			<li>
				<figure>
					<blockquote>
						People should be able to say how they feel — how they really feel, not, you know, some
						words that some strangers put in their mouths. Words like “love” that don’t mean
						anything. There’s enough bullshit in the world without my help.
					</blockquote>
					<figcaption>
						Tom Hansen <cite>(500) Days of Summer</cite>
					</figcaption>
				</figure>
			</li>
		</ul>
	</section>
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
		gap: 2rem;
	}

	figure {
		margin: 0;
		font-family: var(--font-serif);
		display: grid;
		gap: 0.625rem;
	}

	blockquote {
		font-size: 1.5rem;
		position: relative;
		margin: 0 2rem;
		text-wrap: pretty;
	}

	blockquote::before {
		content: '“';
		position: absolute;
		top: -0.5ch;
		left: -1.5ch;
		font-size: 2rem;
		color: var(--color-highlight);
	}

	figcaption {
		text-align: end;
		font-size: 1.125rem;
		margin-inline: 2rem;
		color: var(--color-neutral);
	}

	cite {
		display: block;
	}

	h1 {
		margin: 0;
		font-family: var(--font-headline);
		letter-spacing: 0.0625ch;
		font-size: 3rem;
		font-weight: 300;
	}

	h1 a {
		color: var(--color-headline);
		text-decoration: none;
	}

	p {
		font-size: 1.25rem;
		line-height: 1.4375rem;
		margin: 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		display: grid;
		gap: 2rem;
	}
</style>
