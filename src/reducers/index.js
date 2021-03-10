import { SET_FAVORITE, DELETE_FAVORITE } from '../actions/actionsTypes';

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
    default:
      return state;
  }
};

export default reducer;
