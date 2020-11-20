import React from 'react';

import {MOVIE, FUNCTION} from '../../prop-type';

const MovieCard = (props) => {
  const {movie, onMovieClick, onMouseOver, onMouseOut, renderPlayer} = props;
  const {preview, title, video, id} = movie;

  return (
    <article
      className='small-movie-card catalog__movies-card'
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onMovieClick(id)}
    >
      <div className='small-movie-card__image'>
        {renderPlayer(video, preview, id)}
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
  movie: MOVIE,
  onMovieClick: FUNCTION,
  onMouseOver: FUNCTION,
  onMouseOut: FUNCTION,
  renderPlayer: FUNCTION,
};

export default MovieCard;

