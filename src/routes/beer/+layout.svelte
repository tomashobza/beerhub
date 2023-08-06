<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { XIcon } from '@rgossiaux/svelte-heroicons/outline';
</script>

<div class="flex flex-col p-6 gap-6">
	<div on:click={() => goto('/')} class="self-end p-2 pr-0 w-8 cursor-pointer">
		<XIcon />
	</div>

	<slot />
</div>
