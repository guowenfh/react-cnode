/*eslint no-console:0 */
'use strict';
const webpack = require('webpack');
const pordConfig = require('./webpack.prod.conf.js')();

webpack(pordConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
})
