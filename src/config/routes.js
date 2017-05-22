import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import SideBar from 'views/app' // 首页
import List from 'views/list' // 首页
import Login from 'views/login' // 登录
import About from 'views/about'; // 关于
import Getstart from 'views/getstart'; // 资料
import Message from 'views/message'; // 消息
import Details from 'views/details';// 主题详情
const RouteConfig = () => (
  <Router history={history}>
    <div>
        <SideBar/>
        <div style={{ flex: 1}}>
          <Route exact path="/" component={ List } />
          <Route path="/Details/(:id)" component={ Details } />
          <Route path="/login" component={ Login } />
          <Route path="/about" component={ About } />
          <Route path="/getstart" component={ Getstart } />
          <Route path="/message" component={ Message } />
        </div>
    </div>
  </Router>
);
export default RouteConfig
