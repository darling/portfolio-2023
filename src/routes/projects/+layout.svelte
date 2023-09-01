<script>
	import { browser } from '$app/environment';

	const toTop = () => {
		if (browser) window.scrollTo(0, 0);
	};
</script>

<div class="flex flex-col gap-12 mb-12">
	<slot>Items will go here</slot>
</div>

<div class="py-12">
	<button type="button" on:click={toTop}> Return to the top </button>
</div>
