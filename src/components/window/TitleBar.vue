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
        <span :class="$style.padLeft"></span>
        <span>{{ txt }}</span>
        <span :class="$style.closeBtn" @click="handleClickCloseBtn">
            <i class="bi bi-x" />
        </span>
    </div>
</template>

<script>
export default {
    name: 'TitleBar',
    props: {
        txt: String,
        isActive: Boolean,
    },
    emits: ['move', 'close'],
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
        handleClickCloseBtn() {
            this.$emit('close')
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

.padLeft {
    float: left;
    width: 24px;
    height: 24px;
}

.closeBtn {
    float: right;
    background-color: #393939;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: background-color 0.15s ease;
}

.closeBtn:active {
    background-color: #585858;
}
</style>
