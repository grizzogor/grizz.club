<template>
    <div
        :class="{
            [$style.main]: true,
            [$style.active]: isActive,
        }"
        :style="{
            top: `${this.position?.y || 0}px`,
            left: `${this.position?.x || 0}px`,
            width: `${this.size?.width || 700}px`,
            height: `${this.size?.height || 600}px`,
        }"
    >
        <TitleBar
            :txt="titleTxt"
            @move="onMove"
            @close="onClose"
            :class="{
                [$style.titlebar]: true,
                [$style.titlebarScrolled]: isScrolled,
            }"
        />
        <div :class="$style.inner" @scroll="onInnerScroll">
            <slot />
        </div>
    </div>
</template>

<script>
import TitleBar from '@/components/window/TitleBar.vue'

export default {
    name: 'WindowBase',
    components: {
        TitleBar,
    },
    emits: ['move', 'close'],
    props: {
        titleTxt: String,
        isActive: Boolean,
        position: Object,
        size: Object,
    },
    data() {
        return {
            isScrolled: false,
        }
    },
    methods: {
        onMove(diff) {
            const x = Math.max(0, this.position.x + diff.x)
            const y = Math.max(0, this.position.y + diff.y)
            this.$emit('move', { x, y })
        },

        onInnerScroll(e) {
            this.isScrolled = e.target.scrollTop > 0
        },

        onClose() {
            this.$emit('close')
        },
    },
}
</script>

<style module>
.main {
    position: absolute;
    background-color: #242424;
    border-radius: 12px;
    border-style: solid;
    border-width: 1px;
    border-color: #333333;
    overflow: hidden;

    transition: filter 0.15s ease;
}

.active {
    filter: drop-shadow(0 0 10px rgba(10, 10, 10, 0.5));
}

.inner {
    position: relative;
    z-index: 1;
    overflow: scroll;
    max-height: calc(100% - 20px);
}

.titlebar {
    position: relative;
    z-index: 2;
    transition: box-shadow 0.15s ease;
}

.titlebarScrolled {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.75);
}

@media (max-width: 700px) {
    .main {
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: auto !important;
        height: auto !important;
    }
}
</style>
