import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import { execSync } from 'child_process';
import path from 'path';

const DEBUG = process.env.NODE_ENV === 'development';
const exec = command => execSync(command, { encoding: 'utf8' });
const GIT_BRANCH = exec('git rev-parse --abbrev-ref HEAD');
const GIT_COMMIT = exec('git rev-parse --short HEAD');
const ENTRY = path.join(__dirname, './src/app/App.js');
const OUTPUT = path.join(__dirname, './dist/asset/js');

const sharedPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      GIT_BRANCH: JSON.stringify(GIT_BRANCH),
      GIT_COMMIT: JSON.stringify(GIT_COMMIT),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
];

module.exports = {
  entry: DEBUG
    ? ['babel-polyfill', 'react-hot-loader/patch', ENTRY]
    : ['babel-polyfill', ENTRY],
  output: {
    path: path.resolve(OUTPUT),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: DEBUG ? 'eval' : false,
  devServer: {
    historyApiFallback: true,
    stats: {
      chunkModules: false
    }
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      },
      {
        test: /\.*css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: DEBUG
    ? [
        ...sharedPlugins,
        new BrowserSyncPlugin(
          {
            host: 'localhost',
            port: 8000,
            proxy: 'http://localhost:8080/',
            ui: false
          },
          {
            reload: false
          }
        )
      ]
    : [
        ...sharedPlugins,
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
};
