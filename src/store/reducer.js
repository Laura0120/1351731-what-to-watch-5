import {ActionType} from './action';
import {extend} from '../utils/common';
import {generateMovies} from '../mocks/movies';
import {DEFAULT_GENRE} from '../const';
import {filterMoviesByGenre} from '../utils/filter-movies';

const MOVIE_COUNT = 8;
const ALL_MOVIES = generateMovies(MOVIE_COUNT);

const initialState = {
  allMovies: ALL_MOVIES,
  genre: DEFAULT_GENRE,
  currentMovies: filterMoviesByGenre(ALL_MOVIES, DEFAULT_GENRE)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.genre,
      });
    case ActionType.UPDATE_MOVIES:
      return extend(state, {
        currentMovies: filterMoviesByGenre(state.allMovies, state.genre),
      });
  }

  return state;
};


export {reducer};
