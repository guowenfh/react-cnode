
'use strict';
import React,{ Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>这里是hello组件!
              <div>{this.props.children}</div>
</h1>
      </div>
    );
  }
}
export default Hello
