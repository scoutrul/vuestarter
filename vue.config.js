module.exports = {
	transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
	publicPath: '/vuestarter',
	// filenameHashing: false,
	pluginOptions: {
		webpackBundleAnalyzer: {
			openAnalyzer: false,
		},
	},
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-svg-inline-loader')
			.loader('vue-svg-inline-loader')
			.options({
				/* ... */
			});
	},
};
