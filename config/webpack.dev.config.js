const paths = require('./paths')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: paths.appIndexJs,
  // entry: ['webpack-hot-middleware/client?reload=true', paths.appIndexJs],
  output: {
    path: paths.clientBuild,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: paths.publicPath
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { 
              useBuiltIns: 'usage', 
              corejs: "2",  
              modules: false,
              targets: {
                  browsers: ['last 2 versions', 'ie >= 9'],
              },
            }],
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
}