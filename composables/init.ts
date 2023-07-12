
export const ESinit = (data:{ scroll: Function }) => {
    console.log("%c ★ Made by ES design ★ We are looking for awsome Front-End developer ↓", "font-weight:600;background:#ffe800;padding:5px 15px;border-radius:5px; color:#000000;font-size:14px;")
    console.log("%c https://www.cakeresume.com/companies/es-design/jobs !! JOIN US !!! ", "background:#000000;padding:5px 15px;border-radius:5px; color:#ffffff;font-size:10px;")
    console.log("%c 架構採用 Nuxt3 X WordPress，網站目前正在測試中～如果有任何問題歡迎回報給我們 hi@e-s.tw ", "background:#000000;padding:5px 15px;border-radius:5px; color:#ffffff;font-size:10px;")

    // const route = useRoute()
    // const { hook } = useNuxtApp()
    const { $LCscroll } = useNuxtApp()

    let isFirstLand = true
    const pageloaded = usePageLoaded()
    watch(pageloaded, (next) => {
        if (next && isFirstLand) {
            isFirstLand = false
            document.body.classList.add('is-loaded')

            setTimeout(() => {
                document.querySelector('.loading')?.remove()
            }, 1000)
        }
    }, {
        deep: true,
        immediate: true
    })


    // 換頁前
    const router = useRouter()

    router.beforeEach((to, from) => {
        console.log('★★ router beforeEach')
        
        pageloaded.value = false

        const oldContainer = document.querySelector('main')
        if (oldContainer !== null) {
            $LCscroll.removeScrollElements(oldContainer)
            document.body.classList.remove('is-loaded')
            document.body.classList.add('is-loading')
        }

        // lenis 滾動中換頁會回不到最上層，增加確保
        if (document.documentElement.classList.contains('lenis-scrolling')) {
            setTimeout(() => {
                $LCscroll.scrollTo(0, { duration: 1 })
            }, 400)
        }
        
    })

    // // 換頁後
    const { hook } = useNuxtApp()
    const vueTransitionTime = 600 // leave 0.2 + enter 0.4 = 0.6

    hook('page:finish', () => {


        if (!isFirstLand) {

            setTimeout(() => {
                const newContainer = document.querySelector('main')
                if (newContainer !== null) {
                    $LCscroll.addScrollElements(newContainer)
                    document.body.classList.add('is-loaded')
                    document.body.classList.remove('is-loading')
                    console.log('★★ page:finish' )
                }
            }, vueTransitionTime)

        }
        
    })
    
}