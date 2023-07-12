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
        padding-top: 22rem;
    }
</style>