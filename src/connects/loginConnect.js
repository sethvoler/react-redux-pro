import { connect } from 'react-redux';
// import { GO_LOGIN } from '../actions';

// 引入组件
import Login from '../page/login/Login';
import { GO_LOGIN } from '../actions';

// react-redux 封装组件
// 组件通过 props 所要获取的 state
function mapStateToProps (state) {
  return {};
}

// 组件通过 props 所要获取的 actions
function mapDispatchToProps (dispatch) {
  return {
    GOLOGIN: function (username, passwd, history) {
      setTimeout(() => {
        dispatch({type: GO_LOGIN});
        history.push('/home');
      }, 1000);
    }
  }
}

// 封装传递 dispatch 和 state
var LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginConnect;