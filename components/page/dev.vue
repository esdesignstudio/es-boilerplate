<template>
    <div class="dev container">
        <div class="grid">
            <div v-for="num in 12" :key="num" />
            <div v-for="num in 8" :key="num" />
            <div v-for="num in 4" :key="num" />
        </div>
    </div>
</template>
<style lang="scss">
    .dev {
        @include size(100vw, 100vh);

        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 50%;
        z-index: 999;
        transform: translateX(-50%);
        pointer-events: none;
        
        .grid > div {
            @include size(100%, 100vh);
            border-left: 1px solid rgba(0,0,0,.05);
            border-right: 1px solid rgba(0,0,0,.05);
        }
    }
</style>