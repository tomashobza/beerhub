<script>
	import { goto } from '$app/navigation';
	import BeerCard from './BeerCard.svelte';
	import MagGlass from './MagGlass.svelte';
</script>

<div class="flex flex-col items-start w-full">
	<div class="flex flex-row items-center justify-between w-full">
		<h1>Beers</h1>
		<button
			class="w-8 p-2 rounded-md hover:bg-gray-100 transition-all duration-300 cursor-pointer"
			on:click={() => goto('/beer')}
		>
			<MagGlass />
		</button>
	</div>
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
