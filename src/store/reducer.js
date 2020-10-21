import {ActionType} from './action';
import {extend} from '../utils/common';
import {generateMovies} from '../mocks/movies';
import {DEFAULT_GENRE} from '../const';
import {getMoviesByGenre} from '../utils/filter-movies';


const MOVIE_COUNT = 8;

const initialState = {
  genre: DEFAULT_GENRE,
  movies: getMoviesByGenre(DEFAULT_GENRE, generateMovies(MOVIE_COUNT))
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.genre,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        movies: action.movies
      });
  }

  return state;
};


export {reducer};
