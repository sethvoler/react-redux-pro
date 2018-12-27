import { connect } from 'react-redux';
import { SORT_REVERSE } from '../actions';

// 引入组件
import News from '../page/news/News';

// react-redux 封装组件
// 组件通过 props 所要获取的 state
function mapStateToProps (state) {
  return {
    list: state.NewsReducer.list,
    isLogin: state.isLogin
  };
}

// 组件通过 props 所要获取的 actions
function mapDispatchToProps (dispatch) {
  return {
    SORTREVERSE: function () {
      dispatch({type: SORT_REVERSE});
    }
  }
}

// 封装传递 dispatch 和 state
var NewsConnect = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsConnect;