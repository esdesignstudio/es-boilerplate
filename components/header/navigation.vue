<template>
    <div class="navigation-main">
        <ul>
            <li
                v-for="(item, index) in navs"
                :key="index"
            >
                <NuxtLink
                    :to="item.link"
                    :title="item.title"
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
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
            link: '/Animation',
        }, {
            name: 'Form',
            link: '/form',
        },
    ])
</script>
<style lang="scss">
$class-name: navigation-main;
.#{$class-name} {
    ul {
        gap: 2rem;
        display: flex;

        li {
            a {
                &:hover {
                    opacity: .5;
                }
            }
        }
    }
}
</style>