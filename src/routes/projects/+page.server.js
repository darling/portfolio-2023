import { importProjects } from '$lib/projects';
import pkg from 'lodash';
const { omit } = pkg;

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	let projects = await importProjects();

	return {
		props: {
			projects: projects.map((p) => omit(p, 'content'))
		}
	};
};
