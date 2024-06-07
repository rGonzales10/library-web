// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/styles/tailwind.css', './assets/styles/common.css', './assets/styles/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    dirs: ['composables', 'composables/**',]
  }
})
