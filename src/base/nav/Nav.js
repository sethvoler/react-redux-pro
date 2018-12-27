import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../App.css';

export default class Nav extends Component {
  render () {
    return (
      <ul className={styles.footerNav} style={{display: this.props.isLogin ? "flex" : "none"}}>
        <li className={styles.footerNavItem}>
          <NavLink onClick={this.ROUTEHOME.bind(this)} className={this.props.route === 'home' ? styles.activeRoute : null} to="/home">主页</NavLink>
        </li>
        <li className={styles.footerNavItem}>
          <NavLink onClick={this.ROUTEABOUT.bind(this)} className={this.props.route === 'about' ? styles.activeRoute : null} to="/about">关于我们</NavLink>
        </li>
        <li className={styles.footerNavItem}>
          <NavLink onClick={this.ROUTENEWS.bind(this)} className={this.props.route === 'news' ? styles.activeRoute : null} to="/news">奇闻</NavLink>
        </li>
      </ul>
    );
  }
  ROUTEHOME () {
    this.props.ROUTEHOME()
  }
  ROUTEABOUT () {
    this.props.ROUTEABOUT()
  }
  ROUTENEWS () {
    this.props.ROUTENEWS()
  }
} 