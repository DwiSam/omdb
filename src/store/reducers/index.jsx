import { combineReducers } from 'redux';
import movies from './movies';
import favoriteReducer from './favorite';

export default combineReducers({
  movies,
  favorites: favoriteReducer,
});
