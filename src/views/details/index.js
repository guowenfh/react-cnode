import React, {Component} from 'react';
import request from 'config/fetch';
class TopicsDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      'id': '',
      'author_id': '',
      'tab': '',
      'title': '',
      'last_reply_at': '',
      'good': false,
      'top': false,
      'reply_count': 0,
      'visit_count': 15,
      'create_at': '',
      'author': {
        'loginname': 'yakczh',
        'avatar_url': 'https://avatars.githubusercontent.com/u/6591466?v=3&s=120'
        },
      'is_collect': false
    }
  }

  getTopicsDetail(){
    request({
      api:'get_topic_details',
      url:'/'+this.props.match.params.id
    }).then(res=>{
      this.setState({
        'id' : res.data.id,
        'author_id' : res.data.author_id,
        'tab' : res.data.tab,
        'title' : res.data.title,
        'last_reply_at' : res.data.last_reply_at,
        'good' : res.data.good,
        'top' : res.data.top,
        'reply_count' : res.data.reply_count,
        'visit_count' : res.data.visit_count,
        'create_at' : res.data.create_at,
        'author' : res.data.author,
        'is_collect' : res.data.is_collect
      })
      this.refs.detailContent.innerHTML = res.data.content;
    }).catch(e=>{
      console.error(e);
    })
  }
  componentWillMount(){
    this.getTopicsDetail();
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div style={{'borderBottom':'1px solid #eee'}}>
          <h1><em>{this.state.top?'置顶':''}</em>{this.state.title}</h1>
          <ul>
            <li>发布时间：{this.state.create_at}</li>
            <li>作者:{this.state.author.loginname}</li>
            <li>浏览次数{this.state.visit_count}</li>
            <li>来自{this.state.tab}</li>
          </ul>
        </div>
        <div ref="detailContent"></div>
      </div>
    );
  }
}

export default TopicsDetail;

