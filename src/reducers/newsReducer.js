import { SORT_REVERSE } from '../actions';
import { newsinit } from '../states';

function newsReducer (state = newsinit, action) {
  switch (action.type) {
    case SORT_REVERSE:
      var arr = state.list;
      var arr2 = [];
      for (var i=arr.length-1; i>=0; i--) {
        arr2.push(arr[i])
      }
      return Object.assign({}, state, {list: arr2})
    default:
      return state;
  }
}

export default newsReducer;