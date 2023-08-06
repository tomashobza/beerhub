<script lang="ts">
	import { page } from '$app/stores';

	$: beer_id = $page.params.beer_id;
</script>

<div
	style="background-image: url('https://www.pizzascuola.cz/wp-content/uploads/2018/06/IMG_9117-1.jpg')"
	class="w-full h-[25vh] bg-cover bg-center rounded-lg bg-gray-100"
/>

<div class="flex flex-row items-center gap-2">
	<div class="font-semibold text-xl">Pilsner Urquel</div>
	<div class="rounded bg-slate-300 text-slate-600 px-1 font-semibold">10°</div>
	<div class="flex-grow" />
	<div class="rounded bg-slate-300 text-slate-600 px-2 py-1 text-sm">
		Rank: <span class="font-semibold">420</span>
	</div>
</div>
