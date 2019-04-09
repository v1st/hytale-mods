import {
  combineReducers
} from 'redux'
import {
  USER_LOGIN,
  USER_SIGNUP,
  SEARCH_MODS,
} from '../actions/types';

const accountState = {
  'key': 235235
};
const navState = {
  'search': ''
};

function user(state = accountState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.query
      }
    case USER_SIGNUP:
      return state;
    default:
      return state;
  }
}

function search(state = navState, action) {
  switch (action.type) {
    case SEARCH_MODS:
      return {
        ...state,
        'search': action.query
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  user,
  search
})

export default reducers;
