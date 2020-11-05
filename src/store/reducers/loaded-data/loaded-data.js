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
        allMovies: action.allMovies,
      });
  }

  return state;
};


export {loadedData};
