import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST } from '../actions/actionsTypes';

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
    default:
      return state;
  }
};

export default reducer;
