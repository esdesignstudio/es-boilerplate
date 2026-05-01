// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    rootId: 'ss-app',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      // titleTemplate: '%s ✷ ' + process.env.APP_NAME,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Web developer ES Design' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/socialshare.jpg' },
        { name: 'theme-color', content: '#672146' },
        { name: 'robots', content: process.env.ENV === 'prod' ? 'index, follow' : 'noindex, nofollow' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/qpp0iio.css' },
      ],
      noscript: [
        { innerHTML: '<style>text{position:fixed;top:0;left:0;width:100vw;height:100vh;font-size:2rem;background-color:#000;color:#fff;z-index:10000;display:flex;align-items:center;justify-content:center;text-align:center;padding:5rem}</style>' },
        { innerHTML: '😓：Sorry your JavaScript is off or your browser does not support JavaScript 😓' },
      ],
      script: [
        // { src: ''}
      ],
    },
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/mixins/mixin.scss" as *;',
        },
      },
    },
    server: { // 解決開發時 websocket 問題
      allowedHosts: [
        'host.docker.internal',
      ],
    },
  },

  nitro: {
    storage: {
      cache: {
        driver: 'fs',
        base: './.cache',
      },
    },
    routeRules: {
      '/': { swr: true },
      // '/works': { swr: true },
      // '/works/**': { swr: true },
      // '/about': { swr: true },
      // '/contact': { swr: true },
    },
  },

  runtimeConfig: {
    public: {
      env: process.env.ENV,
      siteUrl: process.env.NUXT_SITE_URL,
      apiUrl: process.env.WP_URL + '/wp-json/api',
      apiWpUrl: process.env.WP_URL + '/wp-json/wp/v2',
      // 以環境變數控制是否啟用 i18n 功能（預設關閉）
      i18nEnabled: process.env.I18N_ENABLED === 'true',
    },
  },

  devtools: {
    enabled: process.env.ENV === 'dev',
  },

  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/sitemap', '@vueuse/nuxt'],

  icon: {
    customCollections: [
      {
        prefix: 'ss',
        dir: './app/assets/icons',
      },
    ],
  },

  sitemap: {
    sources: [`${process.env.WP_URL}/wp-json/api/get_sitemap`],
    includeAppSources: true,
  },
})