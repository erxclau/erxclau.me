<script lang="ts">
	import type { Work } from '$lib/types';

	export let item: Work;
</script>

<figure class="work">
	<a href={item.link}>
		{#if item.media.type === 'image'}
			<enhanced:img
				class="media"
				src={item.media.source.default}
				alt={item.media.alt}
				loading={item.lazy ? 'lazy' : undefined}
			></enhanced:img>
		{:else if item.media.type === 'video'}
			<video autoplay loop playsinline muted class="media">
				<source src={item.media.source} />
			</video>
		{/if}
	</a>
	<figcaption>
		{item.name}
		<p>{@html item.description}</p>
	</figcaption>
</figure>

<style>
	figure.work {
		margin: 0;
		display: grid;
		gap: 0.375rem;
	}

	.work figcaption {
		font-family: var(--font-sans);
		font-weight: 600;
		font-size: 1.25rem;
		letter-spacing: -0.0375rem;
		text-wrap: balance;
	}

	.work p {
		font-family: var(--font-serif);
		font-size: 1.025rem;
		line-height: 1.375rem;
		letter-spacing: 0rem;
		margin: 0;
		margin-top: 0.25rem;
		font-weight: 400;
	}

	.work .media {
		display: block;
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: unset;
		border-radius: 5px;
		aspect-ratio: 1440 / 710;
	}

	.work .media:hover,
	.work .media:focus {
		filter: brightness(1.125);
	}
</style>
