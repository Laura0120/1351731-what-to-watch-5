import React, {PureComponent} from 'react';

import PROP_TYPES from '../../prop-type';
class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      reviewText: ``
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {movie} = this.props;
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
          <form action='#' className='add-review__form'>
            <div className='rating'>
              <div className='rating__stars'>
                <input className='rating__input' id='star-1' type='radio' name='rating' value='1' onChange={this.handleFieldChange}/>
                <label className='rating__label' htmlFor='star-1'>
                  Rating 1
                </label>

                <input className='rating__input' id='star-2' type='radio' name='rating' value='2' onChange={this.handleFieldChange}/>
                <label className='rating__label' htmlFor='star-2'>
                  Rating 2
                </label>

                <input className='rating__input' id='star-3' type='radio' name='rating' value='3' checked onChange={this.handleFieldChange}/>
                <label className='rating__label' htmlFor='star-3'>
                  Rating 3
                </label>

                <input className='rating__input' id='star-4' type='radio' name='rating' value='4' onChange={this.handleFieldChange}/>
                <label className='rating__label' htmlFor='star-4'>
                  Rating 4
                </label>

                <input className='rating__input' id='star-5' type='radio' name='rating' value='5' onChange={this.handleFieldChange}/>
                <label className='rating__label' htmlFor='star-5'>
                  Rating 5
                </label>
              </div>
            </div>

            <div className='add-review__text'>
              <textarea className='add-review__textarea' name='reviewText' id='review-text' placeholder='Review text' onChange={this.handleFieldChange}></textarea>
              <div className='add-review__submit'>
                <button className='add-review__btn' type='submit' onSubmit={this.handleSubmit}>
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  movie: PROP_TYPES.movie
};

export default AddReview;
