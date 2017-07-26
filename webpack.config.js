const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env'],
            sourceMaps: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
