<script lang="ts">
	import Container from '$lib/layout/Container.svelte';
	import { take, first, chain, uniqBy } from 'lodash-es';
	import type { PageData } from './$types';
	import Column from '$lib/layout/main/Column.svelte';
	import Row from '$lib/layout/main/entries/Row.svelte';
	import ColTitle from '$lib/layout/main/ColTitle.svelte';

	export let data: PageData;

	const myself = [
		'Crafting experiences as a software engineer and designer.',
		'Passionate about music and its influence.',
		'Striving to foster healthy, genuine interactions between people and technology.'
	];

	const experience = [
		{
			place: 'Mimu',
			role: 'Developer & Community',
			link: 'https://mimu.bot',
			description: 'Codebase maintainer and internal tech support.'
		},
		{
			place: 'Saddleback',
			role: 'Student',
			link: 'https://saddleback.edu'
		}
	];

	const projects = [
		{
			title: 'Mimu',
			link: 'https://mimu.bot',
			description: 'The cutest discord bot serving 1.5+ million communities.',
			visitText: 'Learn'
		},
		{
			title: 'MixtapesBut.Digital',
			link: 'https://mixtapesbut.digital',
			description: 'Express your feelings through music.',
			visitText: 'Project',
			underConstruction: true
		},
		{
			title: 'Road Identity',
			link: 'https://roadidentity.com',
			description: 'Host voting events for your car club.',
			visitText: 'Demo',
			underConstruction: true
		},
		{
			title: 'Unworthy',
			link: 'https://unworthy.net',
			description: 'A digital collective of privacy enthusiasts.',
			visitText: 'Learn'
		},
		{
			title: 'Ferris.gg',
			link: 'https://ferris.gg',
			description: 'A community engagement solution for gamers.',
			visitText: 'Learn'
		},
		{
			title: 'Carter',
			link: 'https://ey.lc/',
			description: 'My personal website.',
			visitText: 'You are here.'
		}
	];

	const mostRecentSong = first(data.lastfm.tracks);
	const nowPlayingSong = mostRecentSong?.nowPlaying ? mostRecentSong : null;

	const displayedTracks = uniqBy(data.lastfm.tracks, 'mbid');

	let currentSelectedSong: undefined | (typeof displayedTracks)[0];
	$: currentSelectedSong = undefined;
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

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	<Column>
		<ColTitle>Myself</ColTitle>
		{#each myself as item}
			<Row>
				<p>{item}</p>
			</Row>
		{/each}
	</Column>
	<Column>
		<ColTitle>Projects</ColTitle>
		{#each projects as project}
			<Row>
				<div class="flex justify-between">
					<div>
						<h2 class="text-base font-bold tracking-wide">
							{#if project.underConstruction}
								🚧
							{/if}
							{project.title} 🠊
							<a rel="noopener" target="_blank" class="text-white underline" href={project.link}>
								{project.visitText}
							</a>
						</h2>
						<p>
							{project.description}
						</p>
					</div>
				</div>
			</Row>
		{/each}
		<a
			class="text-lg tracking-wider hover:underline bg-primary text-background rounded-md w-full flex flex-col items-center justify-center p-4"
			href="/projects">Learn More -></a
		>
	</Column>

	<Column>
		<ColTitle>Experience</ColTitle>
		{#each experience as item}
			<Row>
				<div class="flex justify-between">
					<h2 class="font-bold tracking-wide text-base">
						{item.role} @
						<a rel="noopener" target="_blank" class="text-white underline" href={item.link}>
							{item.place}
						</a>
					</h2>
				</div>
				{#if item.description}
					<div>
						<p>
							{item.description}
						</p>
					</div>
				{/if}
			</Row>
		{/each}
	</Column>

	<Column>
		<ColTitle>
			{#if nowPlayingSong}
				Now Playing
			{:else}
				Recently Played
			{/if}
		</ColTitle>
		{#each take(displayedTracks, 5) as track}
			<Row>
				<div
					on:mouseover={() => {
						currentSelectedSong = track;
					}}
					on:mouseleave={() => {
						currentSelectedSong = undefined;
					}}
					on:focus={() => {
						currentSelectedSong = track;
					}}
					on:blur={() => {
						currentSelectedSong = undefined;
					}}
					class="flex justify-between"
				>
					<div class="flex items-center align-middle">
						<div
							hidden={!track.nowPlaying}
							class="w-2 h-2 rounded-full bg-primary -ml-4 mr-2 animate-ping"
						/>
						<a href={track.url} class="text-white underline">{track.name}</a>
					</div>
					<p>
						{track.artist}
					</p>
				</div>
			</Row>
		{/each}
	</Column>
	{#if currentSelectedSong}
		<img
			class="w-9/12 hidden md:block"
			alt={`Album art for ${currentSelectedSong.name} by ${currentSelectedSong.artist}`}
			src={currentSelectedSong.image.url || '/assets/images/placeholder.png'}
		/>
	{/if}
</div>
