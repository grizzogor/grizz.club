import AboutApp from '@/components/apps/about/AboutApp.vue'

/**
 *
 * @param {String} appName
 */
export function getAppTypeFromName(appName) {
    appName = appName.toLowerCase()

    switch (appName) {
        case 'about':
            return AboutApp
    }

    console.error('No app defined', appName)
}
