module.exports = {
	transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
	publicPath: '/',
	pluginOptions: {
		webpackBundleAnalyzer: {
			openAnalyzer: false,
		},
	},
	css: {
		loaderOptions: {
			stylus: {
				data: `
				  @import "~@/assets/styles/vars/index.styl";
				  @import '~vuetify/src/stylus/settings/_variables.styl';
				  @import '~vuetify/src/stylus/generic/_transitions.styl';
				`,
			},
		},
	},
};
