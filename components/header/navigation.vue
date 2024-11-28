<template>
    <div class="navigation-main">
        <NuxtLink
            v-for="(item, index) in navs"
            :key="index"
            :to="item.link"
            :title="item.title"
        >
            <span>{{ item.name }}</span>
        </NuxtLink>

    </div>
</template>
<script setup>
    const props = defineProps({
        template: {
            type: Object,
            default: {},
        },
    })
    const navs = ref([
        {
            name: 'Home',
            link: '/',
        },  
        {
            name: 'Swiper',
            link: '/swiper',
        },  
        {
            name: 'Animation',
            link: '/animation',
        }
    ])
</script>
<style lang="scss">
$class-name: navigation-main;
.#{$class-name} {
    @include typo('head', 3);

    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 1.4rem;
    transform: translateX(-50%);
    position: absolute;
    
    a {
        position: relative;

        &:before {
            @include size(100%, 2px);
            content: '';
            left: 0;
            bottom: 0;
            z-index: 0;
            transform-origin: bottom;
            transform: scaleX(0);
            transform-origin: 0 0;
            position: absolute;
            background-color: map-get($colors, gray);
            transition: transform .3s cubic-bezier(0.87, 0, 0.13, 1);
        }


        &:hover {
            &:before {
                transform-origin: 100% 0;
                transform: scaleX(1);
            }
        }

        &.router-link-active {

            &:before {
                transform-origin: 100% 0;
                transform: scaleX(1);
            }
        }
    }
}
</style>