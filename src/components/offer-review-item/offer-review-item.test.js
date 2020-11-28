import React from 'react';
import renderer from 'react-test-renderer';
import OfferReviewItem from './offer-review-item';
import {review} from '../../test-data/test-data';

it(`Component rendered correctly -> OfferReviewItem`, () => {
  const tree = renderer.create(
      <OfferReviewItem
        review={ review }
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
