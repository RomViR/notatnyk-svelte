<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { data } from '$lib/store';
	import FieldList from '$lib/FieldList.svelte';
	import RefList from '$lib/RefList.svelte';
	import { base } from '$app/paths';

	const id = $page.params.id;
	const template = id ? $data.templates[id] : data.nullTemplate();
	const isNew = !template.id;

	function clickCreateTemplate() {
		if (!template.name) return;

		data.saveTemplate(template);

		goto(`${base}/templates`);
	}
</script>

<svelte:head>
	<title>Notatnyk | {isNew ? 'Create' : 'Edit'} Template</title>
</svelte:head>
<hr />
{#if !isNew}
	<p>id: {template.id}</p>
{/if}

<p>
	<label
		>Template name:
		<input type="text" bind:value={template.name} />
	</label>
</p>
<hr />
<FieldList container={template.fields} />
<hr />
<RefList container={template.refs} />
<hr />
{#if isNew}
	<button on:click={clickCreateTemplate}>Create</button>
{/if}
