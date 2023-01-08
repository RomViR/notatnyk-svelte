import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'fallback.html'
		}),
		paths: {
			base: dev ? '' : '/notatnyk-svelte'
		}
	}
};

export default config;
