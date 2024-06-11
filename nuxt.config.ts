import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/styles/main.css', './assets/styles/common.css'],
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    dirs: ['composables', 'composables/**',]
  }
})
