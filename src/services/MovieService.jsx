import http from "../http-common";

const getByTitle = (title) => {
  let url = "/?apikey=fa262177&s=" + title;
  return http.get(url);
};

const get = (imdbID) => {
  let url = "/?apikey=fa262177&i=" + imdbID;
  return http.get(url);
};

const MovieService = {
  getByTitle,
  get,
};

export default MovieService;
