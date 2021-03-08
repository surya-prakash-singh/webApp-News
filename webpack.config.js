const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const nodePathParts = ["./src", "./node_modules"].map((p) => path.resolve(p));

//+++++++++ PLUGINS +++++++//

// -- PLUGIN: The HTML templates
const indexHTML = new HTMLWebpackPlugin({
  template: "./public/index.html",
  inject: "body",
  favicon: "./public/favicon/favicon.ico"
});

const compressPlugin = new CompressionPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.(js|css|html|svg)$/,
  threshold: 8192,
  minRatio: 0.8
  })

// +++++++++++ PLUGINS END +++++++++++++++

// ++++++++++++++ RULES +++++++++++++++++++
const babelRule = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const cssRule= { 
  test: /\.css?$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
  ]
};

const scssRule = {
  test: /\.scss$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" }
  ]
};

const rules = [babelRule,cssRule,scssRule];
// ++++++++++++++ RULES END +++++++++++++++++++

// ++++++++++++++ Optimization Config +++++++++

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
      extractComments: false,
    }),
  ],
};
// ++++++++++++++ Optimization Config End +++++

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/prod"),
    filename: "bundle.js",
  },
  stats: "errors-only",
  cache: {
    type: 'filesystem'
  },
  resolve: {
    symlinks: false,
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: nodePathParts,
  },
  optimization,
  module: {
    rules,
  },
  plugins: [compressPlugin,indexHTML],
};
