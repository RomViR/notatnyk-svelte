<script>
	import { data } from '$lib/store';
	import NotesList from '$lib/NotesList.svelte';
	import NotesActions from '$lib/NotesActions.svelte';
</script>

<NotesActions />
<NotesList notes={$data.notes} />
