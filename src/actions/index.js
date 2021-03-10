import { SET_FAVORITE, DELETE_FAVORITE } from './actionsTypes';

const setFavorite = (elemento) => ({
  type: SET_FAVORITE,
  elemento,
});

const deleteFavorite = (elemento) => ({
  type: DELETE_FAVORITE,
  elemento,
});

export { setFavorite, deleteFavorite };
