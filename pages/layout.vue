<template>
    <div class="page-layout">
        <div class="container">

            <div class="grid -col-4 -col-12@from-medium -gutters">
                <div class="grid_item col1-9">
                    <p class="page-layout__box"></p>
                </div>
                <div class="grid_item col1-9@from-small col3-13@from-medium ">
                    <p class="page-layout__box"></p>
                </div>
                <div class="grid_item col1-9@from-small col5-11@from-medium ">
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