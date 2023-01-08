<script>
	import { data } from '$lib/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	export let template;
</script>

<li>
	{template.name}
	<button on:click={() => data.deleteTemplate(template.id)}>Remove</button>
	<button on:click={() => goto(`${base}/template/${template.id}`)}>Edit</button>
</li>
