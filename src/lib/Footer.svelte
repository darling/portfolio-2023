<script lang="ts">
	import { createColorClassGenerator } from './colors';
	import Container from './layout/Container.svelte';

	const colorGen = createColorClassGenerator();
</script>

<div class="bg-purple-200">
	<Container>
		<footer class="py-24 mt-16">
			<div class="flex flex-col gap-8">
				<div class="text-2xl font-bold bg-white p-2 w-fit shadow-sm">Spread love not hate.</div>
				<a href="/" class={colorGen() + ' font-serif text-xl w-fit'}>Return to home</a>
			</div>
		</footer>
	</Container>
</div>
