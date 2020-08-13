import * as types from './actionTypes';
import axios from '../axios/axios';

export const login = (name, password) => dispatch => {
  dispatch(loadingOn());
  axios()({
    method: 'post',
    url: 'http://localhost:5000/api/login',
    headers: {},
    data: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    }
  })
    .then(res => dispatch({ type: types.LOGIN, payload: res.data.payload }))
    .then(res => {
      dispatch({
        type: types.ADD_INFO,
        payload: {
          username: name,
          password: password
        }
      });
      dispatch(loadingOff());
    })

    .catch(err => {
      dispatch(console.log(err));
      dispatch(loadingOff());
    });
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const getFriends = () => dispatch => {
  dispatch(loadingOn());
  axios()
    .get(`http://localhost:5000/api/friends`)
    .then(res => {
      dispatch({ type: types.GET_FRIENDS, payload: res.data });
      dispatch(loadingOff());
    })
    .then(res => console.log(res))
    .catch(err => {
      console.log(err);
      dispatch(loadingOff());
    });
};

export const loadingOn = () => {
  return {
    type: types.LOADING_ON
  };
};

export const loadingOff = () => {
  return {
    type: types.LOADING_OFF
  };
};
