import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {AuthorizationStatus, AppRoute} from "../../const";
import {fetchMovieById, fetchCommentsByMovieId} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {FUNCTION, MOVIES, GENRE, AUTHORIZATION_STATUS} from '../../prop-type';
import GenreList from '../genre-list/genre-list';
import MovieListWrapped from '../movie-list/movie-list';
import {getAllMovies, getMoviesByGenre, getGenre} from '../../store/selectors';

const Main = (props) => {
  const {allMovies, currentMovies, promoMovie, activeGenre, onChangeGenre, onMovieClick, authorizationStatus, onMyListButtonClick} = props;
  const {poster, backgroundImage, title, genre, year} = promoMovie || {};

  return (
    <React.Fragment>
      <section className='movie-card'>
        <div className='movie-card__bg'>
          <img src={backgroundImage} alt='The Grand Budapest Hotel' />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header movie-card__head'>
          <div className='logo'>
            <a className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <div className='user-block'>
            {authorizationStatus === AuthorizationStatus.AUTH ?
              <div className='user-block__avatar' onClick={onMyListButtonClick}>
                <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
              </div> :
              <div className="user-block">
                <a href="login" className="user-block__link">Sign in</a>
              </div>}
          </div>
        </header>

        <div className='movie-card__wrap'>
          <div className='movie-card__info'>
            <div className='movie-card__poster'>
              <img src={poster} alt={title} width='218' height='327' />
            </div>

            <div className='movie-card__desc'>
              <h2 className='movie-card__title'>{title}</h2>
              <p className='movie-card__meta'>
                <span className='movie-card__genre'>{genre}</span>
                <span className='movie-card__year'>{year}</span>
              </p>

              <div className='movie-card__buttons'>
                <button className='btn btn--play movie-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list movie-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenreList allMovies={allMovies} activeGenre={activeGenre} onChangeGenre={onChangeGenre} />

          <MovieListWrapped movies={currentMovies} onMovieClick={onMovieClick}/>

        </section>

        <footer className='page-footer'>
          <div className='logo'>
            <a className='logo__link logo__link--light'>
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
    </React.Fragment>
  );
};

Main.propTypes = {
  currentMovies: MOVIES,
  allMovies: PropTypes.array.isRequired,
  promoMovie: PropTypes.object.isRequired,
  activeGenre: GENRE,
  onChangeGenre: FUNCTION,
  onMovieClick: FUNCTION,
  authorizationStatus: AUTHORIZATION_STATUS,
  onMyListButtonClick: FUNCTION,
};

const mapStateToProps = (state) => ({
  allMovies: getAllMovies(state),
  currentMovies: getMoviesByGenre(state),
  activeGenre: getGenre(state),
  promoMovie: state.DATA.promoMovie,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  },
  onChangeGenre(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
  },
  onMyListButtonClick() {
    dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
