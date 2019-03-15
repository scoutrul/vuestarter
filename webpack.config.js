const { VueLoaderPlugin } = require('vue-loader');
const nodeSassMagicImporter = require('node-sass-magic-importer');
const poststylus = require('poststylus');
const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';

const config = {
	devtool: 'nosources-source-map',
	entry: {
		index: './src/main.js',
	},
	mode: env,
	output: {
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(woff)(\?\S*)?$/,
				loader: 'file-loader',
				include: path.resolve(__dirname, '../src'),
				options: {
					name: '[path][name].[ext]',
					context: '',
				},
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
							sourceMap,
						},
					},
					{
						loader: 'vue-svg-inline-loader',
						options: {
							/* ... */
						},
					},
				],
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					sourceMap,
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'vue-style-loader',
					'style-loader!css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							importer: nodeSassMagicImporter(),
							sourceMap,
						},
					},
				],
			},
			{
				test: /\.styl$/,
				use: [
					'stylus-loader',
					'vue-style-loader',
					'style-loader!css-loader',
					{
						loader: 'style-loader!css-loader!stylus-loader',
						options: {
							use: [poststylus(['autoprefixer', 'rucksack-css'])],
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [new VuetifyLoaderPlugin(), new VueLoaderPlugin()],
};

module.exports = config;
