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
        </ul>
    </div>
</template>
<script setup>
    const navs = ref([
        {
            name: 'Home',
            link: '/',
        }
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