import React, {Component} from 'react';
import {List,ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import {Link} from 'react-router';
import request from 'config/fetch';
class ItemCard extends Component {
  render() {
    let {title,author,id,reply_count,visit_count}  = this.props;
    return (
      <Link to={'/details/'+id}>
        <ListItem
          leftAvatar={<Avatar src={author.avatar_url} />}
          primaryText={
            <p>{title}</p>
          }
          secondaryText={
            <div>
              <span style={{color: darkBlack}}>{author.loginname}</span>
              <div>
                <span>{reply_count}</span>/<span>{visit_count}</span>
              </div>
            </div>
          }
          secondaryTextLines={2}
          innerDivStyle={{'padding':'0 15px 5px 72px'}}
          nestedListStyle={{'padding':'0 5px 5px 72px'}}
        />
        <Divider inset={true} />
      </Link>
    );
  }
}

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
      return <ItemCard key={ item.id } index={index+1}{...item}/>
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
