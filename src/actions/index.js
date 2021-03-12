import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE,
} from './actionsTypes';

const setFavorite = (elemento) => ({
  type: SET_FAVORITE,
  elemento,
});

const deleteFavorite = (elemento) => ({
  type: DELETE_FAVORITE,
  elemento,
});

const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

const logoutRequest = (payload) => ({
  type: LOGOUT_REQUEST,
  payload,
});

const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

const getVideoSource = (payload) => ({
  type: GET_VIDEO_SOURCE,
  payload,
});

export {
  setFavorite,
  deleteFavorite,
  loginRequest,
  logoutRequest,
  registerRequest,
  getVideoSource,
};

