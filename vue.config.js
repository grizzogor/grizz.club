const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: 'dist',
    publicPath: '',
    css: {
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: '__[name]__[local]__[hash:6]',
                },
            },
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.txt/,
                    type: 'asset/source',
                },
            ],
        },
    },
})
