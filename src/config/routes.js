import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'views/app' // 首页
import List from 'views/list'
import Login from 'views/login'

const RouteConfig = (
<Route path="/" component={ App }>
  <IndexRoute component={ List } />
  <Route path="/list" component={ List } />
  <Route path="/login" component={ Login } />
</Route>
)
export default RouteConfig
