<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<button on:click={() => goto('/')}>zpatky</button>
{$page.params.beer_id}
