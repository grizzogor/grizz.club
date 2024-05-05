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
        <ImageCard
            v-for="stickerUrl of getStickers()"
            :key="stickerUrl"
            :imgUrl="stickerUrl"
        />
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'
import ImageCard from '@/components/apps/kylo/ImageCard.vue'

export default {
    name: 'KyloApp',
    extends: AppBase,
    components: {
        WindowBase,
        ImageCard,
    },
    methods: {
        getStickers() {
            const images = require.context(
                '@/assets/apps/kylo/stickers',
                false,
                /\.png$/
            )

            return [
                'KyloAngry.png',
                'KyloEvil.png',
                'KyloEyeroll.png',
                'KyloHappy.png',
                'KyloHeart.png',
                'KyloKisser.png',
                'KyloOwO.png',
                'KyloPanic.png',
                'KyloPog.png',
                'KyloPuppyEyes.png',
                'KyloSad.png',
                'KyloScared.png',
                'KyloTearsOfJoy.png',
                'KyloThinking.png',
                'KyloWink.png',
            ].map((x) => images('./' + x))
        },
    },
    mounted() {
        this.updateTitle('Kylo Byte')
    },
}
</script>

<style module>
</style>
