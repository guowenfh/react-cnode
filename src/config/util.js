/**
 * 把传入的对象转化成url的 queryString的形式
 * @param {Object} data 待转化的对象
 * @returns {String}
 */
function toQueryString(data) {
  if (typeof data !== 'object') return '';
  let param = '';
  for (let key in data) { //请求参数拼接
    if (data.hasOwnProperty(key)) {
      param += key + '=' + data[key] + '&';
    }
  }
  param = param.replace(/&$/, '');
  return param;
}

/**
 * 把传入的对象转化成url的 queryString 的形式
 * @param {String} data 待转化的url
 * @returns {Object}
 */
function parseQueryString(url) {
  let queryStr = url.split('?')[1];
  if (!queryStr) return '';
  let group = queryStr && queryStr.split('&');
  let result = {};
  group.forEach(v => {
    var temp = v.split('=');
    var value = temp[1] || '';
    if (temp[0]) {
      result[temp[0]] = value.split(',').length === 1 ? value : value.split(',');
    }
  })
  return result;
}
/**
 * AJAX函数封装
 * @param {string} url     请求地址（必须）
 * @param {object} options 发送请求的选项参数
 *   @config {string} [options.type] 请求发送的类型。默认为GET。
 *   @config {Object} [options.data] 需要发送的数据。
 */
function ajax(url, options = {}) {
  //1.创建ajax对象
  const xhr = new XMLHttpRequest();
  const type = options.type ? options.type.toUpperCase() : 'GET';
  //2.连接服务器
  //3.发送请求
  let queryData = parseQueryString(url);
  let data = Object.assign({}, queryData, options.data || {})
  let param = toQueryString(data); // 请求参数。
  url = url.split('?')[0];
  if (type === 'GET') {
    // open(方法,url,是否异步)
    xhr.open('GET', url + '?' + param, true);
    xhr.send();
  } else if (type === 'POST') {
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  }
  //4.接收返回
  //OnRedayStateChange事件
  return new Promise((resolve, reject) => {
    if (type === 'JSONP') {
      let script = document.createElement('script');
      let timeName = new Date().getTime() + Math.round(Math.random() * 1000);
      let callback = 'JSONP_' + timeName;
      script.src = url + '?' + (param ? '' : '&') + 'callback=' + callback;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      window[callback] = function(data) {
        document.body.removeChild(script);
        delete window[callback];
        try {
          resolve(data);
        } catch (e) {
          reject(e);
        }
      }
    } else {
      try {
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              try {
                resolve(JSON.parse(xhr.responseText), xhr);
              } catch (e) {
                resolve(xhr.responseText, xhr)
              }
            } else {
              reject(xhr);
            }
          }
        };
      } catch (e) {
        console.error(e);
      }
    }
  })
}
export default{
  toQueryString,
  parseQueryString,
  ajax
}
