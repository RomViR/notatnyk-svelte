<script>
	import { data } from '$lib/store';
	import SelectObj from '$lib/SelectObj.svelte';

	export let container;

	let newRef = {};
	$: disabledAdd = !newRef.name || !newRef.refId;

	function clickAddRef() {
		if (disabledAdd) return;

		const refId = data.nextId(container);

		container[refId] = { id: refId, ...newRef };
		newRef = {};
	}
</script>

<section>
	<header>References:</header>
	{#each Object.values(container) as ref}
		<p>
			<input type="text" bind:value={ref.name} />:
			<SelectObj container={$data.notes} bind:bindTo={ref.refId} optValue="id" optDisplay="name" />
			<button on:click={() => data.deleteRef(container, ref.id)}>Remove</button>
		</p>
	{/each}

	<p>
		<label
			>reference name:
			<input type="text" bind:value={newRef.name} />
		</label>
		<label for="ref-add-select"
			>reference value:
			<SelectObj
				container={$data.notes}
				bind:bindTo={newRef.refId}
				optValue="id"
				optDisplay="name"
				id="ref-add-select"
			>
				<option value="">Select a note to reference</option>
			</SelectObj>
		</label>
		<button on:click={clickAddRef} disabled={disabledAdd}>Add</button>
	</p>
</section>
