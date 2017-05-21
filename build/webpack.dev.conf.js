const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf.js');
const webpackMerge = require('webpack-merge');
// //获取命令行development环境变量,默认为development
// var NODE_ENV = process.env.NODE_ENV || 'development';

// //判断当前是否处于开发状态下
// var __DEV__ = NODE_ENV === 'development';

module.exports =  function() {
  return webpackMerge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      //定义环境变量
      new webpack.DefinePlugin({
        'process.env': {
          //因为使用热加载，所以在开发状态下可能传入的环境变量为空
          'NODE_ENV': JSON.stringify('development')
        },
        //判断当前是否处于开发状态
        __DEV__: JSON.stringify('development')
      }),
      new webpack.HotModuleReplacementPlugin(),
    ]
  })
}
