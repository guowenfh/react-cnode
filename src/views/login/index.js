'use strict';
import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import { AppBar } from 'material-ui';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Touch() {
    fetch('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312', {
      method: 'get',
      dataType: 'json'
    })
      .then(response => {
        return response.json(); // => 返回一个 `Promise` 对象
      })
      .then(data => {
        console.log(data); // 真正地数据结果
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1 className="login">这里是helDefaultlo组件!
              </h1>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <RaisedButton label="Default" onTouchTap={ this
                                                     .Touch
                                                     .bind(this) } />
      </div>
      );
  }
}
export default Login
