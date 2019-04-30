import {
  combineReducers
} from 'redux'
import {
  USER_LOGIN,
  USER_SIGNUP,
  SEARCH_MODS,
} from '../_actions/types';

const accountState = {
  loggedIn: true,
  ID: null,
  user: null,
  email: null,
};
const navState = {
  search: ''
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
        search: action.query
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