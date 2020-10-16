import React from 'react';

import PROP_TYPES from '../../prop-type';
import VideoPlayer from '../video-player/video-player';

const MovieCard = (props) => {
  const {movie, onMovieClick, onMouseOver, onMouseOut, isPlaying} = props;
  const {poster, title, video} = movie;

  return (
    <article className='small-movie-card catalog__movies-card' onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onMovieClick}>
      <div className='small-movie-card__image'>
        <VideoPlayer src={video} poster={poster} isPlaying={isPlaying}/>
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

