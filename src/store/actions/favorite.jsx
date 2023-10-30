import { ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from "./types";

export const addFavoriteMovie = (movie) => async (dispatch) => {
  const favoriteMovie = localStorage.getItem("favoriteMovie")
    ? JSON.parse(localStorage.getItem("favoriteMovie"))
    : [];

  const existingMovie = favoriteMovie.find(
    (favoriteItem) => favoriteItem.imdbID === movie.imdbID
  );

  if (existingMovie) {
    // Film sudah ada di daftar favorit, tambahkan 1 ke count-nya
    existingMovie.count += 1;
  } else {
    // Film belum ada di daftar favorit, tambahkan dengan count 1
    const movieToAdd = {
      ...movie,
      count: 1,
    };
    favoriteMovie.push(movieToAdd);
  }

  localStorage.setItem("favoriteMovie", JSON.stringify(favoriteMovie));

  dispatch({
    type: ADD_FAVORITE_MOVIE,
    payload: favoriteMovie,
  });
};

export const removeFavoriteMovie = (movie) => async (dispatch) => {
  const favoriteMovie = localStorage.getItem("favoriteMovie")
    ? JSON.parse(localStorage.getItem("favoriteMovie"))
    : [];

  const existingMovie = favoriteMovie.find(
    (favoriteItem) => favoriteItem.imdbID === movie.imdbID
  );

  if (existingMovie) {
    if (existingMovie.count === 1) {
      // Hapus film jika count-nya adalah 1
      const updatedFavoriteMovie = favoriteMovie.filter(
        (favoriteItem) => favoriteItem.imdbID !== movie.imdbID
      );
      localStorage.setItem(
        "favoriteMovie",
        JSON.stringify(updatedFavoriteMovie)
      );
      dispatch({
        type: REMOVE_FAVORITE_MOVIE,
        payload: updatedFavoriteMovie,
      });
    } else {
      // Kurangi count-nya jika lebih dari 1
      existingMovie.count -= 1;
      localStorage.setItem("favoriteMovie", JSON.stringify(favoriteMovie));
      dispatch({
        type: REMOVE_FAVORITE_MOVIE,
        payload: favoriteMovie,
      });
    }
  }
};
