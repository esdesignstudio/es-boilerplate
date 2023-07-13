<template>
    <header 
        class="header-index container"
        :class="{
            '-scrolled': scrolled,
        }"
    >
        <div class="header-index__wrap grid -col-4 -col-12@from-medium -gutters">
            <NuxtLink 
                to="/"
                class="header-index__logo grid_item col1-4"
            >
                <nuxt-icon name="logo" />
                ES Boilerplate
            </NuxtLink>
            <div class="header-index__navigation grid_item col5-13">
                <HeaderNavigation />
            </div>
        </div>
    </header>
</template>
<script setup>
    const scrolled = useScrolled()
    
    onMounted(() => {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY
            if (scrollY > 50) {
                scrolled.value = true
            } else {
                scrolled.value = false
            }
        })
    })
</script>
<style lang="scss">
$class-name: header-index;
.#{$class-name} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    height: 16rem;
    align-items: center;
    transition: height .3s;
    border-bottom: 1px solid rgba(0,0,0,.2);
    background-color: map-get($colors, gray);

    &.-scrolled {
        height: 10rem;
    }

    &__wrap {
        height: 100%;
        flex: 1;
        // display: flex;
        // justify-content: space-between;

        span {
            margin-right: 1rem;
            display: inline-block
        }
    }
    &__logo {
        gap: 1rem;
        font-size: 3rem;
        display: flex;
        font-weight: bolder;
        align-items: center;

        > span {
            line-height: 1;
            font-size: 4rem
        }
    }
    &__navigation {
        @include typo('head', 3);

        gap: 2rem;
        display: flex;
        align-items: center;
    }
}
</style>