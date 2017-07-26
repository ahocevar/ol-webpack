module.exports = {
  entry: {
    'bundle': './main.js',
    'test/bundle': './test/test.js'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  }
};
