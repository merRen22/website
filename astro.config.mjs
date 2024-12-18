import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://melushstore.com",
  output: "server",
  integrations: [tailwind(), icon(), svelte(), sitemap()],
  adapter: cloudflare()
});