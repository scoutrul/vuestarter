const VueLoaderPlugin = require('vue-loader/lib/plugin')
const stylus_plugin = require('stylus_plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
        loaders: [
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ],
        stylus: {
            use: [stylus_plugin()]
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new VuetifyLoaderPlugin()
    ]
}