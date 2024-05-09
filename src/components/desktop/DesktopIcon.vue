<template>
    <div
        :class="{
            [$style.main]: true,
            [$style.active]: isActive,
        }"
        @pointerdown="handleClick"
        @dblclick="handleDoubleClick"
    >
        <img :src="getIconUrl()" :class="$style.icon" alt="Desktop icon" />
        <span :class="$style.text">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'DesktopIcon',
    emits: ['launch', 'activate'],
    props: {
        icon: String,
        text: String,
        isActive: Boolean,
    },
    methods: {
        getIconUrl() {
            const images = require.context(
                '@/assets/img/desktop/icons',
                false,
                /\.png$/
            )
            return images('./' + this.icon + '.png')
        },

        handleClick(e) {
            if (e.pointerType === 'mouse') {
                this.$emit('activate', this.text)
            } else {
                this.$emit('launch')
            }
        },

        handleDoubleClick() {
            this.$emit('launch')
        },
    },
}
</script>

<style module>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding: 8px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: transparent;

    transition: background-color 0.05s ease, border-color 0.05s ease;
}

.main:hover {
    background-color: rgba(120, 120, 120, 0.25);
    border-color: rgba(150, 150, 150, 0.25);
    backdrop-filter: blur(4px);
}

.active {
    background-color: rgba(120, 120, 120, 0.5);
    border-color: rgba(150, 150, 150, 0.5);
    backdrop-filter: blur(4px);
}

.active:hover {
    background-color: rgba(120, 120, 120, 0.65);
    border-color: rgba(150, 150, 150, 0.65);
}

.icon {
    user-select: none;
    display: block;
    width: 48px;
    height: 48px;
    margin-bottom: 8px;

    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.25));
}

.text {
    user-select: none;
    text-shadow: 0 0 2px black;
}
</style>
