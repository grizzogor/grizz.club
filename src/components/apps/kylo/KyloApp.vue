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
            v-for="stickerData of getStickers()"
            :key="stickerData.name"
            :imgUrl="stickerData.imgUrl"
            :name="stickerData.name"
            :artist="stickerData.artist"
            :artistUrl="stickerData.artistUrl"
            type="sticker"
        />
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'
import ImageCard from '@/components/apps/kylo/ImageCard.vue'

const stickers = [
    {
        imgUrl: 'KyloAngry.png',
        name: 'Kylo Angry',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
]

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
                '@/assets/apps/kylo',
                true, // Subdirectories
                /\.png$/
            )

            return stickers.map((x) => {
                return {
                    imgUrl: images('./stickers/' + x.imgUrl),
                    name: x.name,
                    artist: x.artist,
                    artistUrl: x.artistUrl,
                }
            })
        },
    },
    mounted() {
        this.updateTitle('Kylo Byte')
        this.onResize({ width: 900, height: 600 })
    },
}
</script>

<style module>
</style>
