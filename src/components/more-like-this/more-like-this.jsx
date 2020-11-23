import React from 'react';

import {FUNCTION, MOVIES} from '../../prop-type';
import MovieListWrapped from '../movie-list/movie-list';

const MoreLikeThis = (props) => {
  const {movies, onMovieClick} = props;

  return (
    <section className='catalog catalog--like-this'>
      <h2 className='catalog__title'>More like this</h2>
      <div className='catalog__movies-list'>
        <MovieListWrapped movies={movies} onMovieClick={onMovieClick}/>
      </div>
    </section>
  );
};


MoreLikeThis.propTypes = {
  movies: MOVIES,
  onMovieClick: FUNCTION
};

export default MoreLikeThis;

