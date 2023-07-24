<template>
    <div class="elements-number-counter">
        <span v-text="from" ref="counterRef"></span>
    </div>
</template>
<script setup>
    import { gsap } from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    const props = defineProps({
        from: {
            type: Number,
            default: 0,
        },
        to: {
            type: Number,
            default: 100,
        },
        decimals: {
            type: Number,
            default: 1,
        },
        duration: {
            type: Number,
            default: 1,
        },
        ease: {
            type: String,
            default: 'power4.out',
        },
        start: {
            type: String,
            default: 'top 100%',
        },
        end: {
            type: String,
            default: 'bottom 0%',
        },
        enter: {
            type: Boolean,
            default: false,
        },
        back: {
            type: Boolean,
            default: false,
        },
        markers: {
            type: Boolean,
            default: false,
        },
    })

    const counterRef = ref(null)
    gsap.registerPlugin(ScrollTrigger)
    let tl

    const counterAnimation = (el) => {
        if (counterRef.value) {
            el.fromTo(counterRef.value, {
                innerHTML: props.from,
            }, {
                innerHTML: props.to,
                duration: props.duration,
                ease: props.ease,
                roundProps: {
                    'innerHTML': props.decimals
                },
            })
        }
    }

    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: counterRef.value,
                        start: `${props.start}`,
                        end: `${props.end}`,
                        markers: props.markers,
                        onEnter: () => {
                            if (props.enter) {
                                counterAnimation(tl)
                            }
                        },
                        onEnterBack: () => {
                            if (props.back) {
                                counterAnimation(tl)
                            }
                        },
                    },
                })
                counterAnimation(tl)
            }, 601);
        })
    })
</script>
<style lang="scss">
    $class-name: elements-number-counter;
    .#{$class-name} {
        @include size(100%, auto);

        > span {
            @include typo('display', 1);
        }
    }
</style>