import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";


const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovies(data));
    })
);

const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovieById(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${id}`))));

const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(ActionCreator.loadPromoMovie(data));
    }));

const fetchCommentsByMovieId = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadCommentsByMovieId(data));
    }));

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(``)))
);

const addReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${id}`)))
);


export {fetchMovies, checkAuth, login, fetchMovieById, fetchPromoMovie, fetchCommentsByMovieId, addReview};

