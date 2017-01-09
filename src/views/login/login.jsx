'use strict';
import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';
import {AppBar} from 'material-ui';
import './login.scss';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Touch(e) {
    console.error(e);
    console.error(this);
  }
  render() {
    return (
      <div>
        <h1 className="login">这里是helDefaultlo组件!
        </h1>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <RaisedButton
          label="Default"
          onTouchTap={this
          .Touch
          .bind(this)}/>
      </div>
    );
  }
}
export default Login
