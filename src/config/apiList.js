/**
 * 请求调用地址基本参数设置
 * @param { Object } query  请求方法
 * @param { String } url api 地址
 * @param { String } method 请求方法
 * @returns { Object } 请求方法参数
 */
function baseServer(query) {
  return {
    'server': 'cnode',
    'url': 'https://cnodejs.org/api/v1' + (query.url || ''),
    'params': {
      method: query.method || 'GET',
      mode: 'same-origin',
      dataType: 'json'
    }
  }
}

const apiList = {
  /**
   * 主题
   */
  // 主题首页列表
  'get_topics': baseServer({
    url: 'topics'
  }),
  // 主题详情
  'get_topic_details': baseServer({
    url: 'topic'
  }),
  // 新建主题
  'post_topics': baseServer({
    url: 'topics',
    method: 'POST'
  }),
  // 编辑主题
  'post_topics_update': baseServer({
    url: '/topics/update',
    method: 'POST'
  }),


  /**
   * 主题收藏
   */
  // 收藏主题
  'post_topic_collect_collect ': baseServer({
    url: '/topic_collect/collect',
    method: 'POST'
  }),
  // 取消收藏主题
  'post_topic_collect_de_collect ': baseServer({
    url: '/topic_collect/de_collect',
    method: 'POST'
  }),
  // 获取用户所收藏的主题
  'get_topic_collect': baseServer({
    url: '/topic_collect'
  }),


  /**
   * 用户
   */
  // 获取用户所收藏的主题
  'get_user': baseServer({
    url: '/user'
  }),
  // 获取用户所收藏的主题
  'post_accesstoken': baseServer({
    url: '/accesstoken',
    method: 'POST'
  }),


  /**
   * 消息通知
   */
  // 获取未读消息数
  'get_message_count': baseServer({
    url: '/message/count'
  }),
  // 获取未读消息数
  'get_message_count': baseServer({
    url: '/message/count'
  }),
  // 获取已读和未读消息
  'get_messages': baseServer({
    url: '/messages'
  }),
  // 标记全部已读
  'post_message_mark_all': baseServer({
    url: '/message/mark_all',
    method: 'POST'
  }),
}

module.exports = apiList
