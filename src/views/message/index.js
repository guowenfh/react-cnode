import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount(){
    // this.setState({
    //   reactJson:['div',{className:'ez-led'},'Hello, React!',React.createElement("div",{className:"ez-led"},"Hello, React!")]
    // })
  }
  render(){
      return (
        <div>
            按钮
        </div>
      )
  }
}

export default Message;
