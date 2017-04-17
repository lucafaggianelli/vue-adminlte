const webpack = require('webpack')
const { resolve } = require('path')

const rootDir = resolve('..')

module.exports = {
  entry: './docs/index.js',
  output: {
    path: resolve(rootDir, 'dist/docs'),
    publicPath: 'dist/docs/',
    filename: 'build-docs.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?root=./docs/' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },
  devtool: 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
