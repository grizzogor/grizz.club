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
        <div :class="$style.heading">
            <img src="@/assets/apps/about/KyloHappy.png" alt="Kylo Happy" />
            <h2>Welcome to grizz.club</h2>
            <div :class="$style.tags">
                <img
                    v-for="tag of tags"
                    :class="$style.tag"
                    :key="tag.title"
                    :src="getTagImgUrl(tag.imgUrl)"
                    :title="tag.title"
                    :alt="`${tag.title} tag`"
                />
            </div>
        </div>

        <div :class="$style.mainContentOuter">
            <div :class="$style.mainContent">
                <div :class="$style.well">
                    <p>Hello!</p>
                    <p>
                        I'm grizzogor, a 22 year old autistic techie (he/him)
                        messing around with technology in order to learn more
                        about it.
                    </p>
                    <p>
                        My character's name is Kylo Byte. He is a
                        <span :style="{ color: `var(--kylo-purple)` }">
                            purple
                        </span>
                        and
                        <span :style="{ color: `var(--kylo-orange)` }">
                            orange
                        </span>
                        wolf protogen running on Linux.
                    </p>
                    <div>
                        <button @click="handleClickLaunchKylo">
                            Launch kylo_byte.sh
                        </button>
                    </div>
                </div>

                <h3 :class="$style.listHeading">Socials (sorted from most to least used)</h3>
                <div :class="$style.list">
                    <div :class="$style.listItem">
                        <span>YouTube</span>
                        <span>
                            <a
                                href="https://www.youtube.com/@grizzogor"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @grizzogor
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Twitch</span>
                        <span>
                            <a
                                href="https://www.twitch.tv/grizzogor"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                grizzogor
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Bluesky</span>
                        <span>
                            <a
                                href="https://bsky.app/profile/grizz.club"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @grizz.club
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>GitHub</span>
                        <span>
                            <a
                                href="https://github.com/grizzogor"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @grizzogor
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Mastodon</span>
                        <span>
                            <a
                                href="https://furry.engineer/@grizz"
                                rel="noopener noreferrer me"
                                target="_blank"
                            >
                                @grizz@furry.engineer
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Lemmy</span>
                        <span>
                            <a
                                href="https://lemmy.world/u/grizz"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @grizz@lemmy.world
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Reddit</span>
                        <span>
                            <a
                                href="https://reddit.com/user/grizzogor"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                /u/grizzogor
                            </a>
                        </span>
                    </div>
                </div>
                <h3 :class="$style.listHeading">Gaming</h3>
                <div :class="$style.list">
                    <div :class="$style.listItem">
                        <span><i class="bi bi-playstation" /> PlayStation</span>
                        <span>
                            <a
                                href="https://psnprofiles.com/grizzogor"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                grizzogor (PSNProfiles)
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span><i class="bi bi-dpad-fill" /> Consoles</span>
                        <span>PS5, PS4, PS3, PS Vita</span>
                    </div>
                    <div :class="$style.listItem">
                        <span><i class="bi bi-steam" /> Steam</span>
                        <span>
                            <a
                                href="https://steamcommunity.com/id/grizzogor/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                grizzogor
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span><i class="bi bi-discord" /> Discord</span>
                        <span>@grizzogor</span>
                    </div>
                    <div :class="$style.listItem">
                        <span><i class="bi bi-list" /> Multiplayer Game List</span>
                        <span>
                            <a
                                href="https://grizzogor.notion.site/4ab71b61d0f446629781b6cbcf4d197c?v=06078c0a5bdd43acae159a869996a263"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Open in Notion
                            </a>
                        </span>
                    </div>
                </div>

                <h3 :class="$style.listHeading">Interests</h3>
                <div :class="$style.well">
                    <ul>
                        <li>
                            Computer Hardware
                            <ul>
                                <li>New Hardware</li>
                                <li>2000's era Hardware</li>
                            </ul>
                        </li>
                        <li>
                            Computer Software
                            <ul>
                                <li>Windows XP through 11</li>
                                <li>Linux</li>
                            </ul>
                        </li>
                        <li>
                            Networking
                            <ul>
                                <li>Ubiquiti networking gear</li>
                            </ul>
                        </li>
                        <li>
                            Gaming
                            <ul>
                                <li>Steam Deck</li>
                                <li>Linux Gaming</li>
                                <li>PlayStation 3, 4, 5, and Vita</li>
                            </ul>
                        </li>
                        <li>
                            Anime
                            <ul>
                                <li>RWBY</li>
                                <li>Fullmetal Alchemist: Brotherhood</li>
                            </ul>
                        </li>
                        <li>
                            Furry Fandom
                            <ul>
                                <li>Protogens</li>
                                <li>Synths</li>
                                <li>
                                    Designing my own fursona:
                                    <a
                                        @click="handleClickLaunchKylo"
                                        :style="{ cursor: `pointer` }"
                                        title="Launch kylo_byte.sh"
                                    >
                                        Kylo Byte
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h3 :class="$style.listHeading">Desktop</h3>
                <div :class="$style.list">
                    <div :class="$style.listItem">
                        <span>Processor</span>
                        <span>AMD Ryzen 7 5800X</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>RAM</span>
                        <span>32 GB</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>GPU</span>
                        <span>NVIDIA RTX 3070</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Operating System</span>
                        <span>Windows 11 &amp; Fedora KDE (dual boot)</span>
                    </div>
                </div>

                <h3 :class="$style.listHeading">Laptop</h3>
                <div :class="$style.list">
                    <div :class="$style.listItem">
                        <span>Model</span>
                        <span>Apple MacBook Air 13" (2024)</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>CPU</span>
                        <span>Apple M3 (8c CPU, 10c GPU)</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>RAM</span>
                        <span>16 GB</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Storage</span>
                        <span>512 GB SSD</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>Operating System</span>
                        <span>macOS</span>
                    </div>
                </div>
            </div>
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'
import { store } from '@/components/desktop/desktop-store'

const fileContext = require.context(
    '@/assets/apps/about',
    true, // Subdirectories
    /\.(?:png|json|jpg|gif)$/
)

export default {
    name: 'AboutApp',
    extends: AppBase,
    components: {
        WindowBase,
    },
    data() {
        return {
            tags: [],
        }
    },
    methods: {
        handleClickLaunchKylo() {
            this.$emit('startApp', 'kylo', {})
        },

        getTagImgUrl(imgUrl) {
            return fileContext(imgUrl)
        },
    },
    mounted() {
        this.updateTitle('About Me')

        // Set size relative to screen size, and then center the window.
        const width = Math.max(500, Math.min(1200, store.width * 0.75))
        const height = Math.max(300, Math.min(900, store.height * 0.75))

        this.onResize({ width, height })
        this.onMove({
            x: store.width / 2 - width / 2,
            y: store.height / 2 - height / 2,
        })

        const data = fileContext('./data.json')
        this.tags = data.tags
    },
}
</script>

<style module>
.heading {
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.heading > img {
    width: 140px;
    height: 140px;
    display: block;
}

.tags {
    display: flex;
    gap: 4px;
    max-width: 400px;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 16px;
    margin-right: 16px;
}

.tag {
    image-rendering: pixelated;
    transition: transform 0.05s ease, filter 0.05s ease;
}

.tag:hover {
    transform: scale(2);
    filter: drop-shadow(0 0 8px rgba(169, 112, 206, 0.75));

    animation-name: tagsimg-anim;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

@keyframes tagsimg-anim {
    0% {
        filter: drop-shadow(0 0 8px rgba(169, 112, 206, 0.75));
    }

    50% {
        filter: drop-shadow(0 0 8px rgba(255, 115, 0, 0.75));
    }

    100% {
        filter: drop-shadow(0 0 8px rgba(169, 112, 206, 0.75));
    }
}

.mainContentOuter {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 48px;
}

.mainContent {
    max-width: 500px;
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

.listHeading {
    margin-top: 32px;
}

.list {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}

.list > .listItem {
    background-color: #363636;
    padding: 18px;
    border-radius: 12px;
}

.list > .listItem:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #292929;
}

.list > .listItem:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.list > .listItem > span:first-child {
    user-select: none;
}

.list > .listItem > span:last-child {
    color: #a1a1a1;
}

.list > .listItem {
    display: flex;
    justify-content: space-between;
}
</style>
