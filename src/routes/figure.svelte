<script lang="ts">
	import type { Work } from '$lib/types';

	interface Props {
		item: Work;
	}

	let { item }: Props = $props();
</script>

<figure class="work">
	<a href={item.link}>
		{#if item.media.type === 'image'}
			<enhanced:img
				class="media"
				src={item.media.source.default}
				alt={item.media.alt}
				loading={item.media.eager ? 'eager' : 'lazy'}
			></enhanced:img>
		{:else if item.media.type === 'url'}
			<enhanced:img
				class="media"
				src={item.media.source}
				alt={item.media.alt}
				loading={item.media.eager ? 'eager' : 'lazy'}
			></enhanced:img>
		{/if}
	</a>
	<figcaption>
		<a href={item.link}>{item.name}</a>
		{#if item.description}
			<p>{@html item.description}</p>
		{/if}
	</figcaption>
</figure>

<style>
	figure.work {
		margin: 0;
		display: grid;
		gap: 0.375rem;
	}

	.work figcaption {
		font-family: var(--font-serif);
		font-weight: 600;
		font-size: 1.25rem;
		letter-spacing: 0rem;
		text-wrap: balance;
	}

	.work figcaption a {
		text-decoration: none;
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
