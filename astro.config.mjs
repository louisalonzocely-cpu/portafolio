import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://luisalonsocely.netlify.app',
  devToolbar: { enabled: false },
  integrations: [tailwind()],
});
