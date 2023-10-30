import { GET_BY_ID, GET_BY_TITLE, REMOVE_GET_BY_ID } from './types';
import MovieApiService from '../../services/MovieService';

export const getById = (id) => async (dispatch) => {
  try {
    const res = await MovieApiService.get(id);
    dispatch({
      type: GET_BY_ID,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeGetByid = () => {
  return {
    type: REMOVE_GET_BY_ID,
  };
};

export const getByTitle = (title) => async (dispatch) => {
  try {
    const res = await MovieApiService.getByTitle(title);
    dispatch({
      type: GET_BY_TITLE,
      payload: res.data.Search,
    });
  } catch (error) {
    console.log(error);
  }
};
