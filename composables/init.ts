export const ESinit = (data:{ scroll: Function }) => {

    console.log("%c🥚 ES Boilerplate 🥚 https://github.com/esdesignstudio/es-boilerplate", "border-left:10px solid #ffe800;border-color:#ffe800;background:#000000;padding:5px 15px;border-radius:5px; color:#ffffff;font-size:10px;")

    const { $LCscroll } = useNuxtApp()
    
    // > For landing animation
    // > Every page should use `pageloaded.value = true` to trigger animation
    // > ------------------------------------------------------------------------

    let isFirstLand = true
    const pageloaded = usePageLoaded()
    watch(pageloaded, (next) => {
        if (next && isFirstLand) {
            isFirstLand = false
            document.body.classList.add('is-loaded')

            // Fix static nuxt using lenis-scroll can't get dom
            if (document.querySelector('[data-ssr]')?.dataset.ssr === 'false') {
                const newContainer = document.querySelector('main')
                newContainer !== null ? $LCscroll.addScrollElements(newContainer) : null
            }

            setTimeout(() => {
                document.querySelector('.loading')?.remove()
            }, 1000)
        }
    }, {
        deep: true,
        immediate: true
    })


    // > Before page transition   
    // > ------------------------------------------------------------------------

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

        // Make sure lenis scroll to top after page transition
        // 400 depend on vue transition time
        if (document.documentElement.classList.contains('lenis-scrolling')) {
            setTimeout(() => {
                window.scrollY = 0
            }, 200) 
        }
        
    })

    // > After page transition   
    // > ------------------------------------------------------------------------

    const { hook } = useNuxtApp()
    const vueTransitionTime = 400

    hook('page:finish', () => {
        console.log('★★ isFirstLand', isFirstLand)
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
