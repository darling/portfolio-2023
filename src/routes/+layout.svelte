<script>
	import Container from '$lib/layout/Container.svelte';
	import '../app.css';
</script>

<div class="overflow-hidden">
	<Container>
		<div class="text-xs min-h-screen pt-12 flex flex-col items-center gap-4 lg:gap-8">
			<div class="w-full flex justify-between">
				<div>
					<h1>
						carter @<span class="text-white font-bold">safe</span> @<span
							class="text-white font-bold">unworthy</span
						>
					</h1>
				</div>
				<div>hello @ unworthy . net</div>
			</div>
			<div class="w-full">
				<slot />
			</div>
		</div>
	</Container>
</div>
