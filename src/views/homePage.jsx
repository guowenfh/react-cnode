import 'normalize.css/normalize.css';
import 'styles/App.scss';
import React,{ Component } from 'react';
import { Link } from 'react-router';
import BottomBar from './bottomBar';
class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="index">
        使用解构测试,asd
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Link to='/hello'>toHello</Link>
        <Link to='/login'>toLogin</Link>
        <BottomBar />
      </div>
    );
  }
}


export default App;
