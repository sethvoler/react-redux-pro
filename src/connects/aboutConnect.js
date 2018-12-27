import { connect } from 'react-redux';

// 引入组件
import About from '../page/about/About';

// react-redux 封装组件
// 组件通过 props 所要获取的 state
function mapStateToProps (state) {
  return {
    isLogin: state.isLogin
  };
}

// 组件通过 props 所要获取的 actions
function mapDispatchToProps (dispatch) {
  return {};
}

// 封装传递 dispatch 和 state
var AboutConnect = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutConnect;