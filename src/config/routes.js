import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router'
import Main from 'views/Main';
import Hello from 'views/hello'
import Login from 'views/login/login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}
const RouteConfig = (
  <Route path="/" component={Roots}>
    <IndexRoute component={Main}/>
    <Route path="/main" component={Main}/>
    <Route path="/hello" component={Hello}/>
    <Route path="/login" component={Login}/>
  </Route>
)
export default RouteConfig
