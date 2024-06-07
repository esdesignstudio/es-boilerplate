<template>
    <div class="page-swiper">
        <div class="container">
            
            <swiper
                :slidesPerView="3"
                :space-between="50"
                :centeredSlides="true"
                :centeredSlidesBounds="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide
                    v-for="(img, index) in imgArray"
                    :key="index"
                >
                    <div class="page-swiper__image" >
                        <div :style="`background-image: url('${img}')`"></div>
                    </div>
                    <div class="page-swiper__text">
                        <div class="grid">
                            <div class="col-1-13-tablet">
                                <h3>AMAZING ES</h3>
                            </div>
                            <div class="col-9-13-tablet">
                                <p>From strategy to deployment and maintenance, we're the ultimate digital one-stop shop. Over the past 5 years, ES has become a go-to for meaningful, innovative, results-driven digital experiences, web design and branding. Freshness guaranteed.</p>
                            </div>
                            <div class="col-1-7-tablet">
                                <h3>{{index + 1}}</h3>
                            </div>
                        </div>
                    </div>

                </swiper-slide>
            </swiper>
        </div>
        <Footer />
    </div>
</template>
<script setup>

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    const pageloaded = usePageLoaded()


    const onSwiper = (swiper) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log('slide change');
    };

    const imgArray = ref([
        'https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1658988958556-72342117610f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1682845737939-a12169ff13cf?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ])

    // 模擬讀取時間
    onMounted(() => {
        setTimeout(() => {
            pageloaded.value = true
        }, 300)
    })
    
</script>
<style lang="scss">
    $class-name: page-swiper;
    .#{$class-name} {

        padding-top: 22rem;
        
        &__title {
            @include typo('display', 1);
            margin-bottom: 2rem;
            font-size: 11vw;
        }

        &__image {
            width: 100%;
            height: 80vh;
            overflow: hidden;
            position: relative;
            z-index: 1;

            div {
                @include size(100%);
                background-size: cover;
                background-position: center;
            }

            &.-threeimg {
                > div {
                    @include size(130%, 100%);
                    margin-left: -15%;
                }
            }
        }
        &__text {
            color: map-get($colors, white);
            position: absolute;
            left: 0;
            top: 2rem;
            z-index: 2;
            padding: 0 2.4rem;

            // > safari transition flicking issue
            -webkit-transform:translate3d(0,0,0);
            -webkit-backface-visibility: hidden;
            -webkit-transform-style: preserve-3d;

            h3 {
                @include typo('display', 2);
            }
        }

        .swiper {
            overflow: clip;
            margin-bottom: 1.6rem;
        }
    }
</style>