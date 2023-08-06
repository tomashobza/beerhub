<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { XIcon, ShareIcon } from '@rgossiaux/svelte-heroicons/outline';

	$: pub_id = $page.params.pub_id;
</script>

<div class="flex flex-col p-6 gap-6">
	<div class="flex flex-row-reverse items-start justify-between">
		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div on:click={() => goto('/')} class="self-end p-2 pr-0 w-8 cursor-pointer">
			<XIcon />
		</div>
		{#if pub_id}
			<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
			<div on:click={() => alert(`share ${pub_id}`)} class="self-end p-2 pr-0 w-8 cursor-pointer">
				<ShareIcon />
			</div>
		{/if}
	</div>

	<slot />
</div>
