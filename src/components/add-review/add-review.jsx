import React from 'react';
import {connect} from "react-redux";

import AddReviewForm from '../add-review-form/add-review-form';
import UserBlock from '../user-block/user-block';
import {FUNCTION, MOVIE} from '../../prop-type';
import {ActionCreator} from "../../store/action";

const AddReview = (props) => {
  const {openedMovie, onMoviePageClick} = props;
  const {backgroundImage, poster, title, id} = openedMovie;

  return (
    <section className='movie-card movie-card--full'>
      <div className='movie-card__header'>
        <div className='movie-card__bg'>
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <div className='logo'>
            <a href='/' className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href='' className='breadcrumbs__link'
                  onClick={(evt) => {
                    evt.preventDefault();
                    onMoviePageClick(id);
                  }}>
                  {title}
                </a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>

        </header>

        <div className='movie-card__poster movie-card__poster--small'>
          <img src={poster} alt={title} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <AddReviewForm id={id}/>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  openedMovie: MOVIE,
  onMoviePageClick: FUNCTION
};

const mapStateToProps = (state) => ({
  openedMovie: state.DATA.openedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onMoviePageClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
