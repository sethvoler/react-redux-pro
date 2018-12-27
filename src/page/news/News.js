import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from '../../common/styles/news.css';

export default class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sort: '倒'
    }
  }
  render () {
    if (!this.props.isLogin) {
      return <Redirect to="/" />
    }
    return (
      <div className={styles.wrap}>
        <h3>奇闻列表</h3>
        <ul>
          {this.props.list.map((item, i) => {
            return (
              <li 
                key={item.id}>
                <h5 className={styles.title}>连载{item.id}: {item.title}</h5>
                <p className={styles.con}>{item.con}</p>
              </li>
            );
          })}
        </ul>
        <button className={styles.btn} onClick={this.SORTREVERSE.bind(this)}>{this.state.sort}序显示</button>
      </div>
    );
  }
  SORTREVERSE () {
    this.props.SORTREVERSE();
    if (this.state.sort === '倒') {
      this.setState({
        sort: '正'
      })
    } else {
      this.setState({
        sort: '倒'
      })
    }
  }
}