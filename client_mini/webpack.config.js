const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: '',
  performance: { hints: false },
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    './app/startup/run',
  ],

  output: {
    filename: 'main.js',
    path:  __dirname + '/../public/mini_app',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        },
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'root': path.join(__dirname, './app'),
    }
  }
};
