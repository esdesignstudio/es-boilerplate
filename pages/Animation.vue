<template>
    <div class="page-about">
        <div class="container">
            <div class="page-about__content">
                <h1>唯有深入思考各個角度，才能真正創造出帥氣的作品<br>- <br>佐藤可士</h1>
                <section>
                    <h2>MARQUEE</h2>
                    <h3>PARAMS</h3>
                    <div class="page-about__content-params">
                        <table>
                            <thead>
                                <tr>
                                    <th>props</th>
                                    <th>type</th>
                                    <th>default</th>
                                    <th>description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>Array</td>
                                    <td>[]</td>
                                    <td>資料</td>
                                </tr>
                                <tr>
                                    <td>type</td>
                                    <td>String</td>
                                    <td>'text'</td>
                                    <td>跑馬燈資料類型</td>
                                </tr>
                                <tr>
                                    <td>direction</td>
                                    <td>String</td>
                                    <td>'left'</td>
                                    <td>跑馬燈方向</td>
                                </tr>
                                <tr>
                                    <td>speed</td>
                                    <td>Number</td>
                                    <td>1</td>
                                    <td>跑馬燈速度</td>
                                </tr>
                                <tr>
                                    <td>reverse</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                                    <td>往回滾動時是否反轉跑馬燈方向</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>EXAMPLE</h3>
                    <div class="page-about__content-example">
                        <ElementsMarquee
                            :data="[
                                '唯有深入思考各個角度，才能真正創造出帥氣的作品'
                            ]"
                            :type="'text'"
                            :reverse="true"
                        />
                        <div class="page-about__content-example-code">
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
                    <div class="page-about__content-example">
                        <ElementsMarquee
                            :data="[
                                'https://source.unsplash.com/random/1024x768',
                                'https://source.unsplash.com/random/1024x768?fruit',
                            ]"
                            :type="'img'"
                            :direction="'right'"
                            :speed="0.5"
                        />
                        <div class="page-about__content-example-code">
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
    $class-name: page-about;
    .#{$class-name} {
        overflow: hidden;
        
        &__content {
            display: flex;
            flex-direction: column;
            gap: 12.8rem;
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
                padding: 6.4rem 0;
                border-top: 2px solid map-get($colors, black-1);
                

                &:not(:last-child) {
                    border-bottom: 2px solid map-get($colors, black-1);
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
                > table {
                    @include size(100%, auto);

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.6rem;
                    margin-bottom: 6.4rem;

                    > thead {
                        > tr {
                            border-bottom: 1px solid map-get($colors, black-1);

                            > th {
                                @include size(20rem, auto);
                                @include typo('head', 3);
    
                                padding-bottom: .8rem;
                                text-align: left;
                            }
                        }
                    }

                    > tbody {
                        display: flex;
                        flex-direction: column;
                        gap: 1.6rem;

                        > tr {
                            border-bottom: 1px solid rgba(map-get($colors, black-1), .2);

                            > td {
                                @include size(20rem, auto);
                                @include typo('head', 3);
                                
                                padding-bottom: .8rem;
                                font-weight: 400;
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
    }
</style>