var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var Es3ifyPlugin = require('es3ify-webpack-plugin');
module.exports = {
  entry: {
    app: [
      'console-polyfill',
      'es5-shim',
      'es5-shim/es5-sham',
      'babel-polyfill',
      './src/main.js'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    symlinks: false
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, './src'), path.join(__dirname, './test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: [path.join(__dirname, './src'), path.join(__dirname, './test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new Es3ifyPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
