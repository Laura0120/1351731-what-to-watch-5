import React from 'react';

import PROP_TYPES from '../../prop-type';
import MovieList from '../movie-list/movie-list';

const MyList = (props) => {
  const {movies, onMovieClick} = props;

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <a href='main.html' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <h1 className='page-title user-page__title'>My list</h1>

        <div className='user-block'>
          <div className='user-block__avatar'>
            <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
          </div>
        </div>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className='catalog__movies-list'>
          <MovieList movies={movies} onMovieClick={onMovieClick}/>
        </div>
      </section>

      <footer className='page-footer'>
        <div className='logo'>
          <a href='main.html' className='logo__link logo__link--light'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <div className='copyright'>
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};


MyList.propTypes = {
  movies: PROP_TYPES.movies,
  onMovieClick: PROP_TYPES.onMovieClick,
};

export default MyList;
