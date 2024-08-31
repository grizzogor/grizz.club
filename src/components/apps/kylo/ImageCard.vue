<template>
    <div :class="$style.card">
        <div
            :class="$style.imgContainer"
            :style="{
                width: `${width}px`,
                height: `${height}px`,
            }"
            @mousemove="handleImgMouseOver"
            @mouseleave="handleImgMouseLeave"
        >
            <img
                :src="imgUrl"
                :class="$style.img"
                :style="{
                    transform: `perspective(500px) rotateX(${
                        imgRotateX * -60
                    }deg) rotateY(${imgRotateY * 60}deg)`,
                    filter: `brightness(${imgBrightness * 100}%)`,
                }"
                :alt="`${name} image`"
            />
        </div>

        <div>
            <div :class="$style.name">{{ name }}</div>
            <div>
                by
                <a :href="artistUrl" target="_blank">
                    {{ artist }}
                </a>
            </div>
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
        width: Number,
        height: Number,
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
            this.imgBrightness = 1
        },
    },
}
</script>

<style module>
.card {
    padding: 18px;
    border-radius: 12px;
    background-color: #363636;
    text-align: center;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}

.imgContainer {
    margin-bottom: 4px;
    transform-style: preserve-3d;
    perspective: 400px;
    overflow: visible;
    pointer-events: none;
}

.img {
    display: block;
    width: 100%;
    height: 100%;

    transition: transform 0.1s ease, filter 0.1s ease;

    overflow: visible;
    pointer-events: auto;
}

.name {
    font-size: 14px;
}
</style>
