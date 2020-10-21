import {generateMovies} from '../mocks/movies';
import {getMoviesByGenre} from '../utils/filter-movies';

const MOVIE_COUNT = 8;

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`
};

const ActionCreator = {
  changeGenre: (activeGenre) => ({
    type: ActionType.CHANGE_GENRE,
    genre: activeGenre,
  }),
  getMoviesByGenre: (activeGenre) => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
    movies: getMoviesByGenre(activeGenre, generateMovies(MOVIE_COUNT))
  }),
};

export {ActionType, ActionCreator};
