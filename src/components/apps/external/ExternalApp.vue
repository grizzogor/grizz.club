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
        <div v-if="favorites">
            <h2>
                <i
                    class="bi bi-star-fill"
                    :style="{ color: `var(--kylo-orange)` }"
                />
                {{ favorites.description }}
            </h2>

            <div
                v-for="section of favorites.sections"
                :key="section.title"
                :class="$style.section"
            >
                <h3>{{ section.title }}</h3>

                <div :class="$style.favoriteList">
                    <div
                        v-for="item of section.items"
                        :key="item.title"
                        :class="$style.favorite"
                    >
                        <div :class="$style.favoriteImgContainer">
                            <img
                                v-if="item.imgUrl"
                                :src="getImgUrl(item.imgUrl)"
                                :class="$style.favoriteImg"
                            />
                            <a
                                :class="$style.favoriteImgOverlay"
                                :href="item.url"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <i class="bi bi-box-arrow-up-right" />
                            </a>
                        </div>
                        <div :class="$style.favoriteHeader">
                            <div :class="$style.favoriteHeaderTitle">
                                <span>{{ item.title }}</span>
                            </div>
                            <div>
                                <a
                                    :href="item.url"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {{ getDisplayUrl(item.url) }}
                                </a>
                            </div>
                        </div>
                        <div :class="$style.favoriteDescription">
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'

const fileContext = require.context(
    '@/assets/apps/external',
    true, // Subdirectories
    /\.(?:png|json|jpg)$/
)

export default {
    name: 'KyloApp',
    extends: AppBase,
    components: {
        WindowBase,
    },
    data() {
        return {
            favorites: null,
        }
    },
    methods: {
        /**
         * @param {String} imgUrl
         */
        getImgUrl(imgUrl) {
            if (imgUrl.startsWith('./')) {
                return fileContext(imgUrl)
            }
            return imgUrl
        },

        getDisplayUrl(urlStr) {
            const url = new URL(urlStr)
            return url.host
        },
    },
    mounted() {
        this.updateTitle('Favorites & Downloads')
        this.onResize({ width: 1050, height: 700 })

        const data = fileContext('./data.json')
        this.favorites = data.favorites
    },
}
</script>

<style module>
.section {
    padding: 16px;
    margin-bottom: 0;
}

.section > h3 {
    margin-left: 8px;
}

h2 {
    margin-left: 24px;
}

.heading {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.favoriteList {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.favorite {
    background-color: #363636;
    padding: 8px;
    border-radius: 12px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
    width: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: filter 0.25s ease;
}

.favorite:hover {
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.75));
}

.favoriteImgContainer {
    position: relative;
    width: 180px;
    height: 100px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #333333;
    overflow: hidden;
}

.favoriteImg {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.favoriteImgOverlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    backdrop-filter: blur(4px);
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    transition: background-color 0.1s ease, opacity 0.1s ease;
}

.favoriteImgOverlay > i {
    color: var(--kylo-orange);
    text-shadow: 0 0 4px rgb(36, 36, 36);
}

.favoriteImgOverlay:hover {
    background-color: rgba(36, 36, 36, 0.25);
    opacity: 1;
}

.favoriteHeader {
    text-align: center;
    margin-bottom: 4px;
    margin-top: 8px;
}

.favoriteHeaderTitle {
    font-size: 16px;
}

.favoriteDescription {
    color: #a5a5a5;
    text-align: center;
}
</style>
