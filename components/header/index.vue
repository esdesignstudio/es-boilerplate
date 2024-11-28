<template>
    <header class="header-index">
        <div class="header-index__wrap container">
            <NuxtLink 
                to="/"
                class="header-index__logo"
            >
                <nuxt-icon name="logo" />
            </NuxtLink>
            <div class="header-index__navigation">
                <HeaderNavigation />
            </div>
            <div class="header-index__right">
                Made By ES
            </div>
        </div>
    </header>
</template>
<script setup>
    
</script>
<style lang="scss">
$class-name: header-index;
.#{$class-name} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    color: map-get($colors, gray);
    mix-blend-mode: difference;

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__logo {
        font-size: 4rem;
    }
}
</style>