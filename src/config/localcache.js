/**
 * 我们当前的所有的信息, 都将是用json的格式 存或取.
 * 可以使用 sessionStorage, 保持当前的会话状态, 刷新也可以存在.
 * 但是关闭之后消失. 可以有更高安全性, 对客户端的存储压力也更小.
 */

/**
 * 判断是否存在storage 这个方法
 */
var _hasStorage = function() {
    return window.sessionStorage || window.localStorage;
};
/**
 * 返回一个类别
 * @param{String} tp 类别 session/storage，默认 session
 */
var _getstorage = function(tp) {
  return tp && tp === 'local' ? window.localStorage : window.sessionStorage;
};

const localcache = { //本地缓存部分都在这里,
  /**
   *  返回该类别下的所有数据
   * @param{String} tp 类别 session/storage，默认storage
   */
  getAll(tp) {
    if (!_hasStorage()) { return false; }
    //这里没有做decode (decodeURIComponent) 处理, 我们假设我们拿的都是原数据, 我们需要的. 具体显示时各业务模块自己处理
    var storage = _getstorage(tp),
      data = {};
    for (let i in storage) {
      data[i] = this.get(i, tp);
    }
    return data;
  },

  /**
   *  返回该类别下的该字段数据
   * @param{String} key 选择的字段
   * @param{String} tp 类别 session/storage，默认storage
   */
  get(key, tp) {
    if (!_hasStorage()) { return false; }
    var storage = _getstorage(tp);
    if (!key || !storage.getItem(key)) {
      return false;
    }
    var v = storage.getItem(key);
    if (/^(\{(.*)\}|\[(.*)\])$/.test(v)) {
      //取的时候, 一般情况下我们给出的应该是json对象.
      return JSON.parse(storage.getItem(key));
    }
    return v;
  },

  /**
   *  设置 session
   * @param {String} key   键值
   * @param {Object} value 存储内容
   * @param {String} tp    类别 session/storage，默认storage
   */
  set(key, value, tp) {
    if (!_hasStorage() || !key || value === undefined) {
      return false;
    }
    var storage = _getstorage(tp);
    var val;
    if (typeof value === 'object') {
      // TODO 在缓存的json对象添加一个修改时间。
      // if (value instanceof Object) {
      //     value._lastModified = rc.util.date.getdate();
      // }
      val = JSON.stringify(value);
    } else {
      val = value;
    }
    storage.setItem(key, val);
  },

  /**
   * 移除某类别下某键值的值
   * @param {String} key 键值
   * @param {String} tp  类别 session/storage，默认storage
   */
  remove(key, tp) {
    if (!key || !_hasStorage()) {
      return false;
    }
    var storage = _getstorage(tp);
    if (storage.getItem(key)) {
      storage.removeItem(key);
      return true;
    }
    return false;
  },

  /**
   * 移除全部或者移除某个类别的全部
   * @param {String} tp  类别 session/storage，默认storage
   * @param {Object} isAll  是否删除所有
   */
  removeAll(tp, isAll) {
    if (!_hasStorage()) { return false; }
    if (!isAll) {
      return _getstorage(tp).clear();
    }
    window.localStorage.clear();
    window.sessionStorage.clear();
    return true;
  }
};
export default localcache;
