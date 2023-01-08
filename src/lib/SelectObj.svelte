<script>
	export let container;
	export let bindTo;
	export let optValue;
	export let optDisplay;
	export let id = '';
</script>

<select bind:value={bindTo} {id}>
	<slot />
	{#each Object.values(container) as item}
		<option value={item[optValue]}>{item[optDisplay]}</option>
	{/each}
</select>
