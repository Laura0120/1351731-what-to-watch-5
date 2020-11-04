import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";

import {ON_MOVIE_CLICK, ON_CHANGE_GENRE, MOVIES, MOVIE, GENRE, AUTHORIZATION_STATUS, ON_MY_LIST_BUTTON_CLICK} from '../../prop-type';
import GenreList from '../genre-list/genre-list';
import MovieList from '../movie-list/movie-list';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const MovieListWrapped = withVideoPlayer(MovieList);

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
              </div>
            }

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

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
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
  promoMovie: MOVIE,
  activeGenre: GENRE,
  onChangeGenre: ON_CHANGE_GENRE,
  onMovieClick: ON_MOVIE_CLICK,
  authorizationStatus: AUTHORIZATION_STATUS,
  onMyListButtonClick: ON_MY_LIST_BUTTON_CLICK,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {Main};
export default connect(mapStateToProps)(Main);
