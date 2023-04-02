import { importProjects } from '$lib/projects';
import { omit } from 'lodash';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	let projects = await importProjects();

	return {
		props: {
			projects: projects.map((p) => omit(p, 'content'))
		}
	};
};
