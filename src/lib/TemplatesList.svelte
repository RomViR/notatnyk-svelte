<script>
	import { data } from '$lib/store';
	import TemplateSummary from '$lib/TemplateSummary.svelte';
</script>

{#if !Object.keys($data.templates)}
	<p>There are no templates here yet</p>
{:else}
	<ul>
		{#each Object.values($data.templates) as template}
			<TemplateSummary {template} />
		{/each}
	</ul>
{/if}
