<script>
	import BeerCard from './BeerCard.svelte';
</script>

<div class="flex flex-col items-start">
	<h1>Beers</h1>
	<div class="w-full overflow-auto flex flex-row gap-4 py-4">
		{#each new Array(6) as _}
			<BeerCard />
		{/each}
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-xl font-bold;
	}
</style>
