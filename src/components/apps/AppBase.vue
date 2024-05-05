<template>
    <div />
</template>

<script>
export default {
    name: 'AppBase',
    emits: ['activate', 'appMove', 'appUpdate', 'appResize'],
    props: {
        appId: Number,
        args: Object,
        isActive: Boolean,
        zIndex: Number,
        data: Object,
    },
    methods: {
        onMouseDown() {
            this.$emit('activate', this.appId)
        },

        onMove(position) {
            this.$emit('appMove', this.appId, position)
        },

        onResize(size) {
            this.$emit('appResize', this.appId, size)
        },

        onClose() {
            this.$emit('appClose', this.appId)
        },

        getTitleText() {
            return this.data.title
        },

        getPosition() {
            return this.data.position
        },

        getSize() {
            return this.data.size
        },

        updateTitle(title) {
            this.$emit('appUpdate', this.appId, title)
        },
    },
}
</script>

<style module>
</style>
