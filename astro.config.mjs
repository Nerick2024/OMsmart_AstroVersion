import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Build a static site by default to avoid requiring a server adapter.
  output: "static",
});
