import {
  USER_LOGIN,
  USER_SIGNUP,
  SEARCH_MODS,
  CATEGORY
} from './types';

// User Account
export function userLogin(data) {
  return {
    type: USER_LOGIN,
    data
  }
}

export function userSignup(data) {
  return {
    type: USER_SIGNUP,
    data
  }
}

// User Search
export function searchMods(query) {
  return {
    type: SEARCH_MODS,
    query
  }
}

// Static Data
export function getCategories(data) {
  return {
    type: CATEGORY,
    data
  }
}