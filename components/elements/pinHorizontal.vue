<template>
    <div class="elements-pin-horizontal">
        <div
            class="elements-pin-horizontal__wrapper"
            ref="contentRef"
        >
            <slot name="wrapper"></slot>
        </div>
    </div>
</template>
<script setup>
    import { gsap } from 'gsap'

    const props = defineProps({
        wrapper: {
            type: Object,
            default: {},
        },
        offset: {
            type: Number,
            default: 0,
        },
        start: {
            type: String,
            default: 'bottom bottom',
        },
        end: {
            type: String,
            default: 'bottom top',
        },
        ease: {
            type: String,
            default: 'none',
        },
        markers: {
            type: Boolean,
            default: false,
        },
    })

    const contentRef = ref(null)
    const scrollLength = ref(0)
    const scroller = ref([])

    const scrollTriggerInit = () => {
        scroller.value.push(gsap.to(contentRef.value, {
            scrollTrigger: {
                scrub: true,
                trigger: props.wrapper,
                pin: true,
                markers: props.markers,
                start: props.start,
                end: props.end,
            },
            x: -scrollLength.value,
            ease: props.ease,
        }))
    }

    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                scrollLength.value = contentRef.value.scrollWidth - window.innerWidth + props.offset
                scrollTriggerInit()
            }, 601);
        })
    })

    onUnmounted(() => {
        scroller.value.forEach((item) => {
            item.kill()
        })
    })
</script>
<style lang="scss">
    $class-name: elements-pin-horizontal;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        justify-content: flex-start;
    }
</style>