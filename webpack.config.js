const VueLoaderPlugin = require('vue-loader/lib/plugin')
const stylus_plugin = require('stylus_plugin');

module.exports = {
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
        // убедитесь что подключили плагин!
        new VueLoaderPlugin()
    ]
}