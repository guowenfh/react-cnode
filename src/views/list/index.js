import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ItemContent from './item';
class TopicsList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tabActive:'all'
  }
  handleChange = value => {
    this.setState({
      tabActive: value
    });
  }
  render() {
    return (
        <div>
          <Tabs
            value = {this.state.tabActive}
            onChange={this.handleChange}
            >
            <Tab label="新手入门" value="all">
              <ItemContent page="all"/>
            </Tab>
            <Tab label="精华" value="good">
              <ItemContent page="good"/>
            </Tab>
            <Tab label="分享" value="share">
              <ItemContent page="share"/>
            </Tab>
            <Tab label="问答" value="ask">
              <ItemContent page="ask"/>
            </Tab>
            <Tab label="招聘" value="job">
              <ItemContent page="job"/>
            </Tab>
          </Tabs>
      </div>
      );
  }
}

export default TopicsList;
