import apiList from './apiList';
var xhrObject = (function() {
  var xhr = null
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    //IE6以下
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  return xhr
})();

function objToQueryStr(data) {
  if (typeof data !== 'object') return;
  let param = '';
  for (var key in data) { //请求参数拼接
    if (data.hasOwnProperty(key)) {
      param += key + '=' + data[key] + '&';
    }
  }
  param = param.replace(/&$/, '');
  return param
}

/**
 * AJAX函数封装
 * @param {string} url     请求地址（必须）
 * @param {object} options 发送请求的选项参数
 *   @config {string} [options.type] 请求发送的类型。默认为GET。
 *   @config {Object} [options.data] 需要发送的数据。
 */
function ajax(url, options={}) {
  //1.创建ajax对象
  var xhr = xhrObject;
  //2.连接服务器
  var param = ''; // 请求参数。
  var data = options.data || -1;
  if (typeof (data) === 'object') {
    param = objToQueryStr(data)
  } else {
    // 防止缓存
    param = 'timestamp=' + new Date().getTime();
  }
  //3.发送请求
  var type = options.type ? options.type.toUpperCase() : 'GET';
  if (type === 'GET') {
    // open(方法,url,是否异步)
    xhr.open('GET', url + '?' + param, true);
    xhr.send();
  } else {
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(options.data);
  }
  //4.接收返回
  //OnRedayStateChange事件
  return new Promise((resolve , reject)=>{
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try{
            resolve(JSON.parse(xhr.responseText),xhr)
          }catch(e){
            console.error(e)
          }
        } else {
          reject(xhr)
        }
      }
    };
  })
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
    opts.url += '?' + objToQueryStr(opts.params.body);
  }
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
var request = (options) => {
  if (options.api) {
    // 粗略处理，因为对象的引用特性，这里需要执行一次拷贝，可优化
    let apiObject = JSON.parse(JSON.stringify(apiList[options.api]));
    if (!apiObject) {
      return;
    }
    // 这里是为了处理的特殊性。
    apiObject.url = options.url ? (apiObject.url + options.url) : apiObject.url;
    return new Promise((resolve, reject) => {
      apiCall(apiObject, (options.params || {}), resolve, reject);
    })
  }
}
window.request = request;

export default request
