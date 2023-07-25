<template>
    <div class="page-animation">
        <div class="container">
            <div class="page-animation__content">
                <h1>唯有深入思考各個角度，才能真正創造出帥氣的作品<br>- <br>佐藤可士</h1>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="MARQUEE"
                        />
                    </h2>
                    <h3>PARAMS</h3>
                    <div class="page-animation__content-params">
                        <table>
                            <thead>
                                <tr>
                                    <th>props</th>
                                    <th>type</th>
                                    <th>default</th>
                                    <th>description</th>
                                    <th>available params</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>Array</td>
                                    <td>[]</td>
                                    <td>資料</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>type</td>
                                    <td>String</td>
                                    <td>'text'</td>
                                    <td>跑馬燈資料類型</td>
                                    <td>text, img</td>
                                </tr>
                                <tr>
                                    <td>direction</td>
                                    <td>String</td>
                                    <td>'left'</td>
                                    <td>跑馬燈方向</td>
                                    <td>left, right</td>
                                </tr>
                                <tr>
                                    <td>speed</td>
                                    <td>Number</td>
                                    <td>1</td>
                                    <td>跑馬燈速度</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>reverse</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                                    <td>往回滾動時是否反轉跑馬燈方向</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <ElementsMarquee
                            :data="[
                                '唯有深入思考各個角度，才能真正創造出帥氣的作品'
                            ]"
                            :type="'text'"
                            :reverse="true"
                        />
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <ElementsMarquee
                                        :data=&quot;[
                                            '唯有深入思考各個角度，才能真正創造出帥氣的作品'
                                        ]&quot;
                                        :type=&quot;'text'&quot;
                                        :reverse=&quot;true&quot;
                                    />
                                `"
                            />
                        </div>
                    </div>
                    <div class="page-animation__content-example">
                        <ElementsMarquee
                            :data="[
                                'https://source.unsplash.com/random/1024x768',
                                'https://source.unsplash.com/random/1024x768?fruit',
                            ]"
                            :type="'img'"
                            :direction="'right'"
                            :speed="0.5"
                        />
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <ElementsMarquee
                                        :data=&quot;[
                                            'https://source.unsplash.com/random/1024x768',
                                            'https://source.unsplash.com/random/1024x768?fruit',
                                        ]&quot;
                                        :type=&quot;'img'&quot;
                                        :direction=&quot;'right'&quot;
                                        :speed=&quot;0.5&quot;
                                    />
                                `"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="NUMBER COUNTER"
                        />
                    </h2>
                    <h3>PARAMS</h3>
                    <div class="page-animation__content-params">
                        <table>
                            <thead>
                                <tr>
                                    <th>props</th>
                                    <th>type</th>
                                    <th>default</th>
                                    <th>description</th>
                                    <th>available params</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>from</td>
                                    <td>Number</td>
                                    <td>0</td>
                                    <td>數字起始值</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>to</td>
                                    <td>Number</td>
                                    <td>100</td>
                                    <td>數字結束值</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>decimals</td>
                                    <td>Number</td>
                                    <td>1</td>
                                    <td>小數點位數</td>
                                    <td>1, 0.1, 0.01...</td>
                                </tr>
                                <tr>
                                    <td>duration</td>
                                    <td>Number</td>
                                    <td>1</td>
                                    <td>動畫時間</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ease</td>
                                    <td>String</td>
                                    <td>'power4.out'</td>
                                    <td>動畫效果</td>
                                    <td>power4.out, power4.in, power4.inOut...</td>
                                </tr>
                                <tr>
                                    <td>start</td>
                                    <td>String</td>
                                    <td>'top 100%'</td>
                                    <td>動畫開始位置<br><span>第一個參數為元素開始位置，第二個參數為視窗開始位置</span></td>
                                    <td>top 100%, bottom-=80 0%, center+=50 50%...</td>
                                </tr>
                                <tr>
                                    <td>end</td>
                                    <td>String</td>
                                    <td>'bottom 0%'</td>
                                    <td>動畫結束位置<br><span>第一個參數為元素結束位置，第二個參數為視窗結束位置</span></td>
                                    <td>top 100%, bottom-=80 0%, center+=50 50%...</td>
                                </tr>
                                <tr>
                                    <td>enter</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                                    <td>是否在再次進場時重新執行動畫</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>back</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                                    <td>是否在往回滾動時重新執行動畫</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>markers</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                                    <td>是否顯示動畫觸發點（開發用）</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <ElementsNumberCounter
                            :from="0"
                            :to="100"
                            :decimals="0.1"
                            :duration="3"
                            :start="'top 80%'"
                            :end="'bottom 20%'"
                        />
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <ElementsNumberCounter
                                        :from=&quot;0&quot;
                                        :to=&quot;100&quot;
                                        :decimals=&quot;0.1&quot;
                                        :duration=&quot;3&quot;
                                        :start=&quot;'top 80%'&quot;
                                        :end=&quot;'bottom 20%'&quot;
                                    />
                                `"
                            />
                        </div>
                    </div>
                    <div class="page-animation__content-example">
                        <ElementsNumberCounter
                            :enter="true"
                            :back="true"
                        />
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <ElementsNumberCounter
                                        :enter=&quot;true&quot;
                                        :back=&quot;true&quot;
                                    />
                                `"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="PIN HORIZONTAL"
                        />
                    </h2>
                    <h3>PARAMS</h3>
                    <div class="page-animation__content-params">
                        <table>
                            <thead>
                                <tr>
                                    <th>props</th>
                                    <th>type</th>
                                    <th>default</th>
                                    <th>description</th>
                                    <th>available params</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>wrapper</td>
                                    <td>Object</td>
                                    <td>{}</td>
                                    <td>固定滾動元素</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>offset</td>
                                    <td>Number</td>
                                    <td>0</td>
                                    <td>滾動偏移量</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>start</td>
                                    <td>String</td>
                                    <td>'bottom bottom'</td>
                                    <td>固定滾動元素開始位置<br><span>第一個參數為元素開始位置，第二個參數為視窗開始位置</span></td>
                                    <td>top 100%, bottom-=80 0%, center+=50 50%...</td>
                                </tr>
                                <tr>
                                    <td>end</td>
                                    <td>String</td>
                                    <td>'bottom top'</td>
                                    <td>固定滾動元素結束位置<br><span>第一個參數為元素結束位置，第二個參數為視窗結束位置</span></td>
                                    <td>top 100%, bottom-=80 0%, center+=50 50%...</td>
                                </tr>
                                <tr>
                                    <td>ease</td>
                                    <td>String</td>
                                    <td>'none'</td>
                                    <td>動畫效果</td>
                                    <td>power4.out, power4.in, power4.inOut...</td>
                                </tr>
                                <tr>
                                    <td>markers</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                                    <td>是否顯示動畫觸發點（開發用）</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <div
                            class="page-animation__pin"
                            ref="pinWrapper"
                            style="width: 100%; height: 100vh; margin-bottom: 100vh;"
                        >
                            <ElementsPinHorizontal
                                :wrapper="pinWrapper"
                                :offset="96"
                            >
                                <template #wrapper>
                                    <div class="page-animation__pin-wrapper">
                                        <figure>
                                            <img src="https://source.unsplash.com/random/1024x768">
                                        </figure>
                                        <figure>
                                            <img src="https://source.unsplash.com/random/1024x768?fruit">
                                        </figure>
                                        <figure>
                                            <img src="https://source.unsplash.com/random/1024x768">
                                        </figure>
                                        <figure>
                                            <img src="https://source.unsplash.com/random/1024x768?fruit">
                                        </figure>
                                        <figure>
                                            <img src="https://source.unsplash.com/random/1024x768">
                                        </figure>
                                        <figure>
                                            <img src="https://source.unsplash.com/random/1024x768?fruit">
                                        </figure>
                                    </div>
                                </template>
                            </ElementsPinHorizontal>
                        </div>
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <div
                                        class=&quot;page-animation__pin&quot;
                                        ref=&quot;pinWrapper&quot;
                                        style=&quot;width: 100%; height: 100vh; margin-bottom: 100vh;&quot;
                                    >
                                        <ElementsPinHorizontal
                                            :wrapper=&quot;pinWrapper&quot;
                                            :offset=&quot;96&quot;
                                        >
                                            <template #wrapper>
                                                <div class=&quot;page-animation__pin-wrapper&quot;>
                                                    <figure>
                                                        <img src=&quot;https://source.unsplash.com/random/1024x768&quot;>
                                                    </figure>
                                                    <figure>
                                                        <img src=&quot;https://source.unsplash.com/random/1024x768?fruit&quot;>
                                                    </figure>
                                                    <figure>
                                                        <img src=&quot;https://source.unsplash.com/random/1024x768&quot;>
                                                    </figure>
                                                    <figure>
                                                        <img src=&quot;https://source.unsplash.com/random/1024x768?fruit&quot;>
                                                    </figure>
                                                    <figure>
                                                        <img src=&quot;https://source.unsplash.com/random/1024x768&quot;>
                                                    </figure>
                                                    <figure>
                                                        <img src=&quot;https://source.unsplash.com/random/1024x768?fruit&quot;>
                                                    </figure>
                                                </div>
                                            </template>
                                        </ElementsPinHorizontal>
                                    </div>
                                `"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="NUXT SWIPER"
                        />
                    </h2>
                    <h3>PARAMS</h3>
                    <div class="page-animation__content-params">
                        <p>請參閱nuxt-swiper <nuxt-link to="https://github.com/cpreston321/nuxt-swiper" target="_blank">Github</nuxt-link></p>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <div style="width: 100%;">
                            <Swiper
                                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                                :slides-per-view="1"
                                :loop="true"
                                :effect="'creative'"
                                :autoplay="{
                                    delay: 8000,
                                    disableOnInteraction: true,
                                }"
                                :creative-effect="{
                                    prev: {
                                        shadow: false,
                                        translate: ['-20%', 0, -1],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }"
                            >
                                <SwiperSlide>
                                    <figure>
                                        <img src="https://source.unsplash.com/random/1024x768">
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <img src="https://source.unsplash.com/random/1024x768?fruit">
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <Swiper
                                        :modules=&quot;[SwiperAutoplay, SwiperEffectCreative]&quot;
                                        :slides-per-view=&quot;1&quot;
                                        :loop=&quot;true&quot;
                                        :effect=&quot;'creative'&quot;
                                        :autoplay=&quot;{
                                            delay: 8000,
                                            disableOnInteraction: true,
                                        }&quot;
                                        :creative-effect=&quot;{
                                            prev: {
                                                shadow: false,
                                                translate: ['-20%', 0, -1],
                                            },
                                            next: {
                                                translate: ['100%', 0, 0],
                                            },
                                        }&quot;
                                    >
                                        <SwiperSlide>
                                            <figure>
                                                <img src=&quot;https://source.unsplash.com/random/1024x768&quot;>
                                            </figure>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <figure>
                                                <img src=&quot;https://source.unsplash.com/random/1024x768?fruit&quot;>
                                            </figure>
                                        </SwiperSlide>
                                    </Swiper>
                                `"
                            />
                        </div>
                    </div>
                </section>
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
    
    const pageTitle = ref('Animation')
    const route = useRoute()

    const pinWrapper = ref(null)
    useHead({
        title: pageTitle,
        meta: useMetaReturn({
            title: pageTitle,
            description: '要接 API',
            image: '要接 API',
            url: useRuntimeConfig().public.siteUrl + route.path 
        })
    })
</script>
<style lang="scss">
    $class-name: page-animation;
    .#{$class-name} {
        overflow: hidden;
        
        &__content {
            display: flex;
            flex-direction: column;
            padding-bottom: 12.8rem;
            
            h1 {
                @include typo('head', 1);

                padding: 5rem 0;
            }

            section {
                @include size(100%, auto);

                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 12.8rem 0;
                
                border-bottom: 2px solid map-get($colors, black-1);
                

                &:nth-child(2) {
                    border-top: 2px solid map-get($colors, black-1);
                }

                > h2 {
                    @include typo('display', 1);

                    margin-bottom: 4.8rem;
                }

                > h3 {
                    @include typo('display', 2);
                    margin-bottom: 2.4rem;
                }
            }

            &-params {
                @include size(100%, auto);

                margin-bottom: 6.4rem;

                > p {
                    @include typo('head', 3);

                    > a {
                        color: map-get($colors, warning);
                    }
                }

                > table {
                    @include size(100%, auto);

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.6rem;

                    > thead {
                        @include size(100%, auto);

                        > tr {
                            display: flex;
                            border-bottom: 1px solid map-get($colors, black-1);

                            > th {
                                @include typo('head', 3);
    
                                flex: 1;
                                text-align: left;
                                padding-right: 2rem;
                                padding-bottom: .8rem;

                                &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                                    flex: 0.6;
                                }
                            }
                        }
                    }

                    > tbody {
                        @include size(100%, auto);

                        display: flex;
                        flex-direction: column;
                        gap: 1.6rem;

                        > tr {
                            display: flex;
                            border-bottom: 1px solid rgba(map-get($colors, black-1), .2);

                            > td {
                                @include typo('head', 3);
                                
                                flex: 1;
                                padding-right: 2.4rem;
                                padding-bottom: .8rem;
                                min-width: 24;

                                &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                                    flex: 0.6;
                                }
                                
                                > span {
                                    font-weight: 400;
                                    font-size: 1.4rem;
                                }
                            }
                        }
                    }
                }
            }

            &-example {
                @include size(100%, auto);

                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 3.2rem;

                &:not(:last-child) {
                    margin-bottom: 6.4rem;
                    padding-bottom: 6.4rem;
                    border-bottom: 1px solid rgba(map-get($colors, black-1), .5);
                }

                &-code {
                    @include size(100%, auto);

                    display: flex;
                    justify-content: flex-start;
                }
            }
        }

        &__pin {
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid map-get($colors, black-1);
            border-radius: 1.6rem;

            &::after {
                @include typo('head', 2);

                content: '#Pined Frame';
                position: absolute;
                top: 2.4rem;
                left: 2.4rem;
            }

            &-wrapper {
                display: flex;
                gap: 2.4rem;

                > figure {
                    @include size(32rem, auto);
                    @include aspect(0.75);
    
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
    
                    > img {
                        @include size(100%);
    
                        position: absolute;
                        object-fit: cover;
                    }
                }
            }

        }
    }
</style>