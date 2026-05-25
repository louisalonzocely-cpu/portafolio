import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://louisalonzocely-cpu.github.io',
  base: '/portafolio',
  devToolbar: { enabled: false },
  integrations: [tailwind()],
});
