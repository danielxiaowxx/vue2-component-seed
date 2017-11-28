var path = require('path');
var webpack = require('webpack');

var config = require('./config');

// webpack.config.js
module.exports = {
  entry: {
    hello: path.join(config.src, 'components', 'hello', 'index.vue'),
    // Don't touch me - components

    demo: path.join(config.src, 'directives', 'demo', 'index.js'),
    // Don't touch me - directives
  },

  output: {
    path: config.dist,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: {
    'vue': {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue'
    }
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        include: [config.src].concat(config.vueModules)
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        include: [config.src].concat(config.babelModules)
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: 'img/[name].[ext]'
        },
        include: [config.src].concat(config.vueModules)
      }
    ]
  },

  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};
