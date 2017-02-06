import apiList from './apiList';

var urlToString = (data) =>{
  var param = '';
  for (var key in data) { //请求参数拼接
    if (data.hasOwnProperty(key)) {
      param += key + '=' + data[key] + '&';
    }
  }
  param = param.replace(/&$/i, '');
  return param;
}
/**
 * api 的请求
 * @param {Object} apiObject   api对象
 * @param {Object} params      传递的参数
 * @param {Function} success   成功之后
 * @param {Function} fail      失败之后
 *
 */
var apiCall = (apiObject, params, success, fail) => {
  let opts = {
    url: apiObject.url,
    params: {}
  };
  Object.assign(opts.params, apiObject.params, {
    body: params
  });
  if (/^get$/i.test(opts.params.method)) {
    opts.url += '?' + urlToString(opts.params.body);
  }
  console.info(opts.url);
  fetch(opts.url, opts.params)
  .then(res => {
    return res.json();
  }).then(data => {
    success && success(data);
  }).catch(e => {
    fail && fail(e);
  });
};

/**
 * 发起一个请求。使用 Promise 的形式
 * @param {Object} options 需要请求的 api 的参数
 * @param {String} options.api		[必须] api 的名字
 * @param {String} options.url		[可选] 需要重新添加的url
 * @param {Object} options.params api 的属性
 * @param {Function} then		    请求成功执行
 * @param {Function} catch			请求失败后的执行
 */
var request = (options) =>{
  if (options.api) {
    let apiObject = apiList[options.api];
    if (!apiObject) {
      return;
    }
  // 这里是为了处理的特殊性。
  options.url ? apiObject.url=(apiObject.url + options.url) : '';
  return new Promise((resolve,reject)=>{
    apiCall(apiObject, (options.params || {}), resolve, reject);
  })
  }
}
window.request = request;

export default request
