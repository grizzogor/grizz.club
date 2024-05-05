<template>
    <div :class="$style.main">
        <DesktopMenuBar></DesktopMenuBar>
        <div :class="$style.desktop" @click="onClickDesktop" ref="desktop">
            <div :class="$style.desktopIcons" id="desktop-icons">
                <DesktopIcon
                    :isActive="activeIconId === 'About Me'"
                    icon="help"
                    text="About Me"
                    @activate="onIconActivate"
                    @launch="onAppStartApp('about', {})"
                />
                <DesktopIcon
                    :isActive="activeIconId === 'kylo_byte.sh'"
                    icon="kylo"
                    text="kylo_byte.sh"
                    @activate="onIconActivate"
                    @launch="onAppStartApp('kylo', {})"
                />
                <DesktopIcon
                    :isActive="activeIconId === 'attributions.txt'"
                    icon="txt"
                    text="attributions.txt"
                    @activate="onIconActivate"
                    @launch="
                        onAppStartApp('editor', { file: 'attributions.txt' })
                    "
                />
            </div>
            <component
                v-for="app in apps"
                :key="app.id"
                :is="app.component"
                :data="app.data"
                :isActive="app.id === this.activeAppId"
                :zIndex="getAppZIndex(app.id)"
                @activate="onAppActivate"
                @appMove="onAppMove"
                @appResize="onAppResize"
                @appUpdate="onAppUpdate"
                @appClose="onAppRequestExit(app.id)"
                @startApp="onAppStartApp"
            />
        </div>
    </div>
</template>

<script>
import DesktopMenuBar from '@/components/desktop/DesktopMenuBar.vue'
import DesktopIcon from '@/components/desktop/DesktopIcon.vue'
import { createVNode } from 'vue'
import { getAppTypeFromName } from '@/app-types'
import { store } from './desktop-store'

export default {
    name: 'DesktopContainer',
    components: {
        DesktopMenuBar,
        DesktopIcon,
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
        onIconActivate(iconId) {
            this.activeIconId = iconId
        },

        onClickDesktop(e) {
            if (e.target.id !== 'desktop-icons') {
                return
            }
            this.activeAppId = -1
            this.activeIconId = ''
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
                    let x = Math.min(
                        Math.max(position.x, -app.data.size.width + 80),
                        store.width - 80
                    )
                    let y = Math.min(Math.max(position.y, 0), store.height - 44)

                    app.data.position = { x, y }
                }
            }
        },

        onAppResize(appId, size) {
            for (const app of this.apps) {
                if (app.id === appId) {
                    let width = Math.min(
                        size.width,
                        store.width - app.data.position.x
                    )
                    let height = Math.min(
                        size.height,
                        store.height - app.data.position.y
                    )

                    app.data.size = { width, height }
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
            const size = { width: 700, height: 500 }

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
                    size,
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
        // Launch the about me app by default.
        this.onAppStartApp('about', {})

        // Store the desktop's current size so the Window can access it for resize/reposition actions.
        const handleResize = () => {
            const desktopEl = this.$refs.desktop
            if (!desktopEl) {
                return
            }

            const prevWidth = store.width
            const prevHeight = store.height

            store.width = desktopEl.clientWidth
            store.height = desktopEl.clientHeight

            const changeWidth = store.width / prevWidth
            const changeHeight = store.height / prevHeight
            for (const app of this.apps) {
                app.data.size = {
                    width: Math.max(
                        600,
                        Math.min(1200, app.data.size.width * changeWidth)
                    ),
                    height: Math.max(
                        400,
                        Math.min(900, app.data.size.height * changeHeight)
                    ),
                }
                app.data.position = {
                    x: app.data.position.x * changeWidth,
                    y: app.data.position.y * changeHeight,
                }
            }
        }

        window.addEventListener('resize', () => handleResize())
        handleResize()
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

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px;
}
</style>
