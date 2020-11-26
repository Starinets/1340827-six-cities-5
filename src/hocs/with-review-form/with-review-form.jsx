import React from 'react';
import {connect} from 'react-redux';
import * as Type from '../../types';

import {getAuthorizationStatus, getReviewFormState} from '../../store/selectors';
import {postComment} from '../../store/api-actions';
import {setReviewFormState} from '../../store/action';
import {AuthorizationStatus, ReviewFormState} from '../../constants';

const withReviewForm = (Component) => {

  class WithReviewForm extends React.PureComponent {

    constructor() {
      super();

      this.state = {
        rating: 0,
        review: ``,
        isFormDisabled: false
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextareaChange = this.handleTextareaChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidUpdate() {
      const {reviewFormState} = this.props;
      this.setFormState(reviewFormState);
    }

    handleRatingChange(evt) {
      evt.persist();
      this.setState(() => ({rating: parseInt(evt.target.value, 10)}));
    }

    handleTextareaChange(evt) {
      evt.persist();
      this.setState(() => ({review: evt.target.value}));
    }

    handleFormSubmit(evt) {
      evt.preventDefault();

      const {rating, review} = this.state;
      const {id, onSubmit, reviewFormState} = this.props;

      onSubmit(id, rating, review);
      this.setFormState(reviewFormState);
    }

    setFormState(reviewFormState) {
      switch (reviewFormState) {
        case ReviewFormState.SENDING_ERROR:
          this.setState(() => ({
            isFormDisabled: false
          })
          );
          break;
        case ReviewFormState.DEFAULT:
          console.log(`================ 222 ================`);
          this.setState(() => ({
            rating: 0,
            review: ``,
            isFormDisabled: false
          })
          );
          break;
        case ReviewFormState.POSTING_COMMENT:
          this.setState(() => ({
            isFormDisabled: true
          })
          );
      }
    }

    render() {
      const {rating, review, isFormDisabled} = this.state;
      console.log("rating -> ", rating, " : ", review)

      if (this.props.authorizationStatus !== AuthorizationStatus.AUTH) {
        return null;
      }

      return (
        <Component
          rating = { rating }
          review = { review }
          isFormDisabled = { isFormDisabled }
          onRatingChange = { this.handleRatingChange }
          onTextAreaChange = { this.handleTextareaChange }
          onSubmit = { this.handleFormSubmit }
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatus(state),
    reviewFormState: getReviewFormState(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(id, rating, review) {
      dispatch(setReviewFormState(ReviewFormState.POSTING_COMMENT));
      dispatch(postComment({id, rating, review}));
    }
  });

  WithReviewForm.propTypes = {
    id: Type.NUMBER.isRequired,
    authorizationStatus: Type.STRING.isRequired,
    reviewFormState: Type.STRING.isRequired,
    onSubmit: Type.FUNCTION.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
