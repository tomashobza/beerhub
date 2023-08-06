<script>
	import { fly } from 'svelte/transition';
	import '../app.css';
	import { Toaster } from 'svelte-french-toast';

	export let data;
</script>

<div class="w-full h-full flex flex-col items-center justify-center p-0 sm:p-6">
	<div class="w-full h-full max-w-[25rem] sm:rounded-xl overflow-hidden shadow-lg">
		{#key data.url}
			<div class="w-full h-full" in:fly={{ x: data?.url == '/' ? -200 : 200 }}>
				<slot />
			</div>
		{/key}
	</div>
</div>
<Toaster />
