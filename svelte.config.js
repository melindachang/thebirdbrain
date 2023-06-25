import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			layout: { article: path.join(__dirname, './src/routes/articles/_layout.svelte') }
		})
	],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		alias: {
			'@lib/*': path.join(__dirname, './src/lib/*'),
			'@sass/*': path.join(__dirname, './src/sass/*')
		}
	}
};

export default config;
