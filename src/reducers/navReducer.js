import { ROUTE_HOME, ROUTE_ABOUT, ROUTE_NEWS } from '../actions';
import { route } from '../states';

function navReducer (state = route, action) {
  switch (action.type) {
    case ROUTE_HOME:
      return state = 'home';
    case ROUTE_ABOUT:
      return state = 'about';
    case ROUTE_NEWS:
      return state = 'news';
    default:
      return state;
  }
}

export default navReducer;