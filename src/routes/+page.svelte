<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import BeerCard from '$lib/components/BeerCard.svelte';
	import Map from '$lib/components/Map.svelte';
	import PubCard from '$lib/components/PubCard.svelte';
</script>

<div class="w-full h-full flex flex-col items-stretch">
	<Map />
	<Drawer>
		<div class="w-full flex flex-col">
			<Carousel title="Beers" url="beer">
				{#each new Array(6) as _}
					<BeerCard />
				{/each}
			</Carousel>
			<Carousel title="Pubs" url="pub">
				{#each Array(10) as _}
					<PubCard />
				{/each}
			</Carousel>
		</div>
	</Drawer>
</div>

<style lang="postcss">
</style>
