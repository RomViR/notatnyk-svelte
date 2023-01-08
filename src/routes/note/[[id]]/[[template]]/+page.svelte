<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { data } from '$lib/store';
	import FieldList from '$lib/FieldList.svelte';
	import RefList from '$lib/RefList.svelte';
	import { base } from '$app/paths';

	const id = +$page.params.id;
	const isNew = id === 0;
	let note;

	if (!isNew) {
		note = $data.notes[id];
	} else {
		const templateId = $page.params.template;
		const template = templateId ? $data.templates[templateId] : null;
		note = data.noteFromTemplate(template);
	}

	function clickCreateNote() {
		if (!note.name) return;

		data.saveNote(note);

		goto(base);
	}
</script>

<svelte:head>
	<title>Notatnyk | {isNew ? 'Create' : 'Edit'} Note</title>
</svelte:head>
<hr />
{#if !isNew}
	<p>id: {note.id}</p>
{/if}

<p>
	<label
		>Note name:
		<input type="text" bind:value={note.name} />
	</label>
</p>
<hr />
<FieldList container={note.fields} />
<hr />
<RefList container={note.refs} />
<hr />
{#if isNew}
	<button on:click={clickCreateNote}>Create</button>
{/if}
