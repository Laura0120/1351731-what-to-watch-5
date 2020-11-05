import {ActionType} from '../../action';
import {extend} from '../../../utils/common';
import {promoMovie} from '../../../mocks/movies';

const initialState = {
  allMovies: [],
  promo: promoMovie,
};

const loadedData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        allMovies: action.payload,
      });
    case ActionType.LOAD_MOVIE_BY_ID:
      return extend(state, {
        openedMovie: action.payload,
      });
  }

  return state;
};


export {loadedData};
