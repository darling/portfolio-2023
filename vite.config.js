import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		commonjsOptions: { include: [] }
	},
	optimizeDeps: {
		disabled: false
	}
};

export default config;
