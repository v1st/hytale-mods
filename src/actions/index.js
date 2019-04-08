import { USER_LOGIN, USER_SIGNUP } from './types';

export function userLogin(data) {
  return { type: USER_LOGIN, data }
}

export function userSignup(data) {
  return { type: USER_SIGNUP, data }
}
 