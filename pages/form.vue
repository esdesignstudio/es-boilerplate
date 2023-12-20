<template>
    <div class="display-form">
        <div class="container">
            <h1>
                <ElementsSlideUpEach
                    text="Form display"
                />
                <b data-scroll>表單範例</b>
            </h1>
            <div class="display-form__content grid">
                <div class="col-1-7-mobile">
                    <h2>基本表單</h2>
                    <FormKit
                        type="form"
                        id="login-submit"
                        incomplete-message="請填寫以上欄位"
                        :actions="false"
                        @submit="submitHandler"
                        :submit-attrs="{wrapperClass: 'es-button'}"
                    >
                        <FormKit 
                            label="電子郵件"
                            type="text"
                            name="username"
                            autocomplete
                            validation="required|email"
                            placeholder="請輸入電子郵件"
                        />
                        <div class="member-login__password">
                            <FormKit
                                type="password"
                                name="password"
                                label="密碼"
                                autocomplete
                                validation="required|length:6|matches:/[^a-zA-Z]/"
                                validation-visibility="live"
                            />
                        </div>
                    
                        <FormKit
                            type="checkbox"
                            label="記得我"
                            name="remember"
                            :value="false"
                        />

                        <FormKit
                            type="radio"
                            name="email_pref"
                            label="單選列表"
                            :options="{ daily: 'Daily', weekly: 'Weekly', monthly: 'Monthly' }"
                        />

                        <div class="member-login__form-button">
                            <FormKit
                                type="submit"
                                label="登入"
                            />
                        </div>
                    </FormKit>
                </div>
                <div class="col-7-13-mobile">
                    <h2>客製化功能範例</h2>
                    
                    <FormKit
                        type="taglist"
                        title="Multiple Select"
                        cleartext="不限制"
                        v-model="taglistData.selected"
                        :options="taglistData.options"
                    />
                    <FormKit
                        type="dropdown"
                        title="Radio Select"
                        cleartext="不限制"
                        v-model="dropdownSelected"
                        :options="taglistData.options"
                    />

                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>

    const pageloaded = usePageLoaded()
    pageloaded.value = true

    const taglistData = reactive({
            selected: [],
            options: [
                {
                    label: '選項1',
                    value: 'option1',
                }, {
                    label: '選項2',
                    value: 'option2',
                }, {
                    label: '選項3',
                    value: 'option3',
                }, {
                    label: '選項4',
                    value: 'option4',
                }, {
                    label: '選項5',
                    value: 'option5',
                }, {
                    label: '選項6',
                    value: 'option6',
                }
            ]
    })
    const dropdownSelected = ref()
    const radioSelected = ref()

    const fakeFetch = {
        post: () => new Promise(r => setTimeout(r, 2000))
    }

    const submitHandler = async (data) => {
        const res = await fakeFetch.post()
        esNotification({
            type: 'success',
            title: '表單送出',
            message: '表單已送出',
        })
        console.log('submitHandler', data)
    }

    

    const pageTitle = ref('Form display')
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
    $class-name: display-form;
    .#{$class-name} {
        padding: 5rem 0;

        h1 {
            @include typo('display', 1);

            > b {
                @include typo('head', 2);

                display: block;
                margin: 6rem auto;
            }

            .text-slideup__item {
                line-height: 1.2;
                margin-bottom: -1.5vw;

            }
        }

        &__content {
            // display: flex;
            
            h2 {
                @include typo('head', 2);

                margin-bottom: 2rem;
            }
        }
    }
</style>