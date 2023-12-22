<template>
    <div class="page-swiper">
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="2"
            :centered-slides="true"
            :loop="true"
            :space-between="16"
        >
            <SwiperSlide
                v-for="(item, index) in imgArray"
                :key="index"
            >
                <img :src="item" alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
    // 此版本的 Swiper 不足數時會有空白，至少要有畫面的兩倍數量 Dom
    
    const pageloaded = usePageLoaded()
    pageloaded.value = true

    const imgArray = ref([
        'https://images.unsplash.com/photo-1636837955417-2d8a4e49368f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1636306950045-4dbb10b7e0f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1636837955417-2d8a4e49368f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1636837955417-2d8a4e49368f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1636306950045-4dbb10b7e0f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1636837955417-2d8a4e49368f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ])
</script>
<style lang="scss">
    $class-name: page-swiper;
    .#{$class-name} {
    }
</style>