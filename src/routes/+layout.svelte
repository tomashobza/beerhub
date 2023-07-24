<script>
	import { fly } from 'svelte/transition';
	import '../app.css';

	export let data;
</script>

{#key data.url}
	<div class="w-full h-full" in:fly={{ x: 200 }}>
		<slot />
	</div>
{/key}
