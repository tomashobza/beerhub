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
		}
	};

	const mouseup = (e: MouseEvent) => {
		pen_down = false;
		touchend(e as any);
	};

	const touchstart = (e: TouchEvent) => {
		pen_down = true;
		y_start = e.changedTouches[0].pageY + y_left;
	};

	const touchmove = (e: TouchEvent) => {
		if (pen_down) {
			y_offset = y_start - e.changedTouches[0].pageY;
		}
	};

	$: max_height = (window_height / 8) * 7;
	$: min_height = window_height / 4;

	const touchend = (e: TouchEvent) => {
		pen_down = false;

		if (y_offset - y_left > 100) {
			y_offset = max_height - min_height;
			last_snap = y_offset;
		} else if (y_offset - y_left < -100) {
			y_offset = 0;
			last_snap = y_offset;
		} else {
			y_offset = last_snap;
		}

		y_left = y_offset;
	};

	$: height = Math.min(Math.max(y_offset + min_height, min_height), max_height);
</script>

<svelte:window
	on:mousemove={mousemove}
	on:mouseup={mouseup}
	bind:innerHeight={window_height}
	on:touchmove={touchmove}
	on:touchend={touchend}
/>

<div
	class="bg-white z-50 pt-0 flex flex-col transition-all ease-out"
	style="height: {height}px; transition-duration: {pen_down ? 0 : 300}ms"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="self-center p-4 py-5 cursor-grab flex items-center justify-center w-full"
		on:mousedown={mousedown}
		on:touchstart|passive={touchstart}
	>
		<div class="border-slate-400 border-t-4 rounded-full w-[4rem]" />
	</div>
	<div class="flex-grow overflow-auto">
		<slot />
	</div>
</div>
