<template>
    <div
        class="elements-marquee"
        ref="marqueeRef"
    >
        <div
            class="elements-marquee__group"
            v-for="(item, key) in 5"
            :key="key"
            ref="marqueeGroupRef"
        >
            <div
                class="elements-marquee__group-item"
                v-for="(item, key) in data"
                :key="key"
            >
                <figure v-if="type === 'img'">
                    <img :src="item">
                </figure>
                <p
                    v-if="type === 'text'"
                    v-text="item"
                ></p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import gsap from "gsap"

    const props = defineProps({
        data: {
            type: Array,
            default: [],
        },
        type: {
            type: String,
            default: 'text',
        },
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
    let timeline
    const scrollDirectionDown = ref(true)

    const init = () => {
        timeline = gsap.timeline()
        
        setTimeline()
    }

    const setTimeline = () => {
        timeline.add(createMarquee(marqueeRef.value), 0)
    }

    
    const createMarquee = (element) => {
        return gsap.timeline().to(element, {
            duration: groupLength.value / (100 * props.speed),
            ease: 'none',
            x: props.direction === 'left' ? -groupLength.value : groupLength.value,
            onComplete() {
                timeline.play(0)
            },
            onReverseComplete() {
                timeline.reverse(0)
            },
        })
    }
    const { $LCscroll } = useNuxtApp()
    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                groupLength.value = marqueeGroupRef.value[0].clientWidth
                init()
                $LCscroll.lenisInstance.on("scroll", (e) => {
                    if (e.velocity > 1.2) {
                        timeline.timeScale(e.velocity / 2.6)
                        scrollDirectionDown.value = true
                    } else if (e.velocity < -1.2) {
                        timeline.timeScale(e.velocity / 2.6).reverse()
                        scrollDirectionDown.value = false
                    } else {
                        if (props.reverse) {
                            scrollDirectionDown.value ? timeline.timeScale(1) : timeline.timeScale(1).reverse()
                        } else {
                            timeline.timeScale(1)
                        }
                    }
                })
            }, 601) // reset after page transition
        })
    })
</script>
<style lang="scss">
    $class-name: elements-marquee;
    .#{$class-name} {
        @include size(100%, auto);
        
        display: flex;
        justify-content: center;

        &__group {
            display: flex;
            justify-content: center;
            flex: 0 0 auto;
            gap: 3.2rem;
            padding-right: 3.2rem;

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;

                > figure {
                    @include size(55vw, auto);
                    @include aspect(0.7);

                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    > img {
                        @include size(100%);

                        position: absolute;
                        object-fit: cover;
                    }
                }

                > p {
                    font-size: 15vw;
                    font-weight: bolder;
    
                    flex: 0 0 auto;
                }
            }
        }
    }
</style>