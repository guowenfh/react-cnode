import React, {Component} from 'react';

class TopicsDetail extends Component {
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

