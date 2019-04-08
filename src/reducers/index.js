import { combineReducers } from 'redux'
import {USER_LOGIN, USER_SIGNUP} from '../actions/types';

const initialState = ['key', 235235];

function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return [ ...state, {'data': action.data}];
    case USER_SIGNUP:
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  user,
})

export default reducers;
