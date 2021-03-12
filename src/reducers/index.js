import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, GET_VIDEO_SOURCE } from '../actions/actionsTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      if (state.myList.filter((element) => element.id === action.elemento.id).length !== 0) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.elemento],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.elemento),
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case GET_VIDEO_SOURCE:
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};

export default reducer;
