import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from '../../common/styles/home.css';

export default class Home extends Component {
  render () {
    if (!this.props.isLogin) {
      return <Redirect to="/" />
    }
    return (
      <div className={styles.wrap}>
        <h3>主页</h3>
        <div className={styles.main}>
          这是一个奇幻故事集中营
        </div>
        <div>
          <button className={styles.btn} onClick={this.outLogin.bind(this)}>退出登录</button>
        </div>
        <div>
          <button className={styles.btn} style={{backgroundColor: '#f87'}} onClick={this.randomRoute.bind(this)}>随机路由</button>
        </div>
      </div>
    );
  }
  outLogin () {
    this.props.OUTLOGIN(this.props.history);
  }
  randomRoute () {
    this.props.RANDOM(this.props.history);
  }
  componentDidMount () {
    console.log('主页渲染完毕')
  }
}