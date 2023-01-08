<script>
	import { onMount } from 'svelte';
	import { data } from '$lib/store';

	let loaded = false;

	onMount(async () => {
		await data.pull();
		loaded = true;
	});
</script>

<svelte:head>
	<title>Notatnyk</title>
</svelte:head>

<header>
	<a href="/">Notes</a>
	<a href="/templates">Templates</a>
	<button on:click={data.persist} disabled={!loaded}>Persist data</button>
</header>
<br />

{#if loaded}
	<slot />
{:else}
	<p>Loading...</p>
{/if}
