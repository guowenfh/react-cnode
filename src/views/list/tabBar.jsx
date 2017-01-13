import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { hashHistory } from 'react-router'
class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bottom-bar">
        <Tabs>
          <Tab label="全部" onActive={()=>{hashHistory.push('/?tab=all')}}/>
          <Tab label="精华" onActive={()=>{hashHistory.push('/?tab=good')}}/>
          <Tab label="分享" onActive={()=>{hashHistory.push('/?tab=share')}}/>
          <Tab label="问答" onActive={()=>{hashHistory.push('/?tab=ask')}}/>
          <Tab label="招聘" onActive={()=>{hashHistory.push('/?tab=job')}}/>
        </Tabs>
      </div>

      );
  }
}

export default TopBar;
