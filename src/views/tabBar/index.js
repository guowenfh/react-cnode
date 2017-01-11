import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bottom-bar">
        <Tabs>
          <Tab label="全部"/>
          <Tab label="精华"/>
          <Tab label="分享"/>
          <Tab label="问答"/>
          <Tab label="招聘"/>
        </Tabs>
      </div>

      );
  }
}

export default TopBar;
