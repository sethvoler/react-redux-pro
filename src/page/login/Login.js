import React, { Component } from 'react';
import styles from '../../common/styles/login.css'

export default class Login extends Component {
  render () {
    return (
      <div className={styles.wrap}>
        <h3>登录页面</h3>
        <div>
          用户名:<input className={styles.item} type="text" ref="username" />
        </div>
        <div>
          密&emsp;码:<input className={styles.item} type="password"  ref="passwd" />
        </div>
        <div>
          <button className={styles.btn} onClick={this.goLogin.bind(this)}>登录</button>
        </div>
      </div>
    );
  }
  goLogin () {
    this.props.GOLOGIN(this.refs.username.value, this.refs.passwd.value, this.props.history);
  }
  componentDidMount () {
    console.log('登录渲染完毕')
  }
}