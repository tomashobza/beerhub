<script>
	import { goto } from '$app/navigation';
	import Checkmark from './Checkmark.svelte';
	import Star from './Star.svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="relative flex-shrink-0 h-[10rem] w-[7rem] bg-white shadow-md flex flex-col justify-end rounded-md py-2 gap-1 px-2 bg-center bg-cover overflow-hidden"
	style="background-image: url('https://www.pizzascuola.cz/wp-content/uploads/2018/06/IMG_9117-1.jpg')"
	on:click={() => goto('/beer/asb')}
>
	<div
		class="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#00000039] to-black"
	/>
	<div class="z-10 flex-grow self-end">
		<div class="bg-white rounded p-1 pl-[0.4rem] text-sm flex flex-row items-center gap-1">
			<div class="">4.3</div>
			<div class="w-4 text-yellow-300">
				<Star />
			</div>
		</div>
	</div>
	<div class="flex flex-row w-full gap-1 items-end z-10 text-white">
		<div class="font-semibold text-sm">Pilsner Urquel</div>
		<div class="text-green-400"><Checkmark /></div>
	</div>
</div>
