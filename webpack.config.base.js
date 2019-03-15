const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);

  return prev;
}, {});

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), '*'],
    extensions: ['.ts', '.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin(envKeys)
  ]
};
