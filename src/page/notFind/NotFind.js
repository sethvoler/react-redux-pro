import React, { Component } from 'react';

// ====== 组件 ======

export default class NotFind extends Component {
  render () {
    return (
      <div style={{margin: '60px', textAlign: 'center'}}>
        <p>很遗憾，这里是一片荒凉的沙漠...</p>
        <p>去<a style={{color: '#f0f'}} href="https://www.baidu.com">百度</a>逛逛吧🤣</p>
      </div>
    );
  }
}