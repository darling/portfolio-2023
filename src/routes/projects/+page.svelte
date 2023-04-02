<script>
	import { createColorClassGenerator } from '$lib/colors';
	import Container from '$lib/layout/Container.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const colorGen = createColorClassGenerator();

	const projects = data.props.projects;
</script>

<Container>
	<div class="py-24">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">My Projects & Work</h1>
		<p class="font-serif">
			I'm always starting projects and messing with tech. Here are some of my favorites I've worked
			on.
		</p>
	</div>
</Container>
<Container>
	<div class="flex flex-col gap-16">
		{#each projects as project}
			<a href={project.slug}>
				<h2
					class={colorGen() + ' bg-white p-2 drop-shadow-sm w-fit text-3xl font-bold tracking-wide'}
				>
					{project.title}
				</h2>
				<p class="font-serif text-2xl py-4">
					{project.excerpt}
				</p>
			</a>
		{/each}
	</div>
</Container>
