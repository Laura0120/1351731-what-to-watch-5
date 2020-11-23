import React, {PureComponent, createRef} from "react";

import {FUNCTION, NUMBER, BOOLEAN} from '../../prop-type';
import {RATING_STARS} from '../../const';

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();
    this.submitRef = createRef();

    this.state = {
      validity: false,
      rating: 3,
      comment: ``
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCheckedValidity = this._handleCheckedValidity.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    if (!this.state.validity) {
      return;
    }
    this.setState(() => ({
      isLoading: true,
    }));
    const {onSubmit, id} = this.props;
    onSubmit(id, {
      rating: this.state.rating,
      comment: this.commentRef.current.value,
    });
  }

  _handleCheckedValidity() {
    this.setState(() => ({
      validity: this.commentRef.current.validity.valid && this.ratingRef.current.validity.valid
    }));
  }

  _handleRatingChange(ratingValue) {
    this.setState(() => ({
      rating: ratingValue,
    }));
  }

  render() {
    const {validity, rating} = this.state;
    const {isLoading} = this.props;
    return (
      <form action=''
        className='add-review__form'
        onSubmit={this._handleSubmit}
      >
        <div className='rating'>
          <div className='rating__stars'>
            {RATING_STARS.map((star) => (
              <React.Fragment key={star}>
                <input className='rating__input'
                  id={`star-${star}`}
                  type='radio'
                  name='rating'
                  value={star}
                  ref={this.ratingRef}
                  checked={rating === star ? true : false}
                  onChange={() =>{
                    this._handleCheckedValidity();
                    this._handleRatingChange(star);
                  }}
                  disabled={isLoading}
                  required
                />
                <label className='rating__label' htmlFor={`star-${star}`}>
                  Rating {star}
                </label>
              </React.Fragment>
            ))};
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text' id='review-text'
            placeholder='Review text'
            ref={this.commentRef}
            minLength='50'
            maxLength='400'
            required
            onChange={this._handleCheckedValidity}
            disabled={isLoading}
          >
          </textarea>
          <div className='add-review__submit'>
            <button ref={this.submitRef} className='add-review__btn' type='submit' disabled={!validity || isLoading}>
              Post
            </button>
          </div>
        </div>
      </form>
    );
  }
}

AddReviewForm.propTypes = {
  onSubmit: FUNCTION,
  id: NUMBER,
  isLoading: BOOLEAN
};

export default AddReviewForm;
