const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

module.exports = {
  entry: paths.serverIndexJs,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: paths.serverBuild,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-syntax-dynamic-import", "dynamic-import-node"]
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}