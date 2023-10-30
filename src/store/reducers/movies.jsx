import { GET_BY_ID, GET_BY_TITLE, REMOVE_GET_BY_ID } from '../actions/types';

const initialState = {
  getDataById: false,
  getDataByTitle: false,
  getDataByFind: false,
};

function movieReducer(movies = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case GET_BY_ID:
      return {
        ...movies,
        getDataById: payload.data,
      };
    case REMOVE_GET_BY_ID:
      return {};
    case GET_BY_TITLE:
      return {
        ...movies,
        getDataByTitle: payload.sort((first, second) => {
          return first.Year - second.Year;
        }),
      };
    default:
      return movies;
  }
}

export default movieReducer;
