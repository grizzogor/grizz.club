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
            <img src="@/assets/apps/about/KyloHappy.png" />
            <h2>Welcome to grizz.club</h2>
            <div :class="$style.tags">
                <img src="@/assets/img/tags/american.gif" />
                <img src="@/assets/img/tags/hoosierbutton.png" />
                <img src="@/assets/img/tags/hehim.png" />
                <img src="@/assets/img/tags/cli.gif" />
                <img src="@/assets/img/tags/vim_the_editor.png" />
                <img src="@/assets/img/tags/pride.gif" />
                <img src="@/assets/img/tags/fedora_powered.png" />
                <img src="@/assets/img/tags/nginx-powered.png" />
            </div>
        </div>

        <div :class="$style.mainContentOuter">
            <div :class="$style.mainContent">
                <div :class="$style.well">
                    <p>Hello!</p>
                    <p>
                        I'm grizzogor, a 21 year old autistic techie (he/him)
                        messing around with technology in order to learn more
                        about it.
                    </p>
                    <p>
                        My character's name is Kylo Byte. He is a
                        <span :style="{ color: `#a970ce` }">purple</span> and
                        <span :style="{ color: `#ff7300` }">orange</span> wolf
                        protogen running on Linux.
                    </p>
                    <div>
                        <button @click="handleClickLaunchKylo">
                            Launch kylo_byte.sh
                        </button>
                    </div>
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
                        <span>Windows 11 &amp; Pop!_OS (dual boot)</span>
                    </div>
                </div>

                <h3 :class="$style.listHeading">Laptop</h3>
                <div :class="$style.list">
                    <div :class="$style.listItem">
                        <span>Model</span>
                        <span>Lenovo ThinkPad T14 Gen 2</span>
                    </div>
                    <div :class="$style.listItem">
                        <span>CPU</span>
                        <span>AMD Ryzen 7 5850U</span>
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
                        <span>Windows 11 &amp; Fedora Linux (dual boot)</span>
                    </div>
                </div>

                <h3 :class="$style.listHeading">Socials</h3>
                <div :class="$style.list">
                    <div :class="$style.listItem">
                        <span>Mastodon</span>
                        <span>
                            <a
                                href="https://mstdn.social/@grizz"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                grizz@mstdn.social
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
                </div>
            </div>
        </div>
    </WindowBase>
</template>

<script>
import WindowBase from '@/components/window/WindowBase.vue'
import AppBase from '@/components/apps/AppBase.vue'
import { store } from '@/components/desktop/desktop-store'

export default {
    name: 'AboutApp',
    extends: AppBase,
    components: {
        WindowBase,
    },
    methods: {
        handleClickLaunchKylo() {
            this.$emit('startApp', 'kylo', {})
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
