import React from 'react';

import {MOVIES, FUNCTION, RENDERED_MOVIE_COUNT} from '../../prop-type';
import MovieCard from '../movie-card/movie-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const MovieList = (props) => {
  const {movies, renderedMovieCount, renderPlayer, renderShowMore, onMovieClick, onMouseOver, onMouseOut} = props;

  return (
    <React.Fragment>
      <div className='catalog__movies-list'>
        {movies.slice(0, Math.min(movies.length, renderedMovieCount)).map((movie) => {
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
      {movies.length > renderedMovieCount ? renderShowMore() : ``}
    </React.Fragment>
  );
};

MovieList.propTypes = {
  movies: MOVIES,
  onMovieClick: FUNCTION,
  renderPlayer: FUNCTION,
  onMouseOver: FUNCTION,
  onMouseOut: FUNCTION,
  renderedMovieCount: RENDERED_MOVIE_COUNT,
  renderShowMore: FUNCTION
};

const MovieListWrapped = withVideoPlayer(MovieList);

export default MovieListWrapped;

