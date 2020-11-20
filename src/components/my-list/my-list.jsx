import React from 'react';
import {connect} from "react-redux";

import {FUNCTION, MOVIES, AUTHORIZATION_STATUS} from '../../prop-type';
import MovieListWrapped from '../movie-list/movie-list';
import UserBlock from '../user-block/user-block';
import {fetchMovieById, fetchCommentsByMovieId, fetchFavorite, ActionCreator} from "../../store/api-actions";
import {AppRoute} from "../../const";

const MyList = (props) => {
  const {movies, onMovieClick, authorizationStatus, onMyListButtonClick} = props;

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

        <UserBlock authorizationStatus={authorizationStatus} onMyListButtonClick={onMyListButtonClick}/>

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
  onMovieClick: FUNCTION,
  onMyListButtonClick: FUNCTION,
  authorizationStatus: AUTHORIZATION_STATUS
};

const mapStateToProps = (state) => ({
  movies: state.DATA.favoriteMovies,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  },
  onMyListButtonClick() {
    dispatch(fetchFavorite());
    dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST));
  },
});
export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
