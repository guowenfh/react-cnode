import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'views/app' // 首页
import List from 'views/list' // 列表
import Login from 'views/login' // 登录
import About from 'views/about'; // 关于
import Getstart from 'views/getstart'; // 资料
import Message from 'views/message'; // 消息
const RouteConfig = (
<Route path="/" component={ App }>
  <IndexRoute component={ List } />
  <Route path="/login" component={ Login } />
  <Route path="/about" component={ About } />
  <Route path="/getstart" component={ Getstart } />
  <Route path="/message" component={ Message } />
</Route>
)
export default RouteConfig
