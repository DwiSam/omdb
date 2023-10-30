import { ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from '../actions/types';

const initialState = {
  favoriteMovie: [],
};

if (localStorage.getItem('favoriteMovie')) {
  initialState.favoriteMovie = JSON.parse(
    localStorage.getItem('favoriteMovie')
  );
} else {
  initialState.favoriteMovie = [];
}

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_MOVIE:
      return {
        favoriteMovie: [...action.payload],
      };
    case REMOVE_FAVORITE_MOVIE:
      return {
        favoriteMovie: [...action.payload],
      };
    default:
      return state;
  }
}
