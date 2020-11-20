import {createSelector} from "reselect";
import {DEFAULT_GENRE, COUNT_SILIMAR_MOVIE} from '../const';
import {adaptToClient} from '../utils/adapt';
import {getRandomInteger} from '../utils/common';

const getAllMovies = (state) => state.DATA.allMovies;
const getGenre = (state) => state.APP_STATE.genre;
const getOpenedMovie = (state) => state.DATA.openedMovie;

const getMoviesByGenre = createSelector(getAllMovies, getGenre, (allMovies, genre) => {
  if (genre === DEFAULT_GENRE) {
    return adaptToClient(allMovies.slice());
  }
  return adaptToClient(allMovies.filter((movie) => movie.genre === genre));
}
);

const getMoviesSimilar = createSelector(getMoviesByGenre, getOpenedMovie, (movies, openedMovie) => {
  const start = getRandomInteger(0, movies.length - COUNT_SILIMAR_MOVIE);
  const moviesLikeThis = movies.filter((movie) => movie.id !== openedMovie.id);
  return moviesLikeThis.slice(start, Math.min(moviesLikeThis.length, start + COUNT_SILIMAR_MOVIE));
});

export {getAllMovies, getGenre, getMoviesByGenre, getMoviesSimilar};
