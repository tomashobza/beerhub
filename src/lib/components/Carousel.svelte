<script lang="ts">
	import { goto } from '$app/navigation';
	import MagGlass from './MagGlass.svelte';

	export let title: string;
	export let url: string;
	export let hasPadding: boolean = true;
</script>

<div class="flex flex-col items-start w-full">
	<div class="flex flex-row items-center justify-between w-full" class:hasPadding>
		<h1>{title}</h1>
		<button
			class="w-8 p-2 rounded-md hover:bg-gray-100 transition-all duration-300 cursor-pointer"
			on:click={() => goto(`/${url}`)}
		>
			<MagGlass />
		</button>
	</div>
	<div class="w-full overflow-auto flex flex-row gap-4 py-4" class:hasPadding>
		<slot />
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-xl font-bold;
	}

	.hasPadding {
		@apply px-4;
	}
</style>
