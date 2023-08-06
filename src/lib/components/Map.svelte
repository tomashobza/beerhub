<script lang="ts">
	import type { LatLngExpression, Map } from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	import { onDestroy, onMount } from 'svelte';

	import toast from 'svelte-french-toast';

	let map_container: HTMLElement;
	let map: Map;

	const resizeMap = () => {
		map?.invalidateSize();
	};

	const get_location = () => {
		return new Promise((res, rej) => {
			navigator.geolocation.getCurrentPosition(
				(position) => res(position),
				(err) => rej(err),
				{
					maximumAge: 0,
					timeout: 5000
				}
			);
		});
	};

	onMount(async () => {
		const L = await import('leaflet');

		const default_position = [49.19522, 16.60796];

		map = L.map(map_container).setView(default_position as LatLngExpression, 13);
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
		    &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			subdomains: 'abcd',
			maxZoom: 14
		}).addTo(map);

		const { coords } = (await toast.promise(get_location(), {
			loading: 'Getting location...',
			success: 'Location found!',
			error: 'Could not locate you.'
		})) as GeolocationPosition;

		var marker = L.marker([coords.latitude, coords.longitude]).addTo(map);
		map.setView([coords.latitude, coords.longitude]);
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

<svelte:window on:resize={resizeMap} />

<div class="w-full flex-grow rounded-b-3xl z-0" bind:this={map_container} />
