import React, { Component } from 'react';
import { List } from 'material-ui/List';
import request from 'config/fetch';
import Tabbar from './tabBar';
import ItemContent from './item';
class ListMain extends Component {
  constructor(props) {
    super(props);
    this.state ={
      listParams:{
        tab : this.props.location.query.tab || 'all',
        page:1,
        limit:5
      }
    };
    console.info(this.props.location.query.tab);
  }

  componentWillMount() {
    console.error('componentWillMount', '组件实例即将挂接（初次渲染');
  }
  componentDidMount() {
    console.error('componentDidMount', '初次渲染后调用');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      tab: nextProps.location.query.tab
    })
    console.error('componentWillReceiveProps', '一个组件收到新的props时被调用.这个方法不会为最初的渲染调用.');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.error('componentWillReceiveProps', '新的props或者state被收到,在渲染前被调用.这个方法不会在最初的渲染或者 forceUpdate 时被调用');
     return this.state.tab!==nextState.tab ? true : false
  }
  componentWillUpdate() {
    this.getTocList();
    console.error('componentWillUpdate', '新的props或者state被接受时,在渲染前被立即调用.这个方法不会被初始渲染调用.');
  }
  componentDidUpdate(){
    console.error('componentDidUpdate');
  }
  componentWillUnmount(){
    console.error('componentWillUnmount');
  }
  getTocList() {
    console.error(this.state.tab);
    request({
      api: 'get_topics',
      params: {
        'page': 1,
        'tab': this.state.tab,
        'limit': '5'
      }
    }, data => {
      console.info(data);
    }, err => {
      console.info(err);
    })
  }
  render() {
     console.error('render')
    return (
      <div style={ { 'paddingTop': '50px' } }>
        <Tabbar />
        <div className="index">
          <List>
            { [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return <ItemContent key={ index } />
              }) }
          </List>
        </div>
      </div>
      );
  }
}


export default ListMain;
