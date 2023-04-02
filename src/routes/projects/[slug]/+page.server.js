import { importProject } from '$lib/projects';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// params.slug
	if (params.slug) {
		const project = await importProject(params.slug);

		if (!project) {
			return error(404, 'Project not found');
		}

		return {
			props: {
				project
			}
		};
	}

	throw error(404, 'Not found');
}
