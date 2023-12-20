<template>
    <div class="page-index">
        <div class="container">
            <div class="page-index__content">
                <h1>
                    <ElementsSlideUpEach
                        text="The details are not the details. They make the design."
                    />
                    <b data-scroll>細節不單只是細節，它們成就了設計<br>我們追求那小小會心一驚的設計</b>
                </h1>
                {{ $t('welcome', { msg: '我是變數' }) }}
            </div>

        </div>
        <Footer />
    </div>
</template>
<script setup>


    const pageloaded = usePageLoaded()
    pageloaded.value = true

    onMounted(() => {
        console.log(window.navigator)
    })

    console.log('env', process.env.NODE_ENV)

    const route = useRoute()
    useHead({
        titleTemplate: useRuntimeConfig().public.siteName, // Home page usually use slogan or custom site name 
        meta: useMetaReturn({
            title: useRuntimeConfig().public.siteName,
            description: '要接 API',
            image: '要接 API',
            url: useRuntimeConfig().public.siteUrl + route.path
        })
    })
</script>
<style lang="scss">
    $class-name: page-index;
    .#{$class-name} {
        &__content {
            height: 100vh;

            &-box {
                width: 10rem;
                height: 50vh;
                margin-bottom: 10rem;
                background-color: #000;
            }
            
            h1 {
                @include typo('display', 1);

                > b {
                    @include typo('head', 2);

                    display: block;
                    margin: 6rem auto;
                }

                .text-slideup__item {
                    line-height: 1.2;
                    margin-bottom: -1.5vw;

                }
            }
        }
    }
</style>