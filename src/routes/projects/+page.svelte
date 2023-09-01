<script lang="ts">
	// @ts-expect-error
	import { metadata as mixtapeData } from './(projects)/mixtapes/+page.md';
	// @ts-expect-error
	import { metadata as roadidenData } from './(projects)/roadiden/+page.md';
	// @ts-expect-error
	import { metadata as ferrisData } from './(projects)/ferris/+page.md';

	const items = [mixtapeData, roadidenData, ferrisData];
</script>

<div>
	<a href="/"> Return to home </a>
</div>

<div class="max-w-3xl">
	<div class="prose prose-invert">
		<h1>My Projects</h1>

		<div class="not-prose">
			<ul>
				{#each items as item, i (item.path)}
					<li class="p-4 -ml-4 group hover:bg-background">
						<a class="flex gap-2 flex-col w-full justify-start" href="/projects/{item.path}">
							<div>
								<h2 class="tracking-tight group-hover:underline text-2xl text-primary font-bold">
									{item.title}
								</h2>
								<p>
									{item.description}
								</p>
							</div>
							<div>
								<img src={item.image} alt={item.title} />
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
