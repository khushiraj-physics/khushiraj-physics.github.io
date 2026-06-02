import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://khushiraj-physics.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		drafts: true
	},
	// This restores the font settings the template needs to stop crashing
	experimental: {
		assets: true
	}
});