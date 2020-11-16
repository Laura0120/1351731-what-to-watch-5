import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";

import {addReview} from "../../store/api-actions";
import {FUNCTION, NUMBER, BOOLEAN} from '../../prop-type';
import {RATING_STARS} from '../../const';
import {ActionCreator} from '../../store/action';

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();

    this.state = {
      validity: false
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.setState(() => ({
      isSubmit: true,
    }));
    const {onSubmit, id} = this.props;
    onSubmit(id, {
      rating: this.ratingRef.current.value,
      comment: this.commentRef.current.value,
    });
  }

  _handleInputChange() {
    this.setState(() => ({
      validity: this.commentRef.current.validity.valid && this.ratingRef.current.validity.valid
    }));
  }

  render() {
    const {validity} = this.state;
    const {isLoading} = this.props;
    return (
      <form action='' className='add-review__form' onSubmit={this._handleSubmit}
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
                  required
                  onChange={this._handleInputChange}
                  disabled={isLoading}
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
            onChange={this._handleInputChange}
            disabled={isLoading}
          >
          </textarea>
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit' disabled={!validity || isLoading}>
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

// const mapStateToProps = (state) => ({
//   isLoading: state.APP_STATE.isLoading,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit(id, comment) {
//     dispatch(ActionCreator.postingComment(true));
//     dispatch(addReview(id, comment));
//   }
// });

// export {AddReviewForm};

// export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
export default AddReviewForm;
