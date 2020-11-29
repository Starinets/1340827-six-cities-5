import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import * as Type from '../../types';

import {getAuthorizationStatusSelector, getReviewFormStateSelector} from '../../store/selectors';
import {postComment} from '../../store/api-actions';
import {setReviewFormState} from '../../store/action';
import {AuthorizationStatus, ReviewFormState} from '../../constants';

const withReviewForm = (Component) => {
  const WithReviewForm = (props) => {

    const [review, setReview] = useState(``);
    const [rating, setRating] = useState(0);
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const {
      authorizationStatus,
      reviewFormState
    } = props;

    useEffect(() => setFormState(reviewFormState), [reviewFormState]);

    const handleRatingChange = useCallback((evt) => {
      setRating(parseInt(evt.target.value, 10));
    }, []);

    const handleTextareaChange = useCallback((evt) => {
      setReview(evt.target.value);
    }, []);

    const handleFormSubmit = useCallback((evt) => {
      evt.preventDefault();

      const {id, onSubmit} = props;
      onSubmit(id, rating, review);
      setFormState(reviewFormState);
    });

    const setFormState = useCallback((evt) => {
      switch (evt) {
        case ReviewFormState.SENDING_ERROR:
          setIsFormDisabled(() => false);
          return;

        case ReviewFormState.DEFAULT:
          setRating(0);
          setReview(``);
          setIsFormDisabled(() => false);
          return;

        case ReviewFormState.POSTING_COMMENT:
          setIsFormDisabled(() => true);
      }
    }, []);

    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      return null;
    }

    return (
      <Component
        rating = { rating }
        review = { review }
        isFormDisabled = { isFormDisabled }
        authorizationStatus={authorizationStatus}
        onRatingChange = { handleRatingChange }
        onTextAreaChange = { handleTextareaChange }
        onSubmit = { handleFormSubmit }
      />
    );
  };

  WithReviewForm.propTypes = {
    id: Type.NUMBER.isRequired,
    authorizationStatus: Type.STRING.isRequired,
    reviewFormState: Type.STRING.isRequired,
    onSubmit: Type.FUNCTION.isRequired,
  };

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatusSelector(state),
    reviewFormState: getReviewFormStateSelector(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(id, rating, review) {
      dispatch(setReviewFormState(ReviewFormState.POSTING_COMMENT));
      dispatch(postComment({id, rating, review}));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
