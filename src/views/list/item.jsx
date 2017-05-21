import React, {Component} from 'react';
import {List} from 'material-ui/List';

import request from 'config/fetch';
import ItemCard from './itemCard';

class ItemContent extends Component {
  constructor(props) {
    super(props);
  }
  state ={
    page: 1, // 页数
    pagesList:[] // 数据列表
  };
  componentWillMount() {
    this.initCurrentPage();
    this.getTocList(this.props.page || 'all',this.state);
  }
  initCurrentPage = () =>{
    this.setState({
      page: 1, // 页数
      pagesList:[] // 数据列表
    })
  }
  getTocList(page,state) {
    request({
      api: 'get_topics',
      params: {
        tab : page,
        page: state.page || this.state.page,
        limit: 10 // 每一页字数
      }
    }).then(res => {
      let _pagesList = this.state.pagesList;
      _pagesList = _pagesList.concat(res.data)
      this.setState({
        pagesList : _pagesList
      });
    }).catch(err => {
      console.info(err);
    });
  }
  getContent(){
    return this.state.pagesList.map((item,index) => {
      return <ItemCard key={ item.id } index={index+1} {...item}/>
    })
  }
  render() {
    return (
      <List style={{'padding':0}}>
        {this.getContent()}
      </List>
    );
  }
}

export default ItemContent;
