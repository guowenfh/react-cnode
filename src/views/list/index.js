import 'normalize.css/normalize.css';
import 'styles/Tabbar.scss';
import React,{ Component } from 'react';
import { Link } from 'react-router';
import Tabbar from 'views/Tabbar';
class List extends Component {
    constructor(props) {
      super(props);
      this.state = {open: false};
    }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div style={{'paddingTop':'50px'}}>
        <Tabbar />
        <div className="index">
          使用解构测试,asd
          <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
          <Link to='/list'>list</Link>
          <Link to='/login'>toLogin</Link>
        </div>
          { this.props.children }
      </div>
    );
  }
}


export default List;
