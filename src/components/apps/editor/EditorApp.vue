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
        <div :class="$style.main">
            <pre :class="$style.editor" contenteditable="true">{{
                content
            }}</pre>
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'

export default {
    name: 'AboutApp',
    extends: AppBase,
    components: {
        WindowBase,
    },
    data() {
        return {
            filename: 'Untitled Document 1',
            content: '',
        }
    },
    mounted() {
        this.updateTitle('Untitled Document 1')

        this.onResize({ width: 700, height: 450 })

        const filepath = this.args.file || null
        if (typeof filepath === 'string') {
            console.log('Load editor file', filepath)
            const context = require.context('@/_files', true)
            const fileContent = context('./' + filepath)
            this.content = fileContent
            this.updateTitle(filepath)
        }
    },
}
</script>

<style module>
.main {
    width: calc(100% - 8px);
    height: calc(100% - 6px);
    background-color: #141414;
    overflow: hidden;
    margin-left: 4px;
    margin-right: 4px;
    padding: 4px;
    box-sizing: border-box;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.editor {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: auto;
    scrollbar-width: thin;
}

.editor::selection {
    background: #a970ce;
    color: #ffffff;
}
</style>
