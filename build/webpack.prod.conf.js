const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf.js');
const webpackMerge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  function() {
  return webpackMerge(baseConfig, {
    devtool: 'hidden-source-map',
    plugins: [
      //定义环境变量
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        __DEV__: JSON.stringify('production')
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        // beautify: false,
        // mangle: {
        //     screw_ie8: true,
        //     keep_fnames: true
        // },
        // compress: {
        //     screw_ie8: true
        // },
        // comments: false,
        sourceMap: false
      })
    ]
  })
}

  // // 为生产环境添加额外配置
  // if (NODE_ENV === 'production') {
  //   //定义统一的Application，不同的单页面会作为不同的Application
  //   var appsConfig = require('./apps.config.js');
  //   var apps = appsConfig.apps;

  //   //定义HTML文件入口,默认的调试文件为src/index.html
  //   var htmlPages = [];

  //   //遍历定义好的app进行构造
  //   apps.forEach(function(app) {

  //     //判断是否加入编译
  //     if (app.compiled === false) {
  //       //如果还未开发好,就设置为false
  //       return;
  //     }

  //     //添加入口
  //     config.entry[app.id] = app.src;

  //     //判断是否设置了HTML页面,如果设置了则添加
  //     if (!!app.indexPage) {
  //       //构造HTML页面
  //       htmlPages.push({
  //         filename: app.id + '.html',
  //         // favicon: path.join(__dirname, 'assets/images/favicon.ico'),
  //         template: 'underscore-template-loader!' + app.indexPage, //默认使用underscore作为模板
  //         inject: false, // 使用自动插入JS脚本,
  //         chunks: ['vendors', app.id], //选定需要插入的chunk名,

  //         //设置压缩选项
  //         minify: {
  //           removeComments: true,
  //           collapseWhitespace: true,
  //           removeRedundantAttributes: true,
  //           useShortDoctype: true,
  //           removeEmptyAttributes: true,
  //           removeStyleLinkTypeAttributes: true,
  //           keepClosingSlash: true,
  //           minifyJS: true,
  //           minifyCSS: true,
  //           minifyURLs: true
  //         }
  //       });
  //     }

  //   });

  //   //自动创建HTML代码
  //   htmlPages.forEach(function(p) {
  //     config.plugins.push(new HtmlWebpackPlugin(p));
  //   });

  //   //如果是生成环境下，将文件名加上hash
  //   // config.output.filename = '[name].bundle.[hash:8].js';
  //   config.output.filename = '[name].bundle.js';
  // }
