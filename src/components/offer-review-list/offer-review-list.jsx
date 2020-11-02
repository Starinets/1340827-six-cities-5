import React from 'react';
import * as Type from '../../types';

import OfferReviewItem from '../offer-review-item/offer-review-item';

const OfferReviewList = ({reviewList}) => {

  const reviewItems = reviewList.map((review, index) => {

    return (
      <OfferReviewItem
        key={ index }
        review={ review }
      />
    );
  });


  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviewList.length }</span></h2>
      <ul className="reviews__list">
        { reviewItems }
      </ul>
    </>
  );
};

OfferReviewList.propTypes = {
  reviewList: Type.REVIEWS
};

export default OfferReviewList;
