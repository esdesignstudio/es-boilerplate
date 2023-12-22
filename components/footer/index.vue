<template>
    <div class="footer">
        <div class="container">
            <div class="footer__wrap grid">
                <div class="footer__logo col-1-4-mobile">
                    <NuxtLink to="" target="_blank">
                        © 2024 ES Design
                    </NuxtLink>
                </div>
                <div class="footer__navigation col-4-13-mobile">
                    <FooterNavigation />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    
</script>
<style lang="scss">
$class-name: footer;
.#{$class-name} {
    margin-top: 10rem;
    padding: 3rem 0 10rem;

}
</style>