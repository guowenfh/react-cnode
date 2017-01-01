require('normalize.css/normalize.css');
require('styles/App.scss');

import React,{ Component } from 'react';
import { Link } from 'react-router';
let yeomanImage = require('../images/yeoman.png');
class App extends Component {
      constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        使用解构测试,asd
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Link to='/hello'>toHello</Link>
      </div>
    );
  }
}


export default App;
