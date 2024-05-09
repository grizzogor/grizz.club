<template>
    <WindowBase
        :id="`app-${this.appId}`"
        :titleTxt="this.getTitleText()"
        :position="this.getPosition()"
        :size="this.getSize()"
        :isActive="isActive"
        :style="{
            zIndex: this.zIndex,
        }"
        @mousedown="onMouseDown"
        @move="onMove"
        @close="onClose"
    >
        <div :class="$style.main" ref="main">
            <div :class="$style.ballz" />
            <div :class="$style.bgOverlay" />
            <img src="@/assets/apps/berry/berry.png" :class="$style.berry" />
            <img
                src="@/assets/apps/berry/bubble.png"
                :class="$style.bubble"
                :style="{ display: 'none' }"
                ref="protobubble"
            />
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'

export default {
    name: 'BerryApp',
    extends: AppBase,
    components: {
        WindowBase,
    },
    mounted() {
        this.updateTitle('Berry Blueflame')

        this.onResize({ width: 400, height: 400 })

        setInterval(() => {
            const mainEl = this.$refs.main
            if (!mainEl) {
                return
            }
            const protoBubble = this.$refs.protobubble
            if (!protoBubble) {
                return
            }

            const r = Math.random()
            if (r < 0.7) {
                return
            }

            const bubbleEl = protoBubble.cloneNode()
            bubbleEl.style.display = 'block'
            const size = `${Math.random() * 64 + 32}px`
            bubbleEl.style.width = size
            bubbleEl.style.height = size
            bubbleEl.style.left = `calc(35% + 10cqw + ${Math.random() * 100}px)`
            bubbleEl.style.top = `calc(35% + 10cqw + ${Math.random() * 100}px)`
            bubbleEl.style.animationDuration = `${1500 + Math.random() * 500}ms`
            mainEl.appendChild(bubbleEl)

            setTimeout(() => {
                bubbleEl.remove()
            }, 2000)
        }, 100)
    },
}
</script>

<style module>
.main {
    background-color: #28243c;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    container-type: inline-size;
}

.bgOverlay {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(transparent, #0c8aa0);
}

.ballz {
    position: absolute;
    z-index: 0;
    top: -800px;
    left: -800px;
    right: -800px;
    bottom: -800px;
    background-image: url('@/assets/apps/berry/bg.png');

    animation-name: ballz-anim;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes ballz-anim {
    0% {
        transform: none;
    }

    100% {
        transform: translateX(-245px) translateY(-203px);
    }
}

.berry {
    position: absolute;
    z-index: 3;
    right: 12%;
    bottom: 12%;
    width: 50cqw;
    height: 50cqw;

    animation-name: berry-anim;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes berry-anim {
    0% {
        transform: none;
    }

    10% {
        transform: translateX(5%) translateY(5%);
    }

    40% {
        transform: translateX(12%) translateY(3%);
    }

    70% {
        transform: translateX(4%) translateY(9%);
    }

    90% {
        transform: translateX(2%) translateY(2%);
    }
}

.bubble {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    width: 64px;
    height: 64px;

    animation-name: bubble-anim;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes bubble-anim {
    0% {
        transform: none;
    }

    100% {
        transform: translateX(-200px) translateY(-400px) scale(0.25);
        opacity: 0.25;
    }
}
</style>
