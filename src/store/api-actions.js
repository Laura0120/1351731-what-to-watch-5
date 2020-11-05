import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";


const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovies(data));
    })
);

const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`GET /films/:id`)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovieById(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`films/:id`))));

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);


export {fetchMovies, checkAuth, login, fetchMovieById};

