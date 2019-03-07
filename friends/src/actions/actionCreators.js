import * as types from './actionTypes';
import axios from 'axios';

export const login = (name, password) => dispatch => {
  axios({
    method: 'post',
    url: 'http://localhost:5000/api/login',
    headers: {},
    data: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    }
  })
    .then(res => dispatch({ type: types.LOGIN, payload: res.data.payload }))
    .then(res =>
      dispatch({
        type: types.ADD_INFO,
        payload: {
          username: name,
          password: password
        }
      })
    )
    .catch(err => dispatch(console.log(err)));
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
