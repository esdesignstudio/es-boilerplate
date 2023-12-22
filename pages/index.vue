<template>
    <div class="page-index">
        <div class="container">
            <div class="page-index__title">
                <h1>
                    <ElementsSlideUpEach
                        text="ES BOILERPLATE"
                    />
                </h1>
                
            </div>
            <div class="grid">
                <div class="page-index__img col-1-9-mobile">
                    <img src="https://images.unsplash.com/photo-1703165805602-54276ce0cd6b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="page-index__text col-11-13-mobile">
                    <p>The details are not the details. They make the design.</p>
                    <img src="https://images.unsplash.com/photo-1702314876402-8f64d97030a2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>


    const pageloaded = usePageLoaded()
    pageloaded.value = true

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
        &__title {
            margin-bottom: 2rem;
            
            h1 {
                @include typo('display', 1);
                font-size: 11.6vw;
                margin-left: -0.3vw
            }
        }
        &__text {
            padding-top: 10rem;
        }
    }
</style>