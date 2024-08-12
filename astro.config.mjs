import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';
import alpinejs from "@astrojs/alpinejs";

import opengraphImages, {presets} from "astro-opengraph-images";

import * as fs from "node:fs";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.productspace.io',
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), alpinejs(), sitemap(),
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Latinotype Mohr",
            weight: 400,
            style: "normal",
            data: fs.readFileSync("public/fonts/latinotype_-_mohr_regular-webfont.woff"),
          },
        ],
      },
      render: presets.blackAndWhite,
    }),
  ],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"]
  }
});