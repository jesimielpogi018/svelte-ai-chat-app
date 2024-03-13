import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter()
	}
};
export default config;
