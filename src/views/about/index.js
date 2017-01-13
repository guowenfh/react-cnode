import React, {Component} from 'react';

class About extends Component {
  Touch() {
    fetch('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312', {
      method: 'get',
      dataType: 'json'
    })
      .then(response => {
        return response.json(); // => 返回一个 `Promise` 对象
      })
      .then(data => {
        console.log(data); // 真正地数据结果
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div onTouchTap={ this.Touch.bind(this) }>
        About
      </div>
    );
  }
}

export default About;
