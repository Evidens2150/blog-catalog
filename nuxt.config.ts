const isProduction = process.env.NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  srcDir: 'src',
  css: [
    '@/styles/index.css',
  ],
  app: {
    baseURL: isProduction ? '/blog-catalog/' : '/',
    head: {
      title: 'QTIM',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${isProduction ? '/blog-catalog/' : '/'}favicon.ico` }
      ],
    }
  },
})
