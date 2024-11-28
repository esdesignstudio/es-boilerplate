<template>
    <div 
        class="text-slideup" 
        translate="no"
        data-scroll
    >
        <div
            v-for="(txt, index) in textAry"
            :key="index"
            class="text-slideup__item"
        >
            <span v-if="txt !== ' '" v-text="txt"></span>
            <div v-else v-text="'&nbsp;'"></div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        text: {
            type: String,
            default: '',
        },
    })
    let textAry = []
    props?.text.split(' ').forEach((txt) => {
        textAry.push(txt)
    })
</script>
<style lang="scss">
$class-name: text-slideup;
.#{$class-name} {
    display: flex;
    flex-wrap: wrap;
    gap: 2.2%;

    &__item {
        line-height: 1;
        overflow: hidden;
        
        span {
            opacity: 0;
            display: block;
            will-change: transform, opacity;
            transform: translate3d(0, 100%, 0);
            transition: transform 1s cubic-bezier(0.87, 0, 0.13, 1), opacity 1s;
        }

        @for $i from 2 through 20 {
            &:nth-child(#{$i}) {
                span {
                    transition-delay: calc((#{$i} / 20 ) * 1s);
                }
            }
        }
    }
}
body.is-loaded {
    .is-inview {
        .#{$class-name} {
            &__item span {
                opacity: 1; 
                transform: translate3d(0, 0, 0);
            }
        }
    }
}
</style>