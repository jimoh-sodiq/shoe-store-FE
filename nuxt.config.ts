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
      baseUrl: process.env.NODE_ENV == 'development' ? process.env.API_BASE_URL_DEV : process.env.API_BASE_URL,
    },
  },
  app: {
    head: {
      script: [{
        type: 'text/javascript',
        async: true,
        src: 'https://embed.tawk.to/659f89d10ff6374032bebd93/1hjrj4nl4',
        crossorigin: '',
      }],

    },
  },
  imports: {
    dirs: [
      'composables/**'
    ]
  }
});
