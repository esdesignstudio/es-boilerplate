<template>
    <div 
        class="header-index"
        :class="{
            '-scrolled': scrolled,
        }"
    >
        <div class="container">
            <div class="header-index__wrap">
                <NuxtLink 
                    to="/"
                    class="header-index__logo"
                >
                    <nuxt-icon name="logo" />
                    ES Boilerplate
                </NuxtLink>
                <div class="header-index__navigation">
                    <HeaderNavigation />
                    {{ $t('welcome') }}
                </div>
            </div>
        </div>
    </div>
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
    padding: 6rem 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    transition: padding .3s;

    &.-scrolled {
        padding: 2rem 0;
    }

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;

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