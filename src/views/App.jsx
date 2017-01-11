import 'normalize.css/normalize.css';
import 'styles/App.scss';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer, MenuItem } from 'material-ui';

/**
 * 侧边栏
 *
 * @class Sidebar
 * @extends {Component}
 */
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClose = () => this.setState({
    open: false
  });
  render() {
    return (
      <Drawer swipeAreaWidth={ 50 } docked={ false } width={ 200 } open={ this.state.open } onRequestChange={ (open) => this.setState({
                                                                                                          open
                                                                                                        }) }>
        <MenuItem onTouchTap={ this.handleClose }>首页</MenuItem>
        <MenuItem onTouchTap={ this.handleClose }>新手入门</MenuItem>
        <MenuItem onTouchTap={ this.handleClose }>API</MenuItem>
        <MenuItem onTouchTap={ this.handleClose }>登录</MenuItem>
        <MenuItem onTouchTap={ this.handleClose }>关于</MenuItem>
      </Drawer>
      );
  }
}

/**
 * 路由根目录组件，显示当前符合条件的组件
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Sidebar/>
          <div className="container">
            { this.props.children }
          </div>
        </div>
      </MuiThemeProvider>
      );
  }
}


export default App;
