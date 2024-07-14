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
  // generate: {
  //   routes: async () => {
  //     const dataPath = path.resolve(__dirname, "server/data.json");
  //     const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  //     return data.users.map((user: { id: number }) => `/profile/${user.id}`);
  //   },
  // },
  compatibilityDate: "2024-07-14",
});
