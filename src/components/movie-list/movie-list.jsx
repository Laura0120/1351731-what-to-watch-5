import React from 'react';

import {MOVIES, FUNCTION} from '../../prop-type';
import MovieCard from '../movie-card/movie-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const MovieList = (props) => {
  const {movies, renderPlayer, onMovieClick, onMouseOver, onMouseOut} = props;

  return (
    <div className='catalog__movies-list'>
      {movies.map((movie) => {
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
  movies: MOVIES,
  onMovieClick: FUNCTION,
  renderPlayer: FUNCTION,
  onMouseOver: FUNCTION,
  onMouseOut: FUNCTION,
};

const MovieListWrapped = withVideoPlayer(MovieList);

export default MovieListWrapped;

