import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.mjs';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig), 
		preprocess({
			scss: {
				prependData: "@import './static/styles/gstyle.scss';"
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
