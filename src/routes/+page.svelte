<script lang="ts">
	import { createColorClassGenerator } from '$lib/colors';
	import Container from '$lib/layout/Container.svelte';
	import { take, random, first, chain, isEqual } from 'lodash-es';
	import type { PageData } from './$types';

	const links = [
		{
			name: 'Email',
			href: 'mailto:c@ey.lc'
		},
		{
			name: 'Discord',
			href: '/discord'
		},
		{
			name: 'GitHub',
			href: 'https://github.com/darling/'
		}
	];

	export let data: PageData;

	function genPath() {
		var points = Array(10)
			.fill([])
			.map(() => [Math.random() * 1155, Math.random() * 678]);
		var path = 'M' + points[0][0] + ' ' + points[0][1];
		for (var i = 1; i < points.length; i++) {
			path += ' L' + points[i][0] + ' ' + points[i][1];
		}
		return path;
	}

	// function insertNulls<T>(array: T[]): (T | null)[] {
	// 	return flatMap(array, (value: T, index: number) => {
	// 		if ((index + 1) % 2 === 0) {
	// 			return [value, null, null];
	// 		}
	// 		return value;
	// 	});
	// }

	const colorGen = createColorClassGenerator();

	const mostRecentSong = first(data.lastfm.tracks);
	const nowPlayingSong = mostRecentSong?.nowPlaying ? mostRecentSong : null;

	const restOfTracks = chain(data.lastfm.tracks)
		.drop(1)
		.uniqBy('mbid')
		.uniqWith((a, b) => {
			return isEqual(a.image, b.image);
		})
		.take(15)
		.value();

	let currentSelectedSong: undefined | (typeof restOfTracks)[0];
	$: currentSelectedSong = undefined;

	$: blob1 = '#BFB5D7';
	$: blob2 = '#BFB5D7';
	$: blob3 = '#BFB5D7';
	$: blob4 = '#BFB5D7';
</script>

<svelte:head>
	<title>Carter</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Carter's website showcasing his music taste, projects, and experiences."
	/>
	<meta
		name="keywords"
		content="Carter, music, personal website, SvelteKit, projects, experiences"
	/>
	<meta name="author" content="Carter" />
</svelte:head>

<Container>
	<div class="pb-64 overflow-visible">
		<div class="relative pt-32 flex flex-col gap-16">
			<div
				class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden sm:top-[-20rem] blur-3xl"
			>
				<svg
					class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".6" d={genPath()} />
					<defs>
						<linearGradient
							id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color={blob1} />
							<stop offset="1" stop-color={blob2} />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu -z-10 overflow-hidden sm:top-[calc(100%-30rem)] blur-3xl"
			>
				<svg
					class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" d={genPath()} />
					<defs>
						<linearGradient
							id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color={blob3} />
							<stop offset="1" stop-color={blob4} />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<h1 style="line-height: 1.667;" class="text-4xl sm:text-6xl font-bold">
				<span
					class={colorGen() +
						' bg-white drop-shadow-sm px-2 transition-colors duration-100 cursor-text whitespace-nowrap'}
					>Carter</span
				>
				is
				<span
					class={colorGen() +
						' bg-white drop-shadow-sm px-2 transition-colors duration-100 cursor-text whitespace-nowrap'}
					>elevating</span
				>
				<span
					class={colorGen() +
						' bg-white drop-shadow-sm px-2 transition-colors duration-100 cursor-text whitespace-nowrap'}
					>user experiences</span
				>
				for
				<span
					class={colorGen() +
						' bg-white drop-shadow-sm px-2 transition-colors duration-100 cursor-text whitespace-nowrap'}
					>diverse</span
				> users.
			</h1>
			<h2 class="text-2xl font-serif">
				Focusing on creating unique, playful, and memorable software for all kinds of people.
			</h2>
			<div class="flex flex-row gap-4">
				{#each links as link}
					<a
						class={colorGen() + ' transition duration-100 bg-white px-2 drop-shadow-sm font-bold'}
						style="transform: rotate({random(-6, 6, false)}deg);"
						href={link.href}>{link.name}</a
					>
				{/each}
			</div>
		</div>
	</div>
</Container>
<div class="bg-purple-200 py-32">
	<Container>
		<h2 class=" bg-white w-fit drop-shadow-sm p-2 font-bold text-3xl">
			Carter loves to examine experiences.
		</h2>
	</Container>
	<Container>
		<div class="py-12 flex flex-col gap-4">
			<p class="font-serif">
				He's particular about the way people interact with software. He creates experiences that
				interact with people, rethinking and teaching by design.
			</p>
			<div class="pt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each take(data.projects, 3) as project}
					<a
						href={project.slug}
						class="flex flex-col gap-2"
						style={`transform: rotate(${random(-1, 1, false)}deg);`}
					>
						<div class={colorGen() + ' bg-white drop-shadow-sm p-2'}>
							<h3 class="font-bold truncate">{project.title}</h3>
							<p class="text-xs">
								{project.excerpt}
							</p>
						</div>
					</a>
				{/each}
				<a
					href="/projects"
					class="flex flex-col gap-2"
					style={`transform: rotate(${random(-1, 1, false)}deg);`}
				>
					<div
						class={colorGen() +
							' bg-white drop-shadow-sm p-2 flex flex-col justify-center items-center'}
					>
						<h3 class="font-bold">All Projects →</h3>
					</div>
				</a>
			</div>
		</div>
	</Container>
</div>
<div class="py-32">
	<Container>
		<div class="flex flex-col gap-8">
			<h2 class="font-bold text-3xl">Carter enjoys doing other things too.</h2>
			<p class="font-serif">
				If he's not watching movies, hanging out with friends, or working on personal projects, he's
				probably listening to music.
			</p>
			{#if nowPlayingSong}
				<p class="font-serif">
					Currently, he's listening to <a
						href={nowPlayingSong.url}
						target="_blank"
						rel="noopener noreferrer"
						class={colorGen() + ' font-sans p-2 bg-white font-bold whitespace-nowrap'}
						style="transform: rotate({random(-3, 1, false)}deg);">{nowPlayingSong.name}</a
					>
					by
					<span
						class={colorGen() + ' font-sans p-2 bg-white font-bold whitespace-nowrap'}
						style="transform: rotate({random(-1, 3, false)}deg);">{nowPlayingSong.artist}</span
					>.
				</p>
			{/if}
			<p class="font-serif">Here's some recent music he's listened to:</p>
			<div class="grid grid-cols-3 lg:grid-cols-5 gap-4 transition">
				{#each restOfTracks as track}
					{#if track}
						<a href={track.url} target="_blank" rel="noreferrer" class="bg-white">
							<img class="aspect-square" src={track.image.url} alt="" />
						</a>
					{:else}
						<div class="aspect-square" />
					{/if}
				{/each}
			</div>
		</div>
	</Container>
</div>
