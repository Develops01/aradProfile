// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "fs";
import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  generate: {
    routes: ["/users/:id"],
  },
  compatibilityDate: "2024-07-14",
});
