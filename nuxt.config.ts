// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],
  plugins: [
    '~/plugins/firebase.ts',
    '~/plugins/firebase-messaging-sw.js'
  ]
})
