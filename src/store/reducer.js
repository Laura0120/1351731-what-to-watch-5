import {ActionType} from './action';
import {extend} from '../utils/common';
import {DEFAULT_GENRE} from '../const';
import {filterMoviesByGenre} from '../utils/filter-movies';
import {adaptToClient} from '../utils/adapt';
import {promoMovie} from '../mocks/movies';

const initialState = {
  allMovies: [],
  genre: DEFAULT_GENRE,
  currentMovies: [],
  promo: promoMovie,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.UPDATE_MOVIES:
      return extend(state, {
        currentMovies: adaptToClient(filterMoviesByGenre(state.allMovies, state.genre)),
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        allMovies: action.allMovies,
      });
  }

  return state;
};


export {reducer};
