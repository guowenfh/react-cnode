import 'normalize.css/normalize.css';
import 'styles/App.scss';
import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router-dom';
import List from './list/index';
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
  handleClose = () => {
    this.setState({
      open: false
    });
  }
  shouldComponentUpdate(nextProps,nextState){
    return (this.state.open !== nextState.open)
  }
  render() {
    return (
      <Drawer
        swipeAreaWidth={ 50 }
        docked={ false }
        width={ 200 }
        open={ this.state.open }
        onRequestChange={ (open) => this.setState({
          open
        }) }>
        <MenuItem onTouchTap={ this.handleClose }><Link to='/list'>首页</Link></MenuItem>
        <MenuItem onTouchTap={ this.handleClose }><Link to="/getstart">新手入门</Link></MenuItem>
        <MenuItem onTouchTap={ this.handleClose }><Link to="/message"> 消息</Link></MenuItem>
        <MenuItem onTouchTap={ this.handleClose }><Link to="/login"> 登录</Link></MenuItem>
        <MenuItem onTouchTap={ this.handleClose }><Link to="/about"> 关于</Link></MenuItem>
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
        <div>
          <Sidebar/>
          <div className="container">
            <List/>
          </div>
        </div>
      );
  }
}


export default App;
