<script lang="ts">
	import { page } from '$app/stores';
	import Carousel from '$lib/components/Carousel.svelte';
	import PubCard from '$lib/components/PubCard.svelte';

	$: beer_id = $page.params.beer_id;
</script>

<div
	style="background-image: url('https://www.pizzascuola.cz/wp-content/uploads/2018/06/IMG_9117-1.jpg')"
	class="w-full h-[25vh] bg-cover bg-center rounded-lg bg-gray-100"
/>

<div class="flex flex-row items-center gap-2">
	<h1 class="font-semibold text-xl">Pilsner Urquel</h1>
	<div class="rounded bg-slate-200 text-slate-500 px-1 font-semibold">10°</div>
	<div class="flex-grow" />
	<div class="rounded bg-slate-200 text-slate-500 px-2 py-1 text-sm">
		Rank: <span class="font-semibold">420</span>
	</div>
</div>
<div class="w-full bg-slate-200 rounded-lg p-4 px-1 grid grid-cols-3 stats">
	<div class="flex flex-col items-center gap-2 flex-grow">
		<div class="text-4xl font-mono">20</div>
		<div class="text-slate-500 text-xs">Bitterness</div>
	</div>
	<div class="flex flex-col items-center gap-2 flex-grow">
		<div class="text-4xl font-mono">69</div>
		<div class="text-slate-500 text-xs">FUI</div>
	</div>
	<div class="flex flex-col items-center gap-2 flex-grow">
		<div class="text-4xl font-mono">5/5</div>
		<div class="text-slate-500 text-xs">Rating</div>
	</div>
</div>
<Carousel title="Available at" hasPadding={false} url="pub">
	{#each Array(10) as _}
		<PubCard />
	{/each}
</Carousel>

<style lang="postcss">
	.stats > *:not(:last-child) {
		@apply border-r border-slate-700 border-dashed;
	}
</style>
