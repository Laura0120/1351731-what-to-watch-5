import React, {PureComponent} from "react";
import camelcase from "camelcase";

const withAddReviewForm = (Component) => {
  class AddReviewForm extends PureComponent {
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
      this.setState({[camelcase(name)]: value});
    }

    render() {
      return <Component
        {...this.props}
        onChangeField = {this.handleFieldChange}
        onSubmit = {this.handleSubmit}
      />;
    }
  }

  return AddReviewForm;
};

export default withAddReviewForm;
