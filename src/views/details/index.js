import React, {Component} from 'react';
import request from 'config/fetch';

class TopicsDetail extends Component {
  constructor(props) {
    super(props);
  }

  getTopicsDetail(){
    request({
      api:'get_topic_details',
      url:'/'+this.props.params.id
    }).then(data=>{
      console.error(data);
    }).catch(e=>{
      console.error(e);
    })
  }
  componentWillMount(){
    this.getTopicsDetail();
  }
  render() {
    console.info(this.props);
    return (
      <div>
      details {this.props.params.id}
      </div>
    );
  }
}

export default TopicsDetail;

