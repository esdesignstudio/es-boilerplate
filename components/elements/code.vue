<template>
    <div
        class="elements-code"
        :class="`language-${language}`"
    >
        <pre>
            <code v-text="data"></code>
        </pre>
    </div>
</template>
<script setup>
    import Prism from 'prismjs'
    import 'prismjs/themes/prism-tomorrow.css'
    import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

    const props = defineProps({
        data: {
            type: String,
            default: '',
        },
        language: {
            type: String,
            default: 'javascript',
        },
    })

    onMounted(() => {
        Prism.plugins.NormalizeWhitespace.setDefaults({
            'remove-trailing': true,
            'remove-indent': true,
            'left-trim': true,
            'right-trim': true,
        })
        Prism.highlightAll()
    })
</script>
<style lang="scss">
    $class-name: elements-code;
    .#{$class-name} {
        padding: 0 2.4rem;
        display: flex;
        background-color: #2d2d2d;
        color: map-get($colors, white);
        border-radius: 1.6rem;
    }
</style>