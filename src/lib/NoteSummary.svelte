<script>
	import { data } from '$lib/store';
	import { goto } from '$app/navigation';
	export let note;
</script>

<li>
	{note.name}
	<button on:click={() => data.deleteNote(note.id)}>Remove</button>
	<button on:click={() => goto(`/note/${note.id}`)}>Edit</button>
</li>
