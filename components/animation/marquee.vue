<template>
    <div
        class="animation-marquee"
    >
        <div 
            class="animation-marquee__wrap"
            ref="marqueeRef"
            :class="{
                '-vertical': direction === 'up' || direction === 'down',
            }"
        >
            <div
                class="animation-marquee__item"
                v-for="(item, key) in 5"
                :key="key"
                ref="marqueeGroupRef"
                :class="{
                    '-vertical': direction === 'up' || direction === 'down',
                }"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
    import gsap from "gsap"

    const props = defineProps({
        direction: {
            type: String,
            default: 'left',
        },
        speed: {
            type: Number,
            default: 1,
        },
        reverse: {
            type: Boolean,
            default: false,
        },
    })

    const marqueeRef = ref(null)
    const marqueeGroupRef = ref(null)
    const groupLength = ref()
    const scrollDirectionDown = ref(true)

    let timeline
    let moveScroll = null;
    const { $LCscroll } = useNuxtApp()
    const init = () => {
        groupLength.value = props.direction === 'left' || props.direction === 'right' ? marqueeGroupRef.value[0].clientWidth : marqueeGroupRef.value[0].clientHeight
        timeline = gsap.timeline()
        setTimeline()
        moveScroll = function() {
            const velocity = $LCscroll.lenisInstance.velocity
            if (velocity > 1.2) {
                timeline.timeScale(velocity / 2.6)
                scrollDirectionDown.value = true
            } else if (velocity < -1.2) {
                timeline.timeScale(velocity / 2.6).reverse()
                scrollDirectionDown.value = false
            } else {
                if (props.reverse) {
                    scrollDirectionDown.value ? timeline.timeScale(1) : timeline.timeScale(1).reverse()
                } else {
                    timeline.timeScale(1)
                }
            }
            requestAnimationFrame(moveScroll)
        }

        moveScroll()
    }

    const setTimeline = () => {
        timeline.add(createMarquee(marqueeRef.value), 0)
    }

    
    const createMarquee = (element) => {
        return gsap.timeline().to(element, {
            duration: groupLength.value / (100 * props.speed),
            ease: 'none',
            x: props.direction === 'left' ? -groupLength.value : props.direction === 'right' ? groupLength.value : 0,
            y: props.direction === 'up' ? -groupLength.value : props.direction === 'down' ? groupLength.value : 0,
            onComplete() {
                timeline.play(0)
            },
            onReverseComplete() {
                timeline.reverse(0)
            },
        })
    }
    
    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                init()
            }, 601) // reset after page transition
        })
    })

    onUnmounted(() => {
        timeline = null;
        removeAnimationFrame(moveScroll)
    })
</script>
<style lang="scss">
    $class-name: animation-marquee;
    .#{$class-name} {
        @include size(100%, auto);
        overflow: hidden;

        &__item {
            display: inline-block;
            padding-right: 3.2rem;

            @include media-breakpoint-down(medium) {
                gap: 1.2rem;
                padding-right: 0;
            }

            &.-vertical {
                @include size(100%, auto);
                
                flex-direction: column;
                align-items: center;
                padding-right: 0;
                padding-bottom: 3.2rem;

                @include media-breakpoint-down(medium) {
                    padding-bottom: 1.2rem;
                }
            }
        }

        &__wrap {
            white-space: nowrap;

            &.-vertical {
                .#{$class-name}__item {
                    display: block;
                }
            }
        }
    }
</style>