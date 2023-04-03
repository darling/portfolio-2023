<script>
	import { createColorClassGenerator } from '$lib/colors';
	import Container from '$lib/layout/Container.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const colorGen = createColorClassGenerator();

	$: project = data.props?.project;
</script>

<svelte:head>
	<title>{project?.title} - Carter</title>
	<meta
		name="description"
		content={project?.excerpt ||
			`Carter's website showcasing his music taste, projects, and experiences.`}
	/>
	<meta
		name="keywords"
		content="Carter, music, personal website, SvelteKit, projects, experiences"
	/>
	<meta name="author" content="Carter" />
</svelte:head>

<Container>
	<div class="pt-12">
		<div class="mx-auto w-fit">
			<a class={colorGen() + ' font-serif text-lg italic'} href="/projects">Return to projects</a>
		</div>
	</div>
	<div class="pb-24 pt-12">
		<div class={colorGen() + ' bg-white p-2 w-fit mx-auto'}>
			<h1 class="text-center lg:text-6xl text-3xl font-bold tracking-wide">
				{project?.title || 'Project Title'}
			</h1>
		</div>
	</div>
	<div
		class="prose prose-2xl prose-p:font-serif prose-purple prose-headings:text-primary prose-p:text-primary"
	>
		{@html project?.content || 'This project has no content'}
	</div>
	<div class="pt-12">
		<div class="mx-auto w-fit">
			<a class={colorGen() + ' font-serif text-lg italic'} href="/projects">Return to projects</a>
		</div>
	</div>
</Container>
