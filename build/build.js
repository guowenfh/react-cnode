/*eslint no-console:0 */
'use strict';
const webpack = require('webpack');
const config = require('../build/webpack.base.conf.js');

webpack(config, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
})
