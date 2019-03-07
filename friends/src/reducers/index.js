import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';
// const initialState = {
//   friends: [],
//   token: null,
//   user: {
//     username: null,
//     password: null
//   }
// };

export function friends(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function user(
  state = {
    username: null,
    password: null
  },
  action
) {
  switch (action.type) {
    case types.ADD_INFO:
      return {
        ...state,
        user: { username: action.payload.username, password: action.payload.password }
      };
    case types.LOGOUT:
      return {
        ...state,
        user: { username: null, password: null }
      };
    default:
      return state;
  }
}

export function token(state = null, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.payload
      };
    case types.LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ friends, user, token });
