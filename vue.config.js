module.exports = {
    transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false,
        },
    },
};
