const paths = require('./paths')

module.exports = {
  entry: [paths.appIndexJs],
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
            ['@babel/preset-env', { "corejs": "2" }],
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}