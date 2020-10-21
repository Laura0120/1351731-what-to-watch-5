import {DEFAULT_GENRE} from '../const';

export const getMoviesByGenre = (genre, movies) => {
  if (genre === DEFAULT_GENRE) {
    return movies.slice();
  }
  return movies.filter((movie) => movie.genre === genre);
};

