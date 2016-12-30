import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router'
import Main from '../views/Main';
import Hello from '../views/hello'

/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
const RouteConfig = (
  <Route path="/" component={Roots}>
    <IndexRoute component={Main}/>
    <Route path="/main" component={Main}/>
    <Route path="/hello" component={Hello}/>
  </Route>
)
export default RouteConfig
