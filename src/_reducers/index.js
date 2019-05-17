import {
  combineReducers
} from 'redux'
import {
  USER_LOGIN,
  USER_SIGNUP,
  SEARCH_MODS,
  CATEGORY
} from '../_actions/types';

const accountState = {
  loggedIn: true,
  ID: null,
  user: null,
  email: null,
};
const navState = {
  search: '',
};

const staticData = {
  categories: ['Admin Tools',
    'Anti-Griefing Tools',
    'Web Administration',
    'Management',
    'Chat Related',
    'Economy',
    'Teleportation',
    'Role Playing',
    'Fun',
    'Informational',
    'General',
    'Mechanics',
    'Miscellaneous',
  ]
}

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

function info(state = staticData, action) {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  user,
  search,
  info
})

export default reducers;