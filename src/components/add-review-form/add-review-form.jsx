import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import {addReview} from "../../store/api-actions";
import {FUNCTION, ID} from '../../prop-type';

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();

    this.state = {
      validity: false,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
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
    return (
      <form action='' className='add-review__form' onSubmit={this._handleSubmit}>
        <div className='rating'>
          <div className='rating__stars'>
            <input className='rating__input'
              id='star-1'
              type='radio'
              name='rating'
              value='1'
              ref={this.ratingRef}
              required
              onChange={this._handleInputChange}
            />
            <label className='rating__label' htmlFor='star-1'>
              Rating 1
            </label>

            <input className='rating__input'
              id='star-2'
              type='radio'
              name='rating'
              value='2'
              onChange={this._handleInputChange}
            />
            <label className='rating__label' htmlFor='star-2'>
              Rating 2
            </label>

            <input className='rating__input'
              id='star-3'
              type='radio'
              name='rating'
              value='3'
              onChange={this._handleInputChange}
            />
            <label className='rating__label' htmlFor='star-3'>
              Rating 3
            </label>

            <input className='rating__input'
              id='star-4'
              type='radio'
              name='rating'
              value='4'
              onChange={this._handleInputChange}
            />
            <label className='rating__label' htmlFor='star-4'>
              Rating 4
            </label>

            <input className='rating__input'
              id='star-5'
              type='radio'
              name='rating'
              value='5'
              onChange={this._handleInputChange}
            />
            <label className='rating__label' htmlFor='star-5'>
              Rating 5
            </label>
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
          >
          </textarea>
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit' disabled={!validity}>
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
  id: ID
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    dispatch(addReview(id, comment));
  }
});

export {AddReviewForm};

export default connect(null, mapDispatchToProps)(AddReviewForm);
