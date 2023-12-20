<template>
    <div class="navigation-main grid">
        <NuxtLink
            v-for="(item, index) in navs"
            :key="index"
            :to="localePath(item.link)"
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
        }, {
            name: 'Animation',
            link: '/animation',
        }, {
            name: 'Layout',
            link: '/layout',
        }, {
            name: 'Form',
            link: '/form',
        },
    ])
</script>
<style lang="scss">
$class-name: navigation-main;
.#{$class-name} {
    @include size(100%);

    gap: map-get($gutter, desktop);
    grid-template-columns: repeat(8, 1fr);
    
    a {
        grid-column: span 2;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        border-right: 1px solid rgba(0,0,0,.2);
        border-left: 1px solid rgba(0,0,0,.2);

        span {
            z-index: 1;
            position: relative;
        }

        &:before {
            @include size(100%);
            content: '';
            left: 0;
            top: 0;
            z-index: 0;
            transform-origin: bottom;
            transform: scaleY(0);
            position: absolute;
            background-color: #000;
            transition: transform .3s cubic-bezier(0.87, 0, 0.13, 1);
        }


        &:hover {
            &:before {
                transform: scaleY(0.05);
            }
        }

        &.router-link-active {
            color: map-get($colors, gray);

            &:before {
                transform: scaleY(1);
            }
        }
    }
}
</style>