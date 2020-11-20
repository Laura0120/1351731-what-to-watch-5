import React from 'react';
import PropTypes from 'prop-types';


import {FUNCTION, GENRE} from '../../prop-type';
import {MAX_COUNT_GENRE} from '../../const';

const addGenre = (genres, movie) => {
  genres.push(movie.genre);
  return genres;
};

const GenreList = (props) => {
  const {allMovies, activeGenre, onChangeGenre} = props;
  const allGenre = allMovies.reduce(addGenre, [`All genres`]);
  const uniqueGenres = new Set(allGenre);
  const genreList = [...uniqueGenres];

  return (
    <ul className="catalog__genres-list">

      {genreList.slice(0, Math.min(genreList.length, MAX_COUNT_GENRE)).map((genre) => (
        <li key={genre} className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item `}>
          <a href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              onChangeGenre(evt);
              evt.preventDefault();
            }}
          >{genre}</a>
        </li>
      ))}
    </ul>

  );
};

GenreList.propTypes = {
  allMovies: PropTypes.array.isRequired,
  activeGenre: GENRE,
  onChangeGenre: FUNCTION
};

export default GenreList;
