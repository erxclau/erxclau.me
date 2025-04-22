<script>
	import { enhance } from '$app/forms';
</script>

<main>
	<form method="POST" use:enhance>
		<input type="password" name="password" id="password" placeholder="Password" required />
	</form>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		min-height: 100vh;
		min-height: 100svh;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	input {
		background-color: var(--color-background);
		color: var(--color-text);
		font-family: var(--font-sans);
		font-size: 1.25rem;
		border: 1px dashed var(--color-text);
		border-radius: 5px;
		padding: 0.375rem;
	}
</style>
