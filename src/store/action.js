const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`
};

const ActionCreator = {
  changeGenre: (activeGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: activeGenre,
  }),
  updateMoviesByGenre: () => ({
    type: ActionType.UPDATE_MOVIES,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    allMovies: movies,
  }),
};

export {ActionType, ActionCreator};
