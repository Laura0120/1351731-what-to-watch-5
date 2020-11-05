const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

const ActionCreator = {
  changeGenre: (activeGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: activeGenre,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    allMovies: movies,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export {ActionType, ActionCreator};
