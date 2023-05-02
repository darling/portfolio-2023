import { getRecentTracks } from '$lib/server/lastfm';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		lastfm: await getRecentTracks()
	};
}
