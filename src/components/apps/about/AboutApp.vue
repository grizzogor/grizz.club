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
                                href="https://lemmy.ndlug.org/u/grizz"
                                target="_blank"
                            >
                                @grizz@lemmy.ndlug.org
                            </a>
                        </span>
                    </div>
                    <div :class="$style.listItem">
                        <span>YouTube</span>
                        <span>
                            <a
                                href="https://www.youtube.com/@grizzogor"
                                target="_blank"
                            >
                                @grizzogor
                            </a>
                        </span>
                    </div>
                </div>
            </div>
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
    mounted() {
        this.updateTitle('About Me')

        // Whatever
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

a {
    color: #4d94e9;
}

a:visited {
    color: #b351b3;
}
</style>
