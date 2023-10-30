import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByTitle } from "../store/actions/movies";
export default function Search() {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
  };

  const resetSearchMovie = () => {
    setSearchMovie(null);
  };

  const callSearchMovie = (e) => {
    e.preventDefault();
    dispatch(getByTitle(searchMovie));
    resetSearchMovie();
  };

  return (
    <>
      <form>
        <input
          className="h-10 border-2 rounded-l-lg md:w-50 border-Navy"
          value={searchMovie}
          onChange={handleSearchMovie}
          type="text"
        />
        <button
          className="w-20 h-10 font-semibold text-center text-white rounded-r-lg bg-Navy"
          onClick={callSearchMovie}
        >
          SEARCH
        </button>
      </form>
    </>
  );
}
