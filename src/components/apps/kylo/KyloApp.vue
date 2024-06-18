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
                    alt="Kylo Happy"
                    @mouseenter="handleMouseEnterHeadingImg"
                    @mouseleave="handleMouseLeaveHeadingImg"
                />

                <div :class="$style.well">
                    <p>
                        My
                        <span :style="{ color: `var(--kylo-purple)` }"
                            >purple</span
                        >/<span :style="{ color: `var(--kylo-orange)` }"
                            >orange</span
                        >
                        wolf protogen hybrid fursona that I use online.
                    </p>
                    <p>
                        For more information about the specifications of Kylo,
                        visit my
                        <a
                            href="https://nx.grizz.club/s/cxB6PcY5QxsAScN"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Nextcloud Note
                            <i class="bi bi-box-arrow-up-right" />
                        </a>
                        about him.
                    </p>
                    <p>
                        I have a reference sheet available of Kylo, please contact me if you want to use it.
                    </p>
                </div>
            </div>
        </div>

        <div
            v-for="section of sections"
            :key="section.title"
            :class="$style.section"
        >
            <h3>{{ section.title }}</h3>

            <div :class="$style.imageCardList">
                <ImageCard
                    v-for="item of section.items"
                    :key="item.name"
                    :imgUrl="item.imgUrl"
                    :name="item.name"
                    :artist="item.artist"
                    :artistUrl="item.artistUrl"
                    :width="item.width || 150"
                    :height="item.height || 150"
                />
            </div>
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'
import ImageCard from '@/components/apps/kylo/ImageCard.vue'

const fileContext = require.context(
    '@/assets/apps/kylo',
    true, // Subdirectories
    /\.(?:png|json)$/
)

export default {
    name: 'KyloApp',
    extends: AppBase,
    components: {
        WindowBase,
        ImageCard,
    },
    data() {
        return {
            /**
             * @type {{title:String,items:{imgUrl:String,name:String,artist:String,artistUrl:String|undefined,width:Number|undefined,height:Number|undefined}[]}}
             */
            sections: [],
        }
    },
    methods: {
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

        const data = fileContext('./data.json')
        this.sections = data.sections
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
