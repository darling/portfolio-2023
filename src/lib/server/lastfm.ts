import { SECRET_LASTFM_KEY } from '$env/static/private';
import { PUBLIC_LASTFM_USERNAME } from '$env/static/public';
import LastFMTyped from 'lastfm-typed';
import type { getRecentTracks as IGetRecentTracks } from 'lastfm-typed/dist/interfaces/userInterface';

const lastfm = new LastFMTyped(SECRET_LASTFM_KEY);

export const getRecentTracks = async (): Promise<IGetRecentTracks> => {
	const username = PUBLIC_LASTFM_USERNAME;
	const recents = await lastfm.user.getRecentTracks({ user: username });
	return recents;
};
