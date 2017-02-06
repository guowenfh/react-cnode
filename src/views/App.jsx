import 'normalize.css/normalize.css';
import 'styles/App.scss';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer, MenuItem } from 'material-ui';
import {Link, IndexLink} from 'react-router';

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
  getCurrentQuery(){
    var hash = window.location.hash;
    hash = hash.replace('#','')
    if(hash.indexOf('tab') === -1){
      hash = '/?tab=all'
    }
    return hash;
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
        <MenuItem onTouchTap={ this.handleClose }><IndexLink to={this.getCurrentQuery()}>首页</IndexLink></MenuItem>
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
