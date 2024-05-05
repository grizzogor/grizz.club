<template>
    <div :class="$style.main">
        <DesktopMenuBar></DesktopMenuBar>
        <div :class="$style.desktop" @click="onClickDesktop">
            <div :class="$style.desktopIcons" id="desktop-icons"></div>
            <component
                v-for="app in apps"
                :key="app.id"
                :is="app.component"
                :data="app.data"
                :isActive="app.id === this.activeAppId"
                :zIndex="getAppZIndex(app.id)"
                @activate="onAppActivate"
                @appMove="onAppMove"
                @appUpdate="onAppUpdate"
                @requestExit="onAppRequestExit(app.id)"
                @startApp="onAppStartApp"
            />
        </div>
    </div>
</template>

<script>
import DesktopMenuBar from '@/components/desktop/DesktopMenuBar.vue'
import { createVNode } from 'vue'
import { getAppTypeFromName } from '@/app-types'

export default {
    name: 'DesktopContainer',
    components: {
        DesktopMenuBar,
    },
    data() {
        return {
            currentAppId: 0,
            appIdStack: [],
            activeAppId: -1,
            activeIconId: '',
            apps: [],
        }
    },
    methods: {
        onClickDesktop(e) {
            if (e.target.id !== 'desktop-icons') {
                return
            }
            this.activeAppId = -1
        },

        onAppActivate(appId) {
            // Put activated app id at the top of the stack.
            const newStack = this.appIdStack.filter((x) => x !== appId)
            newStack.unshift(appId)
            this.appIdStack = newStack

            // Set active app id.
            this.activeAppId = appId

            // Unfocus any active desktop icon.
            this.activeIconId = ''
        },

        onAppMove(appId, position) {
            for (const app of this.apps) {
                if (app.id === appId) {
                    app.data.position = position
                }
            }
        },

        onAppUpdate(appId, title) {
            for (const app of this.apps) {
                if (app.id === appId) {
                    app.data.title = title
                }
            }
        },

        onAppRequestExit(appId) {
            // Remove from apps.
            this.apps = this.apps.filter((x) => x.id !== appId)
            // Remove from stack.
            this.appIdStack = this.appIdStack.filter((x) => x !== appId)
            // If it was the active app, deactivate it.
            if (this.activeAppId === appId) {
                this.activeAppId = -1 // TODO: set to top of stack if it has items?
            }
        },

        createApp(type, args) {
            this.currentAppId++

            const initialPos = (this.currentAppId % 4) * 30 + 20
            const position = { x: initialPos, y: initialPos }

            const newApp = createVNode(type, {
                appId: this.currentAppId,
                args,
            })
            this.apps.push({
                id: this.currentAppId,
                component: newApp,
                data: {
                    title: '',
                    position,
                },
            })

            this.onAppActivate(this.currentAppId)
        },

        onAppStartApp(appName, args) {
            const appType = getAppTypeFromName(appName)
            this.createApp(appType, args)
        },

        getAppZIndex(appId) {
            const index = this.appIdStack.indexOf(appId)
            return this.appIdStack.length - index
        },
    },
    mounted() {
        this.onAppStartApp('about', {})
        this.onAppStartApp('kylo', {})
    },
}
</script>

<style module>
.main {
    position: relative;
    z-index: 1;
}

.desktop {
    height: calc(100vh - 24px);
    position: relative;
}

.desktopIcons {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}
</style>
