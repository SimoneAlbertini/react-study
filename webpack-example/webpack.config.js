var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname + "/app",
  entry: {
  	javascript: './app.js',
  },
  
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
    ],
  },
  
  plugins: [HTMLWebpackPluginConfig],
}
