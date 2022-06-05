import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$data: resolve('./src/data'),
					$components: resolve('./src/components')
				}
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
