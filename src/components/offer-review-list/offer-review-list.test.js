import React from 'react';
import renderer from 'react-test-renderer';
import OfferReviewList from './offer-review-list';
import {reviews} from '../../test-data/test-data';

it(`Component rendered correctly -> OfferReviewList`, () => {
  const tree = renderer.create(
      <OfferReviewList
        reviewList={ reviews }
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
