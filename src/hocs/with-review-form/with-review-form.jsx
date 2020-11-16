import React from 'react';

const withReviewForm = (Component) => {

  class WithReviewForm extends React.PureComponent {

    constructor() {
      super();

      this.state = {
        rating: 0,
        review: ``,
        isSubmit: false
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleRatingChange(evt) {
      evt.persist();
      this.setState(() => ({rating: parseInt(evt.target.value, 10)}));
    }

    handleTextareaChange(evt) {
      evt.persist();
      this.setState(() => ({review: evt.target.value}));
    }

    render() {
      const {rating, review, isSubmit} = this.state;

      return (
        <Component
          rating = { rating }
          review = { review }
          isSubmit = { isSubmit }
          onRatingChange = { this.handleRatingChange }
          onTextAreaChange = { this.handleTextareaChange }
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
