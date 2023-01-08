<script>
	import { data } from '$lib/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	export let note;
</script>

<li>
	{note.name}
	<button on:click={() => data.deleteNote(note.id)}>Remove</button>
	<button on:click={() => goto(`${base}/note/${note.id}`)}>Edit</button>
</li>
