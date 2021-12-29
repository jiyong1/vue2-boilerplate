'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'static/js/build.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
              'sass-loader',
            ],
          },
          {
            use: ['vue-style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, '../build'),
    port: 8080,
    historyApiFallback: true,
  },
};
