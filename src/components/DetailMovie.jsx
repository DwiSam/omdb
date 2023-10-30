import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, removeGetByid } from "../store/actions/movies";

export default function DetailMovie() {
  const { slug } = useParams();
  const { getDataById } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const getMovie = (id) => {
    dispatch(getById(id));
  };

  useEffect(() => {
    if (slug && slug !== "") getMovie(slug);
    return () => {
      dispatch(removeGetByid());
    };
  }, [slug]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="h-screen bg-gray-100 font-poppins dark:bg-gray-900">
        <div className="flex items-center justify-start pt-24 mx-16 mb-5">
          <div className="absolute z-0 rounded-lg md:w-11/12 h-550px bg-white dark:bg-gray-700 text-stone-900" />
          <div className="z-10 flex flex-col items-center md:space-x-40 md:justify-around md:w-11/12 md:flex-row">
            {getDataById ? (
              <>
                <div className="flex flex-col justify-start mb-4 md:w-8/12 md:space-x-40">
                  <h3 className="text-4xl font-bold text-white md:pl-40 md:text-5xl">
                    {getDataById?.Title}
                  </h3>
                  <div className="flex items-center mt-3 mb-3 space-x-3">
                    <div className="flex items-center justify-center h-8 text-center border border-white w-28 hover:bg-white">
                      <p className="font-semibold text-white uppercase hover:text-Navy">
                        {getDataById?.Type}
                      </p>
                    </div>

                    <div className="flex items-center justify-center h-8 text-center border border-white w-28 hover:bg-white">
                      <p className="font-semibold text-white hover:text-Navy ">
                        RATING : {getDataById?.imdbRating}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-white">
                    {getDataById?.Year} | {getDataById?.Runtime} |{" "}
                    {getDataById?.Language} | {getDataById?.Genre}
                  </div>
                  <div className="mt-2 leading-7">
                    <p className="text-white">Genre : {getDataById?.Genre}</p>
                    <p className="text-white">Conent : {getDataById?.Plot}</p>
                    <p className="text-white">Actor : {getDataById?.Actors}</p>
                  </div>
                  <button
                    className="flex items-center justify-around h-8 mt-2 text-center bg-white  rounded text-Navy hover:text-white hover:border-white w-28 hover:bg-Navy hover:shadow-lg"
                    onClick={openModal}
                  >
                    CHECK OUT
                  </button>
                </div>
                <div className="md:w-4/12">
                  <img
                    className="z-10 rounded-lg"
                    src={getDataById?.Poster}
                    alt=""
                  />
                </div>
              </>
            ) : (
              <div className="">Loading...</div>
            )}
          </div>
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
    </>
  );
}
