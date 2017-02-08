import React, {Component} from 'react';
import request from 'config/fetch';

class TopicsDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      content :''
    }
  }

  getTopicsDetail(){
    request({
      api:'get_topic_details',
      url:'/'+this.props.params.id
    }).then(res=>{
      // console.error(res.data);
      this.refs.detailContent.innerHTML = res.data.content;
    }).catch(e=>{
      console.error(e);
    })
  }
  componentWillMount(){
    this.getTopicsDetail();
  }
  render() {
    return (
      <div>

      details {this.props.params.id}
      <div ref="detailContent"></div>
      </div>
    );
  }
}

export default TopicsDetail;

