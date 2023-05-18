<script>
	import { historicalDataStore } from '$lib/historicalDataStore.js';
	import { onMount } from 'svelte';
	import LineChart from '$lib/components/LineChart.svelte';
</script>

<!-- Custom Svelte LineChart -->
<LineChart />

<h1>Nodes Page</h1>
{#if $historicalDataStore.length === 0}
	<p>loading...</p>
{:else}
	{console.log($historicalDataStore)}
	{#each $historicalDataStore as node}
		<p>{node[0]}</p>
	{/each}
{/if}
