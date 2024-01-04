<template>
    <div class="page-animation">
        <div class="container">
            <div class="page-animation__content">
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
                    <div class="page-animation__content-example">
                    <h3>EXAMPLE 1</h3>
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
                        <ElementsMarquee
                            :data="[
                                '唯有深入思考各個角度，才能真正創造出帥氣的作品'
                            ]"
                            :type="'text'"
                            :reverse="true"
                        />
                    </div>
                    <div class="page-animation__content-example">
                        <h3>EXAMPLE 2</h3>
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
                        <ElementsMarquee
                            :data="[
                                'https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
                                'https://images.unsplash.com/photo-1643272148406-d09ca2d79dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
                            ]"
                            :type="'img'"
                            :direction="'right'"
                            :speed="0.5"
                        />
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
                        <ElementsNumberCounter
                            :from="0"
                            :to="100"
                            :decimals="0.1"
                            :duration="3"
                            :start="'top 80%'"
                            :end="'bottom 20%'"
                        />
                    </div>
                    <div class="page-animation__content-example">
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
                        <ElementsNumberCounter
                            :enter="true"
                            :back="true"
                        />
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
                                    <td>'top top'</td>
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

                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <div
                                        class=&quot;page-animation__pin&quot;
                                        ref=&quot;pinWrapper&quot;
                                        style=&quot;width: 100%; height: 600vh;;&quot;
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
                        <div
                            class="page-animation__pin"
                            ref="pinWrapper"
                            style="width: 100%; height: 600vh;"
                        >
                            <ElementsPinHorizontal
                                :wrapper="pinWrapper"
                                :offset="96"
                                :markers="true"
                                :start="'top top'"
                                :end="'bottom bottom'"
                            >
                                <template #wrapper>
                                    <div class="page-animation__pin-wrapper">
                                        <figure>
                                            <img src="https://images.unsplash.com/photo-1601315488950-3b5047998b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                                        </figure>
                                        <figure>
                                            <img src="https://images.unsplash.com/photo-1633269540827-728aabbb7646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                                        </figure>
                                        <figure>
                                            <img src="https://images.unsplash.com/photo-1635255224530-c8cdbad2f1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60">
                                        </figure>
                                        <figure>
                                            <img src="https://images.unsplash.com/photo-1635352722201-658b98c5b501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                                        </figure>
                                        <figure>
                                            <img src="https://images.unsplash.com/photo-1601315488950-3b5047998b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                                        </figure>
                                        <figure data-scroll>
                                            <img src="https://images.unsplash.com/photo-1633269540827-728aabbb7646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                                        </figure>
                                    </div>
                                </template>
                            </ElementsPinHorizontal>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="Locomotive Scroll event-progress"
                        />
                    </h2>
                    <h3>PARAMS</h3>
                    <div class="page-animation__content-params">
                        <p>請參閱Locomotive Scroll <nuxt-link to="https://scroll.locomotive.ca/docs/#/attributes?id=data-scroll-event-progress" target="_blank">官方文件</nuxt-link></p>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <div
                                        data-scroll
                                        data-scroll-event-progress=&quot;progressEvent&quot;
                                        v-text=&quot;elementProgress&quot;
                                    >
                                    </div>
                                `"
                            />
                            <ElementsCode
                                language="javascript"
                                :data="`
                                    const elementProgress = ref(0)

                                    window.addEventListener('progressEvent', (e) => {
                                        const { progress } = e.detail
                                        elementProgress.value = progress
                                    })
                                `"
                            />
                        </div>
                        <div
                            style="width: 10rem; height: 10rem;background-color: #000; color: #fff; display: flex; justify-content: center; align-items: center;"
                            data-scroll
                            data-scroll-event-progress="progressEvent"
                            v-text="`${elementProgress}%`"
                        ></div>
                    </div>
                </section>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="Locomotive Scroll speed"
                        />
                    </h2>
                    <h3>PARAMS</h3>
                    <div class="page-animation__content-params">
                        <p>請參閱Locomotive Scroll <nuxt-link to="https://scroll.locomotive.ca/docs/#/attributes?id=data-scroll-speed" target="_blank">官方文件</nuxt-link></p>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <div
                                        data-scroll
                                        data-scroll-speed=&quot;-.1&quot;
                                    ></div>
                                `"
                            />
                        </div>
                        <div style="display: flex; gap: 1.6rem; width: 100%; height: 100vh; justify-content: center; align-items: center;">
                            <div
                                style="width: 10rem; height: 10rem;background-color: #000; color: #fff; display: flex; justify-content: center; align-items: center;"
                                data-scroll
                                data-scroll-speed="-.1"
                                v-text="-.1"
                            ></div>
                            <div
                                style="width: 10rem; height: 10rem;background-color: #000; color: #fff; display: flex; justify-content: center; align-items: center;"
                                data-scroll
                                data-scroll-speed="0"
                                v-text="0"
                            ></div>
                            <div
                                style="width: 10rem; height: 10rem;background-color: #000; color: #fff; display: flex; justify-content: center; align-items: center;"
                                data-scroll
                                data-scroll-speed=".5"
                                v-text=".5"
                            ></div>
                            <div
                                style="width: 10rem; height: 10rem;background-color: #000; color: #fff; display: flex; justify-content: center; align-items: center;"
                                data-scroll
                                data-scroll-speed="-.2"
                                v-text="-2"
                            ></div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>
                        <ElementsSlideUpEach
                            text="ES Share"
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
                                    <td>data.url</td>
                                    <td>String</td>
                                    <td>''</td>
                                    <td>分享連結</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>data.socialMedia</td>
                                    <td>String</td>
                                    <td>''</td>
                                    <td>社群媒體(僅桌機版適用)</td>
                                    <td>Facebook, Line, Twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-animation__content-example">
                        <div class="page-animation__content-example-code">
                            <ElementsCode
                                language="html"
                                :data="`
                                    <button
                                        @click=&quot;esShareTo({
                                            url: 'https://source.unsplash.com/random/1024x768',
                                            socialMedia: 'Facebook'
                                        })&quot;
                                    >
                                        share
                                    </button>
                                `"
                            />
                        </div>
                        <button
                            style="display: block; background-color: #000; padding: 2rem; color: #fff; width: 24rem; border-radius: .8rem;"
                            @click="esShareTo({
                                url: 'https://source.unsplash.com/random/1024x768',
                                socialMedia: 'Facebook'
                            })"
                        >
                            share
                        </button>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>


    const pageloaded = usePageLoaded()
    pageloaded.value = true
    
    const pageTitle = ref('Animation')
    const route = useRoute()

    const pinWrapper = ref(null)
    const elementProgress = ref(0)

    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                window.addEventListener('progressEvent', (e) => {
                    const { progress } = e.detail
                    // round to 0 decimal places
                    elementProgress.value = Math.round(progress * 100)
                })
            }, 601);
        })
    })

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

        .elements-code {
            font-size: 13px;
        }
        
        &__content {
            display: flex;
            flex-direction: column;
            padding-bottom: 20rem;
            
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

                h2 {
                    @include typo('display', 1);

                    margin-bottom: 4.8rem;
                }

                h3 {
                    @include typo('head', 2);
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
                    @include typo('body', 16);

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
                    gap: 1.6rem;
                }
            }
        }

        &__pin {

            &::after {
                @include typo('head', 2);

                // content: '#Pined Frame';
                position: absolute;
                top: 2.4rem;
                left: 2.4rem;
            }

            &-wrapper {
                display: flex;
                gap: 2.4rem;
                white-space: nowrap;

                > figure {
                    flex: 0 0 auto;
                    @include size(80vw, 100vh);
    
                    > img {
                        @include size(100%);
                        
                        object-fit: cover;
                    }
                }
            }

        }
    }
</style>