<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
</script>

<button on:click={() => goto(`${base}/template`)}>Create a template</button>
