import React from 'react';
import {connect} from "react-redux";

import {FUNCTION, MOVIES} from '../../prop-type';
import {getMoviesByGenre} from '../../store/selectors';
import MovieListWrapped from '../movie-list/movie-list';
import UserBlock from '../user-block/user-block';
import {fetchMovieById, fetchCommentsByMovieId} from "../../store/api-actions";

const MyList = (props) => {
  const {movies, onMovieClick} = props;

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <a href='/' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <h1 className='page-title user-page__title'>My list</h1>

        <UserBlock/>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <MovieListWrapped movies={movies} onMovieClick={onMovieClick}/>
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
  movies: MOVIES,
  onMovieClick: FUNCTION
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  }
});
export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
