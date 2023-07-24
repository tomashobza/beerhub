<script lang="ts">
	let window_height = 0;

	let pen_down = false;

	let y_offset = 0;
	let y_left = 0;
	let y_start = 0;
	let last_snap = 0;

	const mousedown = (e: MouseEvent) => {
		e?.preventDefault();
		pen_down = true;
		y_start = e.pageY + y_left;
	};

	const mousemove = (e: MouseEvent) => {
		e?.preventDefault();
		if (pen_down) {
			y_offset = y_start - e.pageY;
			console.log(y_offset);
		}
	};

	const mouseup = (e: MouseEvent) => {
		pen_down = false;
		// y_left = y_offset;
		touchend(e as any);
	};

	const touchstart = (e: TouchEvent) => {
		pen_down = true;
		y_start = e.changedTouches[0].pageY + y_left;
	};

	const touchmove = (e: TouchEvent) => {
		console.log(e);
		if (pen_down) {
			y_offset = y_start - e.changedTouches[0].pageY;
		}
	};

	const touchend = (e: TouchEvent) => {
		pen_down = false;
		console.log('pustena vyska', y_offset - y_left);

		if (y_offset - y_left > 100) {
			y_offset = window_height - window_height / 4;
			last_snap = y_offset;
		} else if (y_offset - y_left < -100) {
			y_offset = 0;
			last_snap = y_offset;
		} else {
			y_offset = last_snap;
		}

		y_left = y_offset;
	};

	// $: console.log('height', y_offset - y_left);

	$: height = Math.min(Math.max(y_offset + window_height / 4, window_height / 4), window_height);
</script>

<svelte:window
	on:mousemove={mousemove}
	on:mouseup={mouseup}
	bind:innerHeight={window_height}
	on:touchmove={touchmove}
	on:touchend={touchend}
/>

<div class="bg-white z-50 pt-0 flex flex-col transition-all ease-linear" style="height: {height}px">
	<!-- <div
	class="bg-white z-50 p-6 pt-0 flex flex-col absolute left-0 w-full bg-red-400"
	style="top: {-y_offset}px;"
> -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="self-center p-4 cursor-grab" on:mousedown={mousedown} on:touchstart={touchstart}>
		<div class="border-black border-t-4 rounded-full w-[4rem]" />
	</div>
	<div>ahoj</div>
</div>
