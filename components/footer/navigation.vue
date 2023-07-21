<template>
    <div class="footer-navigation">
        <ul>
            <li
                v-for="(item, index) in navs"
                :key="index"
            >
                <NuxtLink
                    :to="item.link"
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
            <li>
                <NuxtLink
                    :to="switchLocalePath('en')"
                >
                    語言切換
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
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
    $class-name: footer-navigation;
    .#{$class-name} {
        ul {
            display: flex;
            justify-content: flex-end;

            li {
                margin-left: 4rem;
            }
        }
    }
</style>