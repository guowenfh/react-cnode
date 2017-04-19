import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import {Link} from 'react-router';

const tabIndexState = {
  'all':0,
  'good':1,
  'share':2,
  'ask':3,
  'job':4
}
const tabBarStyle = {
  'position': 'fixed',
  'width': '100%',
  'top': 0,
  'zIndex': 1
}
class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    //tab和之前的不一致，组件才需要更新，否则不更新，提升性能
    return this.props.tab !== nextProps.tab;
  }
  render() {
    return (
      <div>
        <div style={tabBarStyle}>
          <Tabs initialSelectedIndex={tabIndexState[this.props.tab] || 0}>
            <Tab label={<Link to='/?tab=all' style={{color: '#ddd'}} activeStyle={{color:'white'}}>新手入门</Link>}/>
            <Tab label={<Link to='/?tab=good' style={{color: '#ddd'}} activeStyle={{color:'white'}}>精华</Link>}/>
            <Tab label={<Link to='/?tab=share' style={{color: '#ddd'}} activeStyle={{color:'white'}}>分享</Link>}/>
            <Tab label={<Link to='/?tab=ask' style={{color: '#ddd'}} activeStyle={{color:'white'}}>问答</Link>}/>
            <Tab label={<Link to='/?tab=job' style={{color: '#ddd'}} activeStyle={{color:'white'}}>招聘</Link>}/>
          </Tabs>
        </div>
        <div style={{'height':'50px'}}></div>
      </div>

      );
  }
}

export default TopBar;
