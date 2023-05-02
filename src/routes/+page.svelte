<script lang="ts">
	import Container from '$lib/layout/Container.svelte';
	import { take, first, chain } from 'lodash-es';
	import type { PageData } from './$types';
	import Column from '$lib/layout/main/Column.svelte';
	import Row from '$lib/layout/main/entries/Row.svelte';
	import ColTitle from '$lib/layout/main/ColTitle.svelte';

	export let data: PageData;

	const myself = [
		'I create and examine experiences.',
		'I am a software engineer and designer.',
		'I am a music enthusiast.',
		'I want to design healthy and genuine interactions between people and technology.'
	];

	const experience = [
		{
			place: 'Mimu',
			role: 'Developer & Community'
		},
		{
			place: 'Saddleback',
			role: 'Student'
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
			visitText: 'Project'
		},
		{
			title: 'Lapis',
			link: '#',
			description: 'A social media that facilitates genuine interactions.',
			visitText: 'pending...'
		},
		{
			title: 'Unworthy',
			link: 'https://unworthy.net',
			description: 'A digital collective of privacy enthusiasts.',
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

	const displayedTracks = chain(data.lastfm.tracks).uniqBy('mbid').value();

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

<Container>
	<div class="text-xs min-h-screen py-8 flex flex-col items-center justify-center gap-4 lg:gap-8">
		<div class="w-full flex justify-between">
			<div>
				<h1>carter aka safe</h1>
			</div>
			<div>hello at unworthy dot net</div>
		</div>
		<div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
								<p><b>{project.title}</b></p>
								<p>
									{project.description}
								</p>
							</div>
							<a class="text-white underline" href={project.link}>
								{project.visitText}
							</a>
						</div>
					</Row>
				{/each}
			</Column>

			<Column>
				<ColTitle>Experience</ColTitle>
				{#each experience as item}
					<Row>
						<div class="flex justify-between">
							<p>{item.role}</p>
							<p>
								{item.place}
							</p>
						</div>
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
					class="w-1/2 hidden md:block"
					alt={`Album art for ${currentSelectedSong.name} by ${currentSelectedSong.artist}`}
					src={currentSelectedSong.image.url || '/assets/images/placeholder.png'}
				/>
			{/if}
		</div>
	</div>
</Container>
