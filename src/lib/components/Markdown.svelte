<script>
	/**
	 * @type {string | undefined}
	 */
	export let title;
	/**
	 * @type {string | undefined}
	 */
	export let description;
	/**
	 * @type {string | undefined}
	 */
	export let image;

	let document = {
		title: title + ' - A project by Carter',
		description: description + '\n\nA project by Carter (ey.lc)',
		url: 'https://ey.lc/projects',
		image: image
	};
</script>

<svelte:head>
	<title>{document.title}</title>
	<meta name="description" content={document.description} />

	<meta property="og:title" content={document.title} />
	<meta property="og:site_name" content="Carter's Reference" />
	<meta property="og:url" content={document.url} />
	<meta property="og:description" content={document.title} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={document.image} />
</svelte:head>

<div>
	<a href="/projects"> Return to projects </a>
</div>

<div class="prose prose-lg prose-invert prose-pink prose-p:text-primary">
	{#if title}
		<h1>{title}</h1>
	{/if}
	{#if description}
		<p>{description}</p>
	{/if}
	<slot />
</div>
