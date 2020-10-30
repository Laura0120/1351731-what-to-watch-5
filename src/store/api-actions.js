import {ActionCreator} from "./action";

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovies(data));
      dispatch(ActionCreator.updateMoviesByGenre(data));
    })
);

