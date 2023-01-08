<script>
	import { data } from '$lib/store';
	import { goto } from '$app/navigation';
	import SelectObj from '$lib/SelectObj.svelte';
	import { base } from '$app/paths';

	const templates = $data.templates;
	let selectedTemplate;
</script>

<p>
	<SelectObj container={templates} bind:bindTo={selectedTemplate} optValue="id" optDisplay="name">
		<option value="">Free format</option>
	</SelectObj>
	<button on:click={goto(`${base}/note/0/${selectedTemplate}`)}>Create a note</button>
</p>
