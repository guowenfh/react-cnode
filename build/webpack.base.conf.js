var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//获取命令行NODE_ENV环境变量,默认为development
var NODE_ENV = process.env.NODE_ENV || 'development';

//判断当前是否处于开发状态下
var __DEV__ = NODE_ENV === 'development';
const PORT = 3001;



//定义入口变量

//根据不同的环境状态设置不同的开发变量
//开发状态下的默认入口
var entry = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://0.0.0.0:${PORT}`,
  'webpack/hot/only-dev-server',
  './src/index.js'
];
//设置开发时源代码映射工具
const devTool = __DEV__ ? 'cheap-module-eval-source-map' : 'hidden-source-map';
//基本配置
var config = {
  cache: false,
  entry,
  devtool: devTool,
  //所有的出口文件，注意，所有的包括图片等本机被放置到了dist目录下，其他文件放置到static目录下
  output: {
    path: path.join(__dirname, '/../dist/assets'), //生成目录
    publicPath: '/assets/', //生成的公共目录
    filename: 'app.js'
  },

  //配置插件
  plugins: [
    //自动分割Vendor代码
    // new CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.bundle.js', minChunks: Infinity }),
    //定义环境变量
    new webpack.DefinePlugin({
      'process.env': {
        //因为使用热加载，所以在开发状态下可能传入的环境变量为空
        'NODE_ENV': JSON.stringify(NODE_ENV)
      },
      //判断当前是否处于开发状态
      __DEV__: JSON.stringify(__DEV__)
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: '/',
        postcss: [
          autoprefixer({
            browsers: [
              'ie >= 9',
              'ie_mob >= 10',
              'ff >= 30',
              'chrome >= 34',
              'safari >= 7',
              'opera >= 23',
              'ios >= 7',
              'android >= 4.4',
              'bb >= 10'
            ]
          }),
          require('postcss-flexibility')
        ]
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'actions': resolve('src/actions'),
      'components': resolve('src/components'),
      'views': resolve('src/views'),
      'sources': resolve('src/sources'),
      'stores': resolve('src/stores'),
      'styles': resolve('src/styles'),
      'config': resolve('src/config')
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      // exclude: /(node_modules)/,
      use: [
        'babel-loader'
      ]
    }, {
      test: /\.(scss|sass|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true&includePaths[]=./node_modules'
      ]
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
      loader: 'url-loader?limit=8192' //&name=assets/imgs/[hash].[ext]
    }]
  }
};


/*//为生产环境添加额外配置
  if (NODE_ENV === 'production') {
    //定义统一的Application，不同的单页面会作为不同的Application
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    const plugins = require('./webpack/plugins');
    var appsConfig = require('./apps.config.js');
    var apps = appsConfig.apps;

    //定义HTML文件入口,默认的调试文件为src/index.html
    var htmlPages = [];

    //遍历定义好的app进行构造
    apps.forEach(function(app) {

      //判断是否加入编译
      if (app.compiled === false) {
        //如果还未开发好,就设置为false
        return;
      }

      //添加入口
      config.entry[app.id] = app.src;

      //判断是否设置了HTML页面,如果设置了则添加
      if (!!app.indexPage) {
        //构造HTML页面
        htmlPages.push({
          filename: app.id + '.html',
          // favicon: path.join(__dirname, 'assets/images/favicon.ico'),
          template: 'underscore-template-loader!' + app.indexPage, //默认使用underscore作为模板
          inject: false, // 使用自动插入JS脚本,
          chunks: ['vendors', app.id], //选定需要插入的chunk名,

          //设置压缩选项
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        });
      }

    });

    //自动创建HTML代码
    htmlPages.forEach(function(p) {
      config.plugins.push(new HtmlWebpackPlugin(p));
    });

    //如果是生成环境下，将文件名加上hash
    // config.output.filename = '[name].bundle.[hash:8].js';
    config.output.filename = '[name].bundle.js';
  }
*/

module.exports = config;
