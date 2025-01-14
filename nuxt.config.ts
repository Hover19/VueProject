// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/styles/main.scss", "@/styles/_mixins.scss"],
  vite: {
    plugins: [svgLoader()],
    optimizeDeps: {
      include: ["naive-ui"],
    },
  },
  app: {
    baseURL: "/",
  },
  build: {
    analyze: true,
  },
});
