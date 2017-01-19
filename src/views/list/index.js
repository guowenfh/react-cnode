import React, { Component } from 'react';
import request from 'config/fetch';
import Tabbar from './tabBar';
import ItemContent from './item';
class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      page: 1, // 页数
      pagesList:[] // 数据列表
    };
  }
  getTocList(props,state) {
    request({
      api: 'get_topics',
      params: {
        tab : props.location.query.tab || 'all',
        page: state.page || this.state.page,
        limit: 10 // 每一页字数
      }
    }, res => {
      let _pagesList = this.state.pagesList;
      _pagesList = _pagesList.concat(res.data)
      this.setState({
        pagesList : _pagesList
      });
    }, err => {
      console.info(err);
    })
  }
  initCurrentPage(){
    this.setState({
      page: 1, // 页数
      pagesList:[] // 数据列表
    })
  }
  componentWillMount() {
    this.initCurrentPage();
    this.getTocList(this.props,this.state);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.location.query.tab !== nextProps.location.query.tab){
      this.initCurrentPage();
    }
  }
  componentWillUpdate(nextProps,nextState){
    if((this.props.location.query.tab !== nextProps.location.query.tab) || (this.state.page !==nextState.page)){
      console.info('info');
      this.getTocList(nextProps,nextState);
    }
  }
  render() {
    return (
      <div >
        <Tabbar tab={this.props.location.query.tab}/>
        <div className="index">
          <ItemContent pagesList = {this.state.pagesList}/>
        </div>
      </div>
      );
  }
}



export default TopicsList;
