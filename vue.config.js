const path = process.env.ghPages ? '/vuestarter' : '/';

module.exports = {
	transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
	publicPath: path,
	pluginOptions: {
		webpackBundleAnalyzer: {
			openAnalyzer: false,
		},
	},
};
