import { getRecentTracks } from '$lib/server/lastfm';
import { importProjects } from '$lib/projects';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const projects = await importProjects();

	// strip content from projects
	const projectsWithoutContent = projects.map((project) => {
		// eslint-disable-next-line no-unused-vars
		const { content, ...rest } = project;
		return rest;
	});

	return {
		projects: projectsWithoutContent,
		lastfm: await getRecentTracks()
	};
}
