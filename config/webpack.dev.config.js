const paths = require('./paths')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: paths.appIndexJs,
  // entry: ['webpack-hot-middleware/client?reload=true', paths.appIndexJs],
  output: {
    path: paths.clientBuild,
    publicPath: paths.publicPath,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
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
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          // { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: 'css-loader' },
          { 
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: `[name].[ext]`
                }
            }
        ]
    },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: paths.templateHtml,
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}