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
//设置开发时源代码映射工具
// const devTool = __DEV__ ? 'cheap-module-eval-source-map' : 'hidden-source-map';

//基本配置
var config = {
  cache: false,
  entry:{ // 默认入口
    app:'./src/index.js'
    // [
    //   // 'react-hot-loader/patch',
    //   // `webpack-dev-server/client?http://0.0.0.0:${PORT}`,
    //   // 'webpack/hot/only-dev-server',
    //   './src/index.js'
    // ]
    ,
    // ================================
    // 框架 / 类库 分离打包
    // ================================
    vendor: [
      'react',
      'react-dom',
      'material-ui',
      'react-tap-event-plugin',
      'react-router',
    ]
  },
  //所有的出口文件，注意，所有的包括图片等本机被放置到了dist目录下，其他文件放置到static目录下
  output: {
    path: path.join(__dirname, '/../dist/assets'), //生成目录
    publicPath: '/assets/', //生成的公共目录
    filename: '[name].js'
  },

  //配置插件
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor' // 指定公共 bundle 的名字。
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: '/',
        postcss: [
          autoprefixer({
            browsers: [
              'last 10 versions',
              'Android >= 4.0',
              'ios > 7'
            ]
          })
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



module.exports = config;
