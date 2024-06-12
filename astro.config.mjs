import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stunning-fenglisu-7a82af.netlify.app",
  integrations: [preact()],
  devToolbar: {
    enabled: false
  }
});