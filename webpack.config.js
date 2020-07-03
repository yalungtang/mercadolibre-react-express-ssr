const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: './web-ui/src',
  output: {
    path: path.resolve(__dirname, 'dist/ui'),
    publicPath: '/',
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
            presets: [
              '@babel/preset-react',
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "chrome": "58",
                    "ie": "11"
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimizer: [
     new TerserPlugin()
    ]
   },
}