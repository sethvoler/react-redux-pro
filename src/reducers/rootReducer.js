// 合并所有状态，对外接口
import { combineReducers } from 'redux';

// 全局 reducer
import isLogin from './indexReducer';

// 子 reducer
import NewsReducer from './newsReducer';
import NavReducer from './navReducer';

// 合并 reducer
var rootReducer = combineReducers({
  isLogin,
  NewsReducer,
  NavReducer
});

export default rootReducer;