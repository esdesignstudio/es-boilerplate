<template>
    <div class="page-about">
        <div class="container">
            <div class="page-about__content">
                <h1>唯有深入思考各個角度，才能真正創造出帥氣的作品<br>- <br>佐藤可士</h1>
                {{ $t('MEMBER.login') }}
                {{ $tm('MEMBER.news[2].title') }}
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>

    // const { data: pageData } = await useAsyncData(
    //     'get_page_custom-about',
    //     () => $fetch( useRuntimeConfig().apiUrl + '/get_page_custom', {
    //         method: 'POST',
    //         body: {
    //             id: 1899,
    //             // locale: locale.value 多國語言要自帶
    //         }
    //     })
    // )

    const pageloaded = usePageLoaded()
    pageloaded.value = true
        
</script>
<style lang="scss">
    $class-name: page-about;
    .#{$class-name} {
        &__content {
            height: 150vh;
            
            h1 {
                @include typo('head', 1);

                padding: 5rem 0;
            }
        }
    }
</style>