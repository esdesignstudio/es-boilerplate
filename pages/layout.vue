<template>
    <div class="page-layout">
        <div class="container">

            <div class="grid">
                <div class="col-1-9-desktop col-1-5-medium">
                    <p class="page-layout__box"></p>
                </div>
                <div class="col-2-7-medium">
                    <p class="page-layout__box"></p>
                </div>
                <div class="col-7-12-medium">
                    <p class="page-layout__box"></p>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
</template>
<script setup>
 
    const pageloaded = usePageLoaded()
    pageloaded.value = true
</script>
<style lang="scss">
    $class-name: page-layout;
    .#{$class-name} {
        min-height: 100vh;

        &__box {
            height: 5rem;
            background-color: #000;

        }
    }
</style>