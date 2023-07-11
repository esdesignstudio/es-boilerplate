import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            LCscroll: new LocomotiveScroll({
                wrapper: window,
                content: document.documentElement,
                smoothWheel: true,
                smoothTouch: false,
            })
        }
    }
})
