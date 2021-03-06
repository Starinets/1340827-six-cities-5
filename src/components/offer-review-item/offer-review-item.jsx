import React from 'react';
import * as Type from '../../types';

import {
  transformRatingToWidth,
  formatDateToMonthYear
} from '../../utils';

const OfferReviewItem = ({review}) => {
  const width = transformRatingToWidth(review.rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ review.user.avatar } width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          { review.user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ {width} }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { review.text }
        </p>
        <time className="reviews__time" dateTime={ review.date }>{ formatDateToMonthYear(review.date) }</time>
      </div>
    </li>
  );
};

OfferReviewItem.propTypes = {
  review: Type.REVIEW
};

export default OfferReviewItem;
