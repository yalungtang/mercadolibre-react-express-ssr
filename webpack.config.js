const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './web-ui/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/ui'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Marketplace',
      filename: 'index.html',
      template: './web-ui/src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}