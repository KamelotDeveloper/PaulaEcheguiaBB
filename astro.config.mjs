import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
 import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind()],
  site: "https://example.com", // [CHANGEME]
   // ... otras configuraciones
      devToolbar: {
        enabled: false,
      },
    });


