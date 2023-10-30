import { useSelector, useDispatch } from "react-redux";
import { removeFavoriteMovie } from "../store/actions/favorite";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favoriteMovie } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section class=" flex items-center h-screen bg-gray-100 font-poppins dark:bg-gray-900 ">
      <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {favoriteMovie &&
            favoriteMovie.map((movie) => (
              <div key={movie.imdbID} className="mt-8 ">
                <Link to={"/" + movie.imdbID}>
                  <div class="relative w-full h-56">
                    <img
                      src={movie.Poster}
                      alt=""
                      class="object-cover w-full h-full "
                    />
                  </div>
                </Link>

                <div class="p-4 bg-white dark:bg-gray-700 movie-card">
                  <div class="flex items-center justify-between mb-1">
                    <div>
                      <h2 class="text-xl font-semibold dark:text-gray-300">
                        {movie.Title}
                      </h2>
                    </div>
                    <div class="flex">
                      <div class="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between ">
                    <div class="flex items-center">
                      <button
                        onClick={() => dispatch(removeFavoriteMovie(movie))}
                        class="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100"
                      >
                        Remove from Cart
                      </button>
                    </div>
                    <button
                      onClick={openModal}
                      class="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100"
                    >
                      Check Out Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="bg-white p-4 w-56 rounded-lg shadow-lg dark-bg-gray-900 text-stone-900">
          <h2>Checkout Success</h2>
          <button
            className="bg-Navy text-white py-2 px-4 rounded-md hover-bg-blue-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
