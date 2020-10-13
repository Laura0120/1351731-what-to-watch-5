import React from 'react';

import PROP_TYPES from '../../prop-type';

const MovieCard = (props) => {
  const {movie, onMovieClick, onMouseOver} = props;
  const {poster, title} = movie;

  return (
    <article className='small-movie-card catalog__movies-card' onMouseOver={onMouseOver} onClick={onMovieClick}>
      <div className='small-movie-card__image'>
        <img src={poster} alt={title} width='280' height='175' />
      </div>
      <h3 className='small-movie-card__title'>
        <a className='small-movie-card__link' href='movie-page.html'>
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PROP_TYPES.movie,
  onMovieClick: PROP_TYPES.onMovieClick,
  onMouseOver: PROP_TYPES.onMouseOver,
};

export default MovieCard;

