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
        <div :class="$style.section">
            <div :class="$style.heading">
                <img
                    :class="$style.headingImg"
                    src="@/assets/apps/kylo/KyloHappy.png"
                    @mouseenter="handleMouseEnterHeadingImg"
                    @mouseleave="handleMouseLeaveHeadingImg"
                />

                <div :class="$style.well">
                    <p>
                        My purple/orange wolf protogen hybrid fursona that I use
                        online.
                    </p>
                    <p>
                        For more information about the specifications of Kylo,
                        visit my Nextcloud Note about him.
                    </p>
                </div>
            </div>
        </div>

        <div :class="$style.section">
            <h3>Stickers</h3>
            <div :class="$style.imageCardList">
                <ImageCard
                    v-for="stickerData of getStickers()"
                    :key="stickerData.name"
                    :imgUrl="stickerData.imgUrl"
                    :name="stickerData.name"
                    :artist="stickerData.artist"
                    :artistUrl="stickerData.artistUrl"
                    :width="150"
                    :height="150"
                    type="sticker"
                />
            </div>
        </div>

        <div :class="$style.section">
            <h3>GIFs</h3>
            <div :class="$style.imageCardList">
                <ImageCard
                    v-for="gifData of getGIFs()"
                    :key="gifData.name"
                    :imgUrl="gifData.imgUrl"
                    :name="gifData.name"
                    :artist="gifData.artist"
                    :artistUrl="gifData.artistUrl"
                    :width="220"
                    :height="150"
                    type="gif"
                />
            </div>
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'
import ImageCard from '@/components/apps/kylo/ImageCard.vue'

const stickers = [
    {
        imgUrl: 'im/KyloAngry.png',
        name: 'Kylo Angry',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloEvil.png',
        name: 'Kylo Evil',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloEyeroll.png',
        name: 'Kylo Eyeroll',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloHappy.png',
        name: 'Kylo Happy',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloHeart.png',
        name: 'Kylo Heart',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloKisser.png',
        name: 'Kylo Kisser',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloOwO.png',
        name: 'Kylo OwO',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloPanic.png',
        name: 'Kylo Panic',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloPog.png',
        name: 'Kylo Pog',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloPuppyEyes.png',
        name: 'Kylo Puppy Eyes',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloSad.png',
        name: 'Kylo Sad',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloScared.png',
        name: 'Kylo Scared',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloTearsOfJoy.png',
        name: 'Kylo Tears of Joy',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloThinking.png',
        name: 'Kylo Thinking',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
    {
        imgUrl: 'im/KyloWink.png',
        name: 'Kylo Wink',
        artist: 'chequerootlurks',
        artistUrl: 'https://chequerootlurks.tumblr.com/',
    },
]

const gifs = [
    {
        imgUrl: 'im/KyloHi.gif',
        name: 'Kylo Hi',
        artist: 'nnathan (Discord)',
    },
    {
        imgUrl: 'im/KyloBye.gif',
        name: 'Kylo Bye',
        artist: 'nnathan (Discord)',
    },
]

const fileContext = require.context(
    '@/assets/apps/kylo',
    true, // Subdirectories
    /\.png$/
)

export default {
    name: 'KyloApp',
    extends: AppBase,
    components: {
        WindowBase,
        ImageCard,
    },
    methods: {
        getStickers() {
            return stickers
        },

        getGIFs() {
            return gifs
        },

        handleMouseEnterHeadingImg(e) {
            const imgEl = e.target
            imgEl.src = fileContext('./KyloPog.png')

            setTimeout(() => {
                if (imgEl.src.includes('Pog')) {
                    imgEl.src = fileContext('./KyloHappy.png')
                }
            }, 250)
        },

        handleMouseLeaveHeadingImg(e) {
            const imgEl = e.target
            imgEl.src = fileContext('./KyloHappy.png')
        },
    },
    mounted() {
        this.updateTitle('Kylo Byte')
        this.onResize({ width: 1050, height: 700 })
    },
}
</script>

<style module>
.section {
    padding: 16px;
    margin-bottom: 16px;
}

.section > h3 {
    margin-left: 8px;
}

.heading {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.headingImg {
    width: 140px;
    height: 140px;
    margin-bottom: 16px;
}

.headingImg:hover {
    animation-name: heading-img-anim;
    animation-duration: 0.4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes heading-img-anim {
    0% {
        transform: none;
    }

    33% {
        transform: scaleX(130%) scaleY(90%);
    }

    66% {
        transform: scaleX(90%) scaleY(130%);
    }
}

.well {
    background-color: #363636;
    padding: 18px;
    border-radius: 12px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}

.well > p:first-child {
    margin-top: 0;
}
.well > p:last-child {
    margin-bottom: 0;
}

.imageCardList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}
</style>
