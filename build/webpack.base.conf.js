var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
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

  },
  //所有的出口文件，注意，所有的包括图片等本机被放置到了dist目录下，其他文件放置到static目录下
  output: {
    path: path.join(__dirname, '/../dist/assets'), //生成目录
    publicPath: '/assets/', //生成的公共目录
    filename: '[name].js'
  },

  //配置插件
  plugins: [
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
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: resolve('src')
      }, {
      test: /\.(scss|sass|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader' //?outputStyle=expanded&sourceMap=true&sourceMapContents=true&includePaths[]=./node_modules
      ]
    }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }]
  }
};



module.exports = config;
