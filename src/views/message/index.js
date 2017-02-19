import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactJson:['div',null]
    }
  }
  componentWillMount(){
    // this.setState({
    //   reactJson:['div',{className:'ez-led'},'Hello, React!',React.createElement("div",{className:"ez-led"},"Hello, React!")]
    // })
  }
  render(){
      console.error(this.state.reactJson);
      var data = this.state.reactJson;
      return (
        <div>
          <buttom onClick={()=>{
            var that = this;
            this.setState({
              reactJson:['div',{className:'ez-led',onClick:eval('()=>{that.setState({reactJson:["div",null]})}')},'Hello, React!',
              React.createElement("div",{className:"ez-led"},"Hello, React!")]
            })
          }}>
            按钮
          </buttom>
          {React.createElement.apply(null,data)}
        </div>
      )
  }
}

export default Message;
