<template>
    <div class="page-animation">
        <div class="container">
            <div class="page-animation__title">
                <h1>
                    <ElementsSlideUpEach
                        text="ES ANIMATION"
                    />
                </h1>
            </div>
            <div class="page-animation__image">
                <figure>
                    <img src="https://images.unsplash.com/photo-1697300357972-2a37a8995cb4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </figure>
                <figure
                    data-scroll
                    data-scroll-speed="-0.5"
                >
                    <img 
                        data-scroll
                        data-scroll-css-progress
                        src="https://images.unsplash.com/photo-1658519387710-714d1a29376a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </figure>
            </div>
            <AnimationMarquee
                :speed="1"
                :reserve="true"
            >
                <p>Animation Marquee</p>
            </AnimationMarquee>
        </div>
        <Footer />
    </div>
</template>
<script setup>
    // 模擬讀取時間
    const pageloaded = usePageLoaded()
    onMounted(() => {
        setTimeout(() => {
            pageloaded.value = true
        }, 300)
    })
</script>
<style lang="scss">
    $class-name: page-animation;
    .#{$class-name} {

        padding-top: 5rem;

        &__title {
            margin-bottom: 2rem;
            
            h1 {
                @include typo('display', 1);
                font-size: 13.6vw;
                margin-left: -0.3vw;
            }
        }

        &__image {
            overflow: hidden;
            position: relative;

            figure {
                @include size(100%, 90vw);

                > img {
                    @include size(100%);

                    object-fit: cover;
                }

                &:last-child {
                    @include size(40vw);

                    top: 30vh;
                    left: 50%;
                    margin-left: -20vw;
                    position: absolute;

                    > img {
                        transform: scale( calc( 1 + var(--progress) ) );
                    }
                }
            }
        }
        .animation-marquee {
            @include typo('display', 1);
            font-size: 13vw;
            
        }
    }
</style>