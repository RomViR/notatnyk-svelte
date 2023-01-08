<script>
	import { data } from '$lib/store';

	export let container;

	let newField = {};
	$: disabledAdd = !newField.name;

	function clickAddField() {
		if (disabledAdd) return;

		const fieldId = data.nextId(container);

		container[fieldId] = { id: fieldId, ...newField };
		newField = {};
	}
</script>

<section>
	<header>Fields:</header>
	{#each Object.values(container) as field}
		<p>
			<input type="text" bind:value={field.name} />:
			<input type="text" bind:value={field.value} />
		</p>
	{/each}

	<p>
		<label
			>field name:
			<input type="text" bind:value={newField.name} />
		</label>
		<label
			>field value:
			<input type="text" bind:value={newField.value} />
		</label>
		<button on:click={clickAddField} disabled={disabledAdd}>Add</button>
	</p>
</section>
