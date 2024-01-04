<template>
    <div id="wrapper" class="wrapper">
        <NuxtLoadingIndicator />
        <Header />
        <main data-scroll-container>
            <NuxtPage />
        </main>
        <PageDev/>
    </div>
</template>

<script setup>

    
</script>

<style lang="scss">
    main {
        will-change: opacity;
        opacity: 0;
        padding-top: 22rem;
        transition: opacity .4s;
    }
    
    body.is-loaded {
        main {
            opacity: 1;
        }
    }
</style>