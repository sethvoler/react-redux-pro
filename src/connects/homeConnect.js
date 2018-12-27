import { connect } from 'react-redux';
import { OUT_LOGIN, RANDOM_STR } from '../actions';

// 引入组件
import Home from '../page/home/Home';

// react-redux 封装组件
// 组件通过 props 所要获取的 state
function mapStateToProps (state) {
  return {
    isLogin: state.isLogin
  };
}

// 组件通过 props 所要获取的 actions
function mapDispatchToProps (dispatch) {
  return {
    OUTLOGIN: function (history) {
      dispatch({type: OUT_LOGIN});
      history.push('/');
    },
    RANDOM: function (history) {
      dispatch({type: RANDOM_STR});
      let str = '/' + Math.random().toString(36).substr(2);
      history.push(str);
    }
  }
}

// 封装传递 dispatch 和 state
var HomeConnect = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeConnect;