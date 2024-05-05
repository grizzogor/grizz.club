import AboutApp from '@/components/apps/about/AboutApp.vue'
import KyloApp from '@/components/apps/kylo/KyloApp.vue'
import EditorApp from '@/components/apps/editor/EditorApp.vue'

/**
 *
 * @param {String} appName
 */
export function getAppTypeFromName(appName) {
    appName = appName.toLowerCase()

    switch (appName) {
        case 'about':
            return AboutApp
        case 'kylo':
            return KyloApp
        case 'editor':
            return EditorApp
    }

    console.error('No app defined', appName)
}
