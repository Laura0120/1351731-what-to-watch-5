import React from 'react';

import {MOVIE, ON_MOVIE_CLICK, ON_MOUSE_OVER, ON_MOUSE_OUT, RENDER_PLAYER} from '../../prop-type';

const MovieCard = (props) => {
  const {movie, onMovieClick, onMouseOver, onMouseOut, renderPlayer} = props;
  const {poster, title, video, id} = movie;

  return (
    <article className='small-movie-card catalog__movies-card' id={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onMovieClick}>
      <div className='small-movie-card__image'>
        {renderPlayer(video, poster, id)}
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
  onMovieClick: ON_MOVIE_CLICK,
  onMouseOver: ON_MOUSE_OVER,
  onMouseOut: ON_MOUSE_OUT,
  renderPlayer: RENDER_PLAYER,
};

export default MovieCard;

