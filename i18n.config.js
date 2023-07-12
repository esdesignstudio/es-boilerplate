
import zh from './lang/zh/index.js'
import en from './lang/en/index.js'

export default defineI18nConfig(() => {
    return {
        legacy: false,
        defaultLocale: 'zh',
        locale: 'zh',
        messages: {
            zh, en
        },
        detectBrowserLanguage: {
            useCookie: false
        },
    }
})