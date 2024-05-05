<template>
    <div
        :class="{
            [$style.main]: true,
            [$style.mainActive]: isActive,
        }"
        draggable="true"
        @dragend="onDragEnd"
        @dragstart="onDragStart"
        @dragover="onDragEnd"
        @dragleave="onDragEnd"
    >
        <span>{{ txt }}</span>
    </div>
</template>

<script>
export default {
    name: 'TitleBar',
    props: {
        txt: String,
        isActive: Boolean,
    },
    emits: ['move'],
    methods: {
        onDragStart(e) {
            startX = e.clientX
            startY = e.clientY
        },
        onDragEnd(e) {
            this.$emit('move', { x: e.clientX - startX, y: e.clientY - startY })
            startX = e.clientX
            startY = e.clientY
        },
    },
}

let startX = 0
let startY = 0
</script>

<style module>
.main {
    cursor: move;
    padding: 10px;
    font-weight: bold;
    text-align: center;
    user-select: none;
}
</style>
