import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://moshkingcode.github.io",
  base: "/MoshkingCode.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});