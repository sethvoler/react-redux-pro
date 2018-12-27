import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import {HashRouter as Router} from 'react-router-dom';

// redux 和 react-redux （关联 react 和 redux）
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers 状态树 state 和逻辑操作
import rootReducer from './reducers/rootReducer';

import App from './App';
import * as serviceWorker from './serviceWorker';

// 生成状态树对象
const store = createStore(rootReducer);

// 通过 Provider 将状态树应用到全局
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , 
  document.getElementById('root')
);

serviceWorker.unregister();
