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
                { children: '😚' + process.env.APP_NAME + '：此網站必須啟用 ✪ Javascript ✪' }
            ], 
            script: [
                // { src: 'https://static.line-scdn.net/liff/edge/2/sdk.js'}
            ]
        }
    },

    css: [
        '@/style/_main.scss', // global css
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/style/mixins/_mixin.scss";',
                },
            },
        },
        resolve:{
            alias: {
                '~': resolve(__dirname, './assets/')
            }
        },
        server: { // 解決開發時 websocket 問題
            hmr: {
                protocol: 'ws',
                host: 'localhost'
            }
        }
    },

    modules: [
        '@nuxtjs/i18n',
        '@formkit/nuxt',
        'nuxt-icons'
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
    }
})
