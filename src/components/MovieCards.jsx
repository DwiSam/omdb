import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByTitle } from "../store/actions/movies";
import { addFavoriteMovie } from "../store/actions/favorite";
import { Link } from "react-router-dom";

export default function MovieCards() {
  const { getDataByTitle } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleAddToFavorite = (movieFavorite) => {
    dispatch(addFavoriteMovie(movieFavorite));
  };
  useEffect(() => {
    dispatch(getByTitle("One Piece"));
  }, [dispatch]);

  return (
    <section class="flex items-center bg-gray-100 font-poppins dark:bg-gray-900 ">
      <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {getDataByTitle &&
            getDataByTitle.map((movie) => (
              <div key={movie.imdbID} className="mt-8">
                <div class="relative w-full h-56">
                  <img
                    src={movie.Poster}
                    alt=""
                    class="object-cover w-full h-full "
                  />
                </div>
                <div class=" p-4 bg-white dark:bg-gray-700 movie-card">
                  <div class="flex items-center justify-between mb-1">
                    <div>
                      <h2 class="text-xl font-semibold dark:text-gray-300">
                        {movie.Title}
                      </h2>
                    </div>
                    <div class="flex">
                      <button
                        onClick={() => handleAddToFavorite(movie)}
                        class="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-6 h-6 bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="flex items-center justify-between ">
                    <div class="flex items-center">
                      <div class="mr-2 text-blue-700 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          class="bi bi-calendar-day"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-400">
                        {" "}
                        {movie.Year}
                      </span>
                    </div>
                    <Link
                      to={"/" + movie.imdbID}
                      class="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
