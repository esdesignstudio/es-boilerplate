<template>
    <div class="page-swiper">
        <Swiper
            :modules="[SwiperParallax]"
            :centered-slides="true"
            :loop="true"
            :parallax="true"
            :grab-cursor="true"
        >
            <SwiperSlide
                v-for="(item, index) in imgArray"
                :key="index"
            >
                <div class="page-swiper__image" >
                    <div data-swiper-parallax="800" :style="`background-image: url('${item}')`"></div>
                </div>
                <div class="page-swiper__text container">
                    <div class="grid">
                        <div class="col-1-13-mobile">
                            <h2>AMAZING ES</h2>
                        </div>
                        <div class="col-9-13-mobile">
                            <p>From strategy to deployment and maintenance, we're the ultimate digital one-stop shop. Over the past 5 years, ES has become a go-to for meaningful, innovative, results-driven digital experiences, web design and branding. Freshness guaranteed.</p>
                        </div>
                        <div class="col-1-7-mobile">
                            <h2>{{index + 1}}</h2>
                        </div>
                    </div>
                </div>
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

        &__image {
            width: 100%;
            height: 80vh;
            overflow: hidden;
            position: relative;
            z-index: 1;

            div {
                @include size(100%);
                background-size: cover;
            }
        }
        &__text {
            
            position: absolute;
            left: 0;
            top: 2rem;
            z-index: 2;

            h2 {
                @include typo('display', 1);
            }
        }
    }
</style>