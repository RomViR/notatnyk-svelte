<script>
	import NoteSummary from '$lib/NoteSummary.svelte';
	export let notes;
</script>

{#if !Object.keys(notes)}
	<p>There are no notes here yet</p>
{:else}
	<ul>
		{#each Object.values(notes) as note}
			<NoteSummary {note} />
		{/each}
	</ul>
{/if}
