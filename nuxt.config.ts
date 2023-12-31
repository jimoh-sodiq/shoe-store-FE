// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: [
    "@nuxt/devtools",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  image: {
    dir: "assets/images",
    format: ["webp", "avif", "jpeg", "jpg", "png"],
  },
  tailwindcss: {
    cssPath: "./src/assets/css/tailwind.css",
  },
  runtimeConfig: {
    public: {
		baseUrl: process.env.API_BASE_URL,
    },
  },
});
