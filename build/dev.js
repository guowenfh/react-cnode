const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

//默认是开发时配置
const config = require('./webpack.base.conf.js');
console.error(config);
const PORT  = 3001;
new WebpackDevServer(webpack(config), {
  //设置WebpackDevServer的开发目录
  contentBase: path.join(__dirname + '/../src'),
  // publicPath: `http://127.0.0.1:${PORT}/`,
  hot: true,
  historyApiFallback: true,
  quiet: true,
  // noInfo: true,
  stats: {colors: true}
}).listen(PORT, '127.0.0.1', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log(result);
  console.log(`Listening at http://127.0.0.1:${PORT}/`);
});
