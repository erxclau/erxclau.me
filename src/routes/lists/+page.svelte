<script lang="ts">
	import type { Category } from '$lib/types.js';
	let { data } = $props();

	const categories: Array<Category> = [
		'Books',
		'Film',
		'Shows',
		'Documentaries',
		'Talks',
		'Papers',
		'Journalism',
		'Essays'
	];

	let dialog = $state<HTMLDialogElement>();

	const currentYear = new Date().getFullYear();
</script>

{#snippet list(name: string | number, section: Array<string>, skipHeading?: boolean)}
	<section>
		{#if !skipHeading}
			<hgroup>
				<h3>{name}</h3>
				<small>{section.length}</small>
			</hgroup>
		{/if}
		<ul>
			{#each section as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
{/snippet}

<main>
	<hgroup>
		<h1><a href="/">Eric Lau</a></h1>
		<p>My consumption, incomplete.</p>
	</hgroup>
	{#if data.admin}
		<button
			style="width: fit-content; background-color: var(--color-text); color: var(--color-background); border: none; font-family: var(--font-sans); font-size: 0.875rem; padding: 0.125rem 0.5rem; font-weight: bold"
			onclick={() => {
				if (dialog) {
					dialog.showModal();
				}
			}}>Add</button
		>
		<dialog
			bind:this={dialog}
			style="background-color: var(--color-background); border: none; width: 60ch;"
		>
			<form method="POST" style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
				<div style="display: flex; flex-direction: column; gap: 0.25rem;">
					<label
						for="category"
						style="color: var(--color-text); font-family: var(--font-sans); font-weight: bold;"
						>Category</label
					>
					<select name="category" id="category" style="font-size: 1rem">
						<option></option>
						{#each categories as category}
							<option value={category}>{category}</option>
						{/each}
					</select>
				</div>
				<div style="display: flex; flex-direction: column; gap: 0.25rem;">
					<label
						for="title"
						style="color: var(--color-text); font-family: var(--font-sans); font-weight: bold;"
						>Title</label
					>
					<input
						type="text"
						name="title"
						id="title"
						required
						style="font-size: 1rem; border-radius: 5px; border: none; padding: 0.125rem 0.375rem;"
					/>
				</div>
				<div style="display: flex; flex-direction: column; gap: 0.25rem;">
					<label
						for="attribution"
						style="color: var(--color-text); font-family: var(--font-sans); font-weight: bold;"
						>Attribution</label
					>
					<input
						type="text"
						name="attribution"
						id="attribution"
						style="font-size: 1rem; border-radius: 5px; border: none; padding: 0.125rem 0.375rem;"
					/>
				</div>
				<div style="display: flex; flex-direction: column; gap: 0.25rem;">
					<label
						for="year"
						style="color: var(--color-text); font-family: var(--font-sans); font-weight: bold;"
						>Year</label
					>
					<input
						type="number"
						name="year"
						id="year"
						min={2002}
						max={currentYear}
						value={currentYear}
						style="font-size: 1rem; border-radius: 5px; border: none; padding: 0.125rem 0.375rem;"
					/>
				</div>
				<div style="display: flex; gap: 0.25rem;">
					<label
						for="current"
						style="color: var(--color-text); font-family: var(--font-sans); font-weight: bold;"
						>Current</label
					>
					<input type="checkbox" name="current" id="current" />
				</div>
				<button type="submit" style="width: fit-content">Add</button>
			</form>
		</dialog>
	{/if}
	{#each categories as category}
		{@const lists = data.consumption.get(category)}
		{#if lists}
			{@const current = lists.get('Current')}
			{@const before = lists.get(null)}
			<section id={category.toLowerCase()}>
				<hgroup>
					<h2>{category}</h2>
					<b
						>{Array.from(lists.values())
							.map((list) => list.length)
							.reduce((prev, curr) => prev + curr, 0)}</b
					>
				</hgroup>
				{#if current}
					{@render list('Current', current)}
				{/if}

				{#each Array.from(lists) as [date, entries]}
					{#if !(date === 'Current' || date === null)}
						{@render list(date, entries)}
					{/if}
				{/each}

				{#if before}
					{@render list('Before', before, lists.size === 1)}
				{/if}
			</section>
		{/if}
	{/each}
</main>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.75);
	}

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
		text-wrap: pretty;
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
