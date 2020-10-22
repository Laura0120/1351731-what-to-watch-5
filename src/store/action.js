const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  UPDATE_MOVIES: `UPDATE_MOVIES`
};

const ActionCreator = {
  changeGenre: (activeGenre) => ({
    type: ActionType.CHANGE_GENRE,
    genre: activeGenre,
  }),
  updateMoviesByGenre: () => ({
    type: ActionType.UPDATE_MOVIES,
  }),
};

export {ActionType, ActionCreator};
