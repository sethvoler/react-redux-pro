import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from '../../common/styles/about.css';

export default class About extends Component {
  render () {
    if (!this.props.isLogin) {
      return <Redirect to="/" />
    }
    return (
      <div className={styles.wrap}>
        <h3>关于我们</h3>
        <div>
          WE R FAMILY！！！
        </div>
      </div>
    );
  }
  componentDidMount () {
    console.log('About渲染完毕')
  }
}