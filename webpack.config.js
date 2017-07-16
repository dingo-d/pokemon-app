var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputCss = 'styles/[name].css';

// NODE_ENV to production
// uglify

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
    { test: /\.(js)$/, use: 'babel-loader' },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'app/index.html'
  }),
    new ExtractTextPlugin(outputCss)
]
}

module.exports = config;