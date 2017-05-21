import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import App from 'views/app' // 首页
import List from 'views/list' // 首页
import Login from 'views/login' // 登录
import About from 'views/about'; // 关于
import Getstart from 'views/getstart'; // 资料
import Message from 'views/message'; // 消息
import Details from 'views/details';//主题详情

const RouteConfig = () => (
  <Router history={history}>
    <div>
        <Route exact path="/" component={ App } />
        <Route path="/Details/(:id)" component={ Details } />
        <Route path="/login" component={ Login } />
        <Route path="/about" component={ About } />
        <Route path="/getstart" component={ Getstart } />
        <Route path="/message" component={ Message } />
    </div>
  </Router>
);
export default RouteConfig

// const routes = [
//   { path: '/',
//     exact: true,
//     sidebar: () => <SideBar/>,
//     main: () => <List/>
//   },
//   { path: '/about',
//     sidebar: () => <SideBar/>,
//     main: () => <h2>关于我们</h2>
//   },
//   { path: '/contact',
//     sidebar: () => <SideBar/>,
//     main: () => <h2>联系我们</h2>
//   }
// ]
// const SidebarExample = () => (
//   <Router>
//     <div style={{ display: 'flex' }}>
//       <div style={{
//         padding: '10px',
//         width: '40%',
//         background: '#f0f0f0'
//       }}>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li><Link to="/">主页</Link></li>
//           <li><Link to="/about">关于我们</Link></li>
//           <li><Link to="/contact">联系我们</Link></li>
//         </ul>

//         {routes.map((route, index) => (
//           // 在一个app里，你可以加入多个 <Route> ，这些 <Route> 都能正常渲染，
//           // 只要你的 URL 是匹配的。也就是说在一个给定的 URL 下，渲染多个组件
//           // （例如 sidebar 或者是 breadcrumb），不管组件是什么，只要放入多个
//           // <Route> 组件，就可以被正常渲染出来。

//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.sidebar}
//           />
//         ))}
//       </div>

//       <div style={{ flex: 1, padding: '10px' }}>
//         {routes.map((route, index) => (
//           // 像上面这样在一个给定的路径下渲染多个 <Route> ，而且每个
//           // <Route> 的 component 属性都不相同。
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.main}
//           />
//         ))}
//       </div>
//     </div>
//   </Router>
// )
