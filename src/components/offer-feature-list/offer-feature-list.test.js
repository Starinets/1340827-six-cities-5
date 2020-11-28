import React from 'react';
import renderer from 'react-test-renderer';
import OfferFeatureList from './offer-feature-list';
import {featuresList} from '../../test-data/test-data';

it(`Component rendered correctly -> OfferFeatureList`, () => {
  const tree = renderer.create(
      <OfferFeatureList
        featureList={ featuresList }
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
