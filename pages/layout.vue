<template>
    <div class="page-layout">
        <div class="container">

            <h1>
                <ElementsSlideUpEach
                    text="Layout display"
                />
                <b data-scroll>排版展示</b>
            </h1>
            <div class="grid -align-center-y">
                <div class="col-2-8-medium">
                    <p class="page-layout__box"></p>
                </div>
                <div class="col-8-12-medium">
                    <p class="page-layout__box"></p>
                </div>
                <div class="col-2-6-medium">
                    Before you start using Yarn, you'll first need to install it on your system. There are many different ways to install Yarn, but a single one is recommended and cross-platform:
                    Before you start using Yarn, you'll first need to install it on your system. There are many different ways to install Yarn, but a single one is recommended and cross-platform:
                </div>
                <div class="col-6-12-medium">
                    <div class="grid -cols-6-mobile">
                        <p class="col-1-7-mobile page-layout__box"></p>
                        <p class="col-1-5-mobile page-layout__box"></p>
                        <p class="col-5-7-mobile page-layout__box"></p>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
</template>
<script setup>
 
    const pageloaded = usePageLoaded()
    pageloaded.value = true


    const pageTitle = ref('Layout display')
    const route = useRoute()
    useHead({
        title: pageTitle,
        meta: useMetaReturn({
            title: pageTitle,
            description: '要接 API',
            image: '要接 API',
            url: useRuntimeConfig().public.siteUrl + route.path 
        })
    })
</script>
<style lang="scss">
    $class-name: page-layout;
    .#{$class-name} {

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

        &__box {
            height: 10rem;
            background-color: #000;

        }
    }
</style>