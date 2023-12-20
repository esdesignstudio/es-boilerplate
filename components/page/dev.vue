<template>
    <div class="dev">
        <div 
            class="dev__wrap container"
            :class="{'-active': devSwitch}"
        >
            <div class="grid">
                <div v-for="num in 12" :key="num" />
                <div v-for="num in 8" :key="num" />
                <div v-for="num in 4" :key="num" />
            </div>
        </div>
        <div class="dev__switch">
            <span>Column 顯示</span>
            <i></i>
            <button type="button" :class="{'-active': !devSwitch}" @click="devSwitch = false">關閉</button>
            <button type="button" :class="{'-active': devSwitch}" @click="devSwitch = true">開啟</button>
        </div>
    </div>
</template>
<script setup>
    const devSwitch = ref(false)
    onMounted(() => {
        // 快速鍵開啟
        console.log("%cShift + Option + C Toggle DevColmns", "border-left:10px solid #ffe800;border-color:#ffe800;background:#000000;padding:5px 15px;border-radius:5px; color:#ffffff;font-size:10px;");
        window.addEventListener('keydown', (e) => {
            if (e.shiftKey && e.altKey && e.code === 'KeyC') {
                devSwitch.value = !devSwitch.value
            }
        })
    
    })
</script>
<style lang="scss">
    .dev {
        &__wrap {
            @include size(100vw, 100vh);

            position: fixed;
            flex-direction: column;
            top: 0;
            left: 50%;
            z-index: 999;
            transform: translateX(-50%);
            pointer-events: none;
            display: none;
            
            &.-active {
                display: flex;
            }
        
            .grid > div {
                @include size(100%, 100vh);
                border-left: 1px solid rgba(0,0,0,.1);
                border-right: 1px solid rgba(0,0,0,.1);
            }
        }

        &__switch {
            z-index: 999;
            height: 30px;
            left: 10px;
            bottom: 10px;
            font-size: 0.7em;
            border-radius: 50px;
            color: rgba(255,255,255,.8);
            position: fixed;
            background: #000000;
            padding:5px 15px;
            display: flex;
            align-items: center;
            gap: 1rem;
            backdrop-filter: blur(10px);
            box-shadow: 2px 2px 8px rgba(0,0,0,0.5);

            > span {
                font-size: .7em;
            }

            > i {
                border-left: 1px solid rgba(136, 136, 136, 0.4);
                width: 1px;
                height: 10px;
            }

            > button {
                opacity: .5;
                
                &.-active {
                    opacity: 1;
                }
            }
        }
    }
</style>