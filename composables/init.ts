export const ESinit = (data:{ scroll: Function }) => {
    
    // > For landing animation
    // > Every page should use `pageloaded.value = true` to trigger animation
    // > ------------------------------------------------------------------------

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


    // > Before page transition   
    // > ------------------------------------------------------------------------

    const router = useRouter()
    const { $LCscroll } = useNuxtApp()

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
                $LCscroll.scrollTo(0, { duration: 1 })
            }, 200) 
        }
        
    })

    // > After page transition   
    // > ------------------------------------------------------------------------

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

// > Just for fun
// > ------------------------------------------------------------------------

if(process.server) {
    console.log('\n');
    console.log('.                         .-.' );
    console.log(' (_______________________()6 `--,' );
    console.log(' (   __________________   /""""' );
    console.log(' //\\                  //\\' );
    console.log(' \x1b[0m \x1b[33m%s\x1b[0m', '● ES Boilerplate is !!Awesome!! v1.0.0 ●', );
    console.log('\n' );
} else {
    console.log("%c Made by ES Boilerplate https://github.com/esdesignstudio/es-boilerplate")
    console.log("%c ★ Made by ES design ★ We are looking for awsome Front-End developer ↓", "font-weight:600;background:#ffe800;padding:5px 15px;border-radius:5px; color:#000000;font-size:14px;")
    console.log("%c https://www.cakeresume.com/companies/es-design/jobs !! JOIN US !!! ", "background:#000000;padding:5px 15px;border-radius:5px; color:#ffffff;font-size:10px;")
}