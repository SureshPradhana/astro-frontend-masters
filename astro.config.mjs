import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters-2kw2.vercel.app/',
  integrations: [solid({
    include: ["**/solid/*"]
  }), react({
    include: ["**/react/*"]
  })],
  output: "hybrid",
  adapter: vercel()
});