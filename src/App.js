import React, { Component } from 'react';
import styles from './App.css';
import {
  Route,
  Switch
} from 'react-router-dom';

import NavConnect from './connects/navConnect';
import LoginConnect from './connects/loginConnect';
import HomeConnect from './connects/homeConnect';
import AboutConnect from './connects/aboutConnect';
import NewsConnect from './connects/newsConnect';
import NotFind from './page/notFind/NotFind';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.footer}>
          <NavConnect />
        </div>  
        <div>
          <Switch>
            <Route exact path="/" component={LoginConnect} />
            <Route path="/home" component={HomeConnect} />
            <Route path="/about" component={AboutConnect} />
            <Route path="/news" component={NewsConnect} />
            <Route component={NotFind} />
          </Switch>  
        </div>
      </div>
    );
  }
}

export default App;
