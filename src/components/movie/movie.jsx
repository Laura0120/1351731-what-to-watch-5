import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {MOVIE, AUTHORIZATION_STATUS, FUNCTION} from '../../prop-type';
import {AuthorizationStatus} from "../../const";
import {ActionCreator} from "../../store/action";
import MoreLikeThis from '../more-like-this/more-like-this';


const Movie = (props)=> {
  const {openedMovie, renderTabs, comments, authorizationStatus, onAddReviewClick} = props;
  const {poster, backgroundImage, title, year, genre, id} = openedMovie;

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
              <a href='main.html' className='logo__link'>
                <span className='logo__letter logo__letter--1'>W</span>
                <span className='logo__letter logo__letter--2'>T</span>
                <span className='logo__letter logo__letter--3'>W</span>
              </a>
            </div>

            <div className='user-block'>
              <div className='user-block__avatar'>
                <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
              </div>
            </div>
          </header>

          <div className='movie-card__wrap'>
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
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <a href='' className='btn movie-card__button' onClick={(evt)=>onAddReviewClick(evt, id)} >
                    Add review
                  </a> : ``}
              </div>
            </div>
          </div>
        </div>

        <div className='movie-card__wrap movie-card__translate-top'>
          <div className='movie-card__info'>
            <div className='movie-card__poster movie-card__poster--big'>
              <img src={poster} alt={title} width='218' height='327' />
            </div>

            {renderTabs(openedMovie, comments)}

          </div>
        </div>
      </section>

      <div className='page-content'>
        <MoreLikeThis />
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
  openedMovie: MOVIE,
  renderTabs: FUNCTION,
  comments: PropTypes.array.isRequired,
  authorizationStatus: AUTHORIZATION_STATUS,
  onAddReviewClick: FUNCTION
};

const mapStateToProps = (state) => ({
  openedMovie: state.DATA.openedMovie,
  comments: state.DATA.openMovieComments,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviewClick(evt, id) {
    evt.preventDefault();
    dispatch(ActionCreator.redirectToRoute(`${id}/review`));
  }
});
export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
