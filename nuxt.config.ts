import { resolve, dirname } from 'node:path'

export default defineNuxtConfig({
  app: {
      rootId: 'es-app',
      pageTransition: { name: 'page', mode: 'out-in' },
      head: {
          htmlAttrs: {
              lang: 'zh-TW',
          },
          charset: 'utf-8',
          titleTemplate: '%s ✷ ' + process.env.APP_NAME,
          meta: [
              { name: 'theme-color', content: '#000000' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name: 'copyright', content: '網站開發：ES Design' },
              { property: 'og:type', content: 'website' },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '630' },
              { property: 'og:image', content: '/socialshare.jpg' },
              { property: 'twitter:image', content: '/socialshare.jpg' },
              { property: 'twitter:card', content: 'summary_large_image' },
          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
              {
                  href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap',
                  rel: 'stylesheet',
              },
          ],
          noscript: [
              { children: '<style>text{position:fixed;top:0;left:0;width:100vw;height:100vh;font-size:2rem;background-color:#000;color:#fff;z-index:10000;display:flex;align-items:center;justify-content:center;text-align:center;padding:5rem}</style>' },
              { children: '😓 ' + process.env.APP_NAME + '：Sorry your JavaScript is off or your browser does not support JavaScript 😓' }
          ], 
          script: [
              // { src: 'https://static.line-scdn.net/liff/edge/2/sdk.js'}
          ]
      }
  },

  css: [
      '@/assets/styles/main.scss', // global css
  ],

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "@/assets/styles/mixins/mixin.scss";',
                  //! 關閉 CSS 警告使用
                  api: 'modern-compiler',
                  silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
              },
          },
      },
      resolve:{
          alias: {
              '~': resolve(__dirname, './assets/')
          }
      },

      //! 關閉 Nuxt Icons 警告使用
      plugins: [ 
          {
          name: 'vite-plugin-glob-transform',
          transform(code: string, id: string) {
              if (id.includes('nuxt-icons')) {
              return code.replace(/as:\s*['"]raw['"]/g, 'query: "?raw", import: "default"');
              }
              return code;
          }
          }
      ],
      server: { // 解決開發時 websocket 問題
          hmr: {
              protocol: 'ws',
              host: 'localhost'
          }
      }
  },

  modules: [
      '@nuxt/devtools',
      'nuxt-icons',
      'dayjs-nuxt',
  ],

  runtimeConfig: {
      public: {
          env: process.env.ENV,
          siteUrl: process.env.SITE_URL,
          apiUrl: process.env.API_URL + '/wp-json/api',
          siteName: process.env.APP_NAME
      },
  },

  devtools: {
      enabled: process.env.ENV === 'dev',
  },

  hooks: {
      'nitro:build:public-assets' : (nitro) => {
          console.log('ES BUILD SUCCESS')
          console.log('                         .-.')
          console.log('(_______________________()6 `--,')
          console.log('(   __________________   /"""`')
          console.log('//\\                  //\\')
          console.log('"" ""                 "" ""')
      }
  },

  compatibilityDate: '2024-11-28'
})