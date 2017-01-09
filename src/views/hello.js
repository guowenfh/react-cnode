'use strict';
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import localcache from '../lib/localcache';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Touch(e){
    console.error(e);
    console.error(this);
    localcache.set('aaa','asd');
    console.error(localcache.get('aaa'))
  }
  render() {
    return (
      <div>
        <h1>这里是hello组件!
        </h1>
        <RaisedButton label="Default"onTouchTap={this.Touch.bind(this)} />
      </div>
    );
  }
}
export default Hello
