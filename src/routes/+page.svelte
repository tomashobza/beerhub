<script>
	import Carousel from '$lib/components/BeerCarousel.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import Map from '$lib/components/Map.svelte';
</script>

<div class="w-full h-full flex flex-col items-stretch">
	<Map />
	<Drawer>
		<div class="w-full flex flex-col px-4">
			<Carousel />
		</div>
	</Drawer>
</div>

<style lang="postcss">
</style>
