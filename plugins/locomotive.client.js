import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            LCscroll: new LocomotiveScroll()
        }
    }
})
