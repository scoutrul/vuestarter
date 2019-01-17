const { VueLoaderPlugin } = require("vue-loader");
const nodeSassMagicImporter = require("node-sass-magic-importer");
const poststylus = require("poststylus");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

const env = process.env.NODE_ENV;
const sourceMap = env === "development";

const config = {
  devtool: sourceMap ? "cheap-module-eval-source-map" : undefined,
  entry: {
    index: "./src/main.js"
  },
  mode: env,
  output: {
	publicPath: "/",
	chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          sourceMap
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          sourceMap
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "style-loader!css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              importer: nodeSassMagicImporter(),
              sourceMap
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader",
          {
            loader: "style-loader!css-loader!stylus-loader",
            options: {
              use: [poststylus(["autoprefixer", "rucksack-css"])]
            }
          }
        ]
      }
    ]
  },
  plugins: [new VuetifyLoaderPlugin(), new VueLoaderPlugin()]
};

module.exports = config;
