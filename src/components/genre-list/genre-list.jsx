import React from 'react';

import {MOVIES, ON_CHANGE_GENRE} from '../../prop-type';

const addGenreInListUnidueGenre = (uniqueGenres, movie) => {
  const listUniqueGenres = uniqueGenres;
  if (!listUniqueGenres.includes(movie.genre)) {
    listUniqueGenres.push(movie.genre);
  }
  return listUniqueGenres;
};

const GenreList = (props) => {
  const {movies, onChangeGenre} = props;
  const genreList = movies.reduce(addGenreInListUnidueGenre, []);
  return (
    <ul
      className="catalog__genres-list"
      onClick={(evt) => {
        const activeGenre = evt.target;
        evt.preventDefault();
        onChangeGenre(activeGenre.textContent);
      }}>
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {genreList.map((genre) => (
        <li key={genre} className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>

  );
};

GenreList.propTypes = {
  movies: MOVIES,
  onChangeGenre: ON_CHANGE_GENRE
};

export default GenreList;
