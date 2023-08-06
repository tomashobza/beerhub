<script>
	import { goto } from '$app/navigation';
	import Checkmark from './Checkmark.svelte';
	import Star from './Star.svelte';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="relative flex-shrink-0 h-[10rem] w-[7rem] bg-white transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-end rounded-md py-2 gap-1 px-2 bg-center bg-cover overflow-hidden cursor-pointer"
	style="background-image: url('https://lh3.googleusercontent.com/p/AF1QipOX4XUH8C0-QtzZZU7U2M11a2Q-oaancnY6xcHG=s1360-w1360-h1020')"
	on:click={() => goto('/pub/asb')}
>
	<div
		class="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#00000039] to-black"
	/>
	<!-- <div class="z-10 flex-grow self-end">
		<div class="bg-white rounded p-1 pl-[0.4rem] text-sm flex flex-row items-center gap-1">
			<div class="">4.3</div>
			<div class="w-4 text-yellow-300">
				<Star />
			</div>
		</div>
	</div> -->
	<div class="flex flex-row w-full gap-1 items-end z-10 text-white">
		<div class="font-semibold text-sm">Trojka</div>
		<!-- <div class="text-green-400"><Checkmark /></div> -->
	</div>
</div>
