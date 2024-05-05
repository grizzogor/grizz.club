<template>
    <div />
</template>

<script>
export default {
    name: 'AppBase',
    emits: ['activate', 'appMove', 'appUpdate'],
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

        getTitleText() {
            return this.data.title
        },

        getPosition() {
            return this.data.position
        },

        updateTitle(title) {
            this.$emit('appUpdate', this.appId, title)
        },
    },
}
</script>

<style module>
</style>
