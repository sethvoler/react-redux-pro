import { connect } from 'react-redux';
import { ROUTE_HOME, ROUTE_ABOUT, ROUTE_NEWS } from '../actions';

// 引入组件
import Nav from '../base/nav/Nav';

// react-redux 封装组件
// 组件通过 props 所要获取的 state
function mapStateToProps (state) {
  return {
    route: state.NavReducer,
    isLogin: state.isLogin
  };
}

// 组件通过 props 所要获取的 actions
function mapDispatchToProps (dispatch) {
  return {
    ROUTEHOME: function () {
      dispatch({type: ROUTE_HOME});
    },
    ROUTEABOUT: function () {
      dispatch({type: ROUTE_ABOUT});
    },
    ROUTENEWS: function () {
      dispatch({type: ROUTE_NEWS});
    }
  };
}

// 封装传递 dispatch 和 state
var NavConnect = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavConnect;