import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://khushiraj-physics.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			name: 'Atkinson Hyperlegible',
			cssVariable: '--font-atkinson',
			provider: fontProviders.google(),
		}
	]
});