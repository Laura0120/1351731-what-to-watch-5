import {DEFAULT_GENRE} from '../const';

const filterMoviesByGenre = (movies, genre = DEFAULT_GENRE) => {
  if (genre === DEFAULT_GENRE) {
    return movies.slice();
  }
  return movies.filter((movie) => movie.genre === genre);
};

export {filterMoviesByGenre};

