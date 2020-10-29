import React from 'react';

import withAddReviewForm from '../../hocs/with-add-review-form/with-add-review-form';
import AddReviewForm from '../add-review-form/add-review-form';
import {MOVIE} from '../../prop-type';

const AddReviewFormWrapper = withAddReviewForm(AddReviewForm);

const AddReview = (props) => {
  const {movie} = props;
  const {poster, title} = movie;

  return (
    <section className='movie-card movie-card--full'>
      <div className='movie-card__header'>
        <div className='movie-card__bg'>
          <img src={poster} alt={title} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <div className='logo'>
            <a href='main.html' className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href='movie-page.html' className='breadcrumbs__link'>
                  {title}
                </a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <div className='user-block'>
            <div className='user-block__avatar'>
              <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
            </div>
          </div>
        </header>

        <div className='movie-card__poster movie-card__poster--small'>
          <img src={poster} alt={title} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <AddReviewFormWrapper />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  movie: MOVIE
};

export default AddReview;
