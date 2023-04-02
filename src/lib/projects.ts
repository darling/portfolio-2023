import matter from 'gray-matter';
import { snakeCase } from 'lodash';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { VFileCompatible } from 'vfile';

/**
 *
 * @returns {Promise<{ content: string, title: string, date: string, updated: string, excerpt: string, slug: string }[]>}
 */
export const importProjects = async () => {
	const projects = import.meta.glob('./projects/*.md', { as: 'raw' });

	const projectList = await Promise.all(
		Object.values(projects).map(async (project) => {
			const content = await project();
			return content;
		})
	);

	const converted = await Promise.all(
		projectList
			.map((data) => matter(data))
			.map(async (data) => {
				return {
					...data.data,
					content: String(await parseMarkdown(data.content)),
					slug: '/projects/' + snakeCase(data.data.title)
				} as {
					content: string;
					title: string;
					date: string;
					updated: string;
					excerpt: string;
					slug: string;
					[key: string]: string | number | string[] | undefined | null | boolean;
				};
			})
	);

	// @ts-ignore
	return converted.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const importProject = async (slug: string) => {
	const projects = await importProjects();

	const project = projects.find((project) => snakeCase(project.title) === snakeCase(slug));

	if (!project) {
		return;
	}

	return project;
};

const parseMarkdown = (markdown: VFileCompatible) => {
	return unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(markdown);
};
