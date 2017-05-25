const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
