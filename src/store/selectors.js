import {createSelector} from "reselect";
import {DEFAULT_GENRE} from '../const';
import {adaptToClient} from '../utils/adapt';

const getAllMovies = (state) => state.DATA.allMovies;
const getGenre = (state) => state.APP_STATE.genre;

const getMoviesByGenre = createSelector(getAllMovies, getGenre, (allMovies, genre) => {
  if (genre === DEFAULT_GENRE) {
    return adaptToClient(allMovies.slice());
  }
  return adaptToClient(allMovies.filter((movie) => movie.genre === genre));
}
);

export {getAllMovies, getGenre, getMoviesByGenre};
