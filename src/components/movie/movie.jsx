import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {MOVIE, FUNCTION, AUTHORIZATION_STATUS, MOVIES} from '../../prop-type';
import {AuthorizationStatus, AppRoute} from "../../const";
import {ActionCreator} from "../../store/action";
import {changeFavorite, fetchFavorite, fetchMovieById, fetchCommentsByMovieId} from "../../store/api-actions";
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieButtons from '../movie-buttons/movie-buttons';
import UserBlock from '../user-block/user-block';
import {getMoviesSimilar} from '../../store/selectors';

const getAddReviwLink = (status, callback, id) => {
  return (
    status === AuthorizationStatus.AUTH ?
      <a href='' className='btn movie-card__button' onClick={(evt)=>callback(evt, id)} >
        Add review
      </a> : ``);
};

const Movie = (props)=> {
  const {movie, renderTabs, comments, moviesLikeThis, authorizationStatus, onAddReviewClick, onPlayClick, onFavoriteClick, onMyListButtonClick, onMovieClick} = props;
  const {poster, backgroundImage, title, year, genre, id, isFavorite} = movie;

  return (
    <React.Fragment>
      <section className='movie-card movie-card--full'>
        <div className='movie-card__hero'>
          <div className='movie-card__bg'>
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header movie-card__head'>
            <div className='logo'>
              <a href='/' className='logo__link'>
                <span className='logo__letter logo__letter--1'>W</span>
                <span className='logo__letter logo__letter--2'>T</span>
                <span className='logo__letter logo__letter--3'>W</span>
              </a>
            </div>

            <UserBlock authorizationStatus={authorizationStatus} onMyListButtonClick={onMyListButtonClick}/>
          </header>

          <div className='movie-card__wrap'>
            <div className='movie-card__desc'>
              <h2 className='movie-card__title'>{title}</h2>
              <p className='movie-card__meta'>
                <span className='movie-card__genre'>{genre}</span>
                <span className='movie-card__year'>{year}</span>
              </p>

              <MovieButtons id={id} isFavorite={isFavorite} onPlayClick={onPlayClick} onFavoriteClick={onFavoriteClick}
                authorizationStatus={authorizationStatus} onAddReviewClick={onAddReviewClick} getAddReviwLink={getAddReviwLink}/>

            </div>
          </div>
        </div>

        <div className='movie-card__wrap movie-card__translate-top'>
          <div className='movie-card__info'>
            <div className='movie-card__poster movie-card__poster--big'>
              <img src={poster} alt={title} width='218' height='327' />
            </div>

            {renderTabs(movie, comments)}

          </div>
        </div>
      </section>

      <div className='page-content'>
        <MoreLikeThis movies={moviesLikeThis} onMovieClick={onMovieClick}/>
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
    </React.Fragment>
  );
};

Movie.propTypes = {
  movie: MOVIE,
  moviesLikeThis: MOVIES,
  renderTabs: FUNCTION,
  comments: PropTypes.array.isRequired,
  authorizationStatus: AUTHORIZATION_STATUS,
  onAddReviewClick: FUNCTION,
  onPlayClick: FUNCTION,
  onFavoriteClick: FUNCTION,
  onMyListButtonClick: FUNCTION,
  onMovieClick: FUNCTION,
};

const mapStateToProps = (state) => ({
  moviesLikeThis: getMoviesSimilar(state),
  movie: state.DATA.openedMovie,
  comments: state.DATA.openMovieComments,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviewClick(evt, id) {
    evt.preventDefault();
    dispatch(ActionCreator.redirectToRoute(`${id}/review`));
  },
  onPlayClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/player/${id}`));
  },
  onFavoriteClick(id, isFavorite) {
    dispatch(changeFavorite(id, isFavorite));
  },
  onMyListButtonClick() {
    dispatch(fetchFavorite());
    dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST));
  },
  onMovieClick(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  }
});
export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
