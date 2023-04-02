import { SECRET_LASTFM_KEY } from '$env/static/private';
import { PUBLIC_LASTFM_USERNAME } from '$env/static/public';

interface LastFMRecentTracksResponse {
	recenttracks: Recenttracks;
}

interface Recenttracks {
	track: Track[];
	'@attr': Attr;
}

interface Attr {
	user: string;
	totalPages: string;
	page: string;
	perPage: string;
	total: string;
}

interface Track {
	artist: Album;
	streamable: string;
	image: Image[];
	mbid: string;
	album: Album;
	name: string;
	'@attr'?: TrackAttr;
	url: string;
	date: DateClass;
}

interface TrackAttr {
	nowplaying: string;
}

interface Album {
	mbid: string;
	'#text': string;
}

interface DateClass {
	uts: string;
	'#text': string;
}

interface Image {
	size: Size;
	'#text': string;
}

enum Size {
	Extralarge = 'extralarge',
	Large = 'large',
	Medium = 'medium',
	Small = 'small'
}

type LastFMData = {
	tracks: {
		artist: string;
		name: string;
		url: string;
		image: {
			url: string;
			size: string;
		};
		nowPlaying: boolean;
		mbid: string;
	}[];
};

export const getRecentTracks = async () => {
	const username = PUBLIC_LASTFM_USERNAME;

	const recents = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${SECRET_LASTFM_KEY}&format=json`
	);

	const data = (await recents.json()) as LastFMRecentTracksResponse;

	return {
		tracks: data.recenttracks.track.map((track) => ({
			artist: track.artist['#text'],
			name: track.name,
			url: track.url,
			image: {
				url: track.image[track.image.length - 1]['#text'],
				size: track.image[track.image.length - 1].size
			},
			nowPlaying: track['@attr']?.nowplaying ?? false,
			mbid: track.mbid
		}))
	} as LastFMData;
};
