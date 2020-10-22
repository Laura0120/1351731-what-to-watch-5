import React from 'react';

import {MOVIES, ON_MOVIE_CLICK, ON_MOUSE_OVER, ON_MOUSE_OUT, RENDER_PLAYER} from '../../prop-type';
import MovieCard from '../movie-card/movie-card';

const MovieList = (props) => {
  const {currentMovies, renderPlayer, onMovieClick, onMouseOver, onMouseOut} = props;

  return (
    <div className='catalog__movies-list'>
      {currentMovies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={onMovieClick}
            renderPlayer={renderPlayer}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  currentMovies: MOVIES,
  onMovieClick: ON_MOVIE_CLICK,
  renderPlayer: RENDER_PLAYER,
  onMouseOver: ON_MOUSE_OVER,
  onMouseOut: ON_MOUSE_OUT,
};

export default MovieList;
