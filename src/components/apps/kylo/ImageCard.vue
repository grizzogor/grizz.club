<template>
    <div :class="$style.card">
        <div
            :class="$style.imgContainer"
            @mousemove="handleImgMouseOver"
            @mouseleave="handleImgMouseLeave"
        >
            <img
                :src="imgUrl"
                :class="$style.img"
                :style="{
                    transform: `rotateX(${imgRotateX * -60}deg) rotateY(${
                        imgRotateY * 60
                    }deg)`,
                    filter: `brightness(${imgBrightness * 100}%)`,
                }"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageCard',
    props: {
        imgUrl: String,
        name: String,
        artist: String,
        artistUrl: String,
        type: String,
    },
    data() {
        return {
            imgRotateX: 0,
            imgRotateY: 0,
            imgBrightness: 1,
        }
    },
    methods: {
        handleImgMouseOver(e) {
            const relativeX = e.layerX / e.target.clientWidth - 0.5
            const relativeY = e.layerY / e.target.clientHeight - 0.5

            this.imgRotateX = relativeY
            this.imgRotateY = relativeX

            this.imgBrightness = 1 - ((relativeX + relativeY) / 2) * 0.8
        },
        handleImgMouseLeave() {
            this.imgRotateX = 0
            this.imgRotateY = 0
        },
    },
}
</script>

<style module>
.card {
}

.imgContainer {
    width: 150px;
    height: 150px;
    overflow: hidden;
}

.img {
    display: block;
    width: 100%;
    height: 100%;

    transition: transform 0.1s ease;
}
</style>
