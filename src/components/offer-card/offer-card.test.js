import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferCard from './offer-card';
import {
  offer,
  OfferPlace,
  OfferCardImage
} from '../../test-data/test-data';

it(`Component rendered correctly -> OfferCard`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OfferCard
        offer={ offer }
        offerPlace={ OfferPlace.NEIGHBORHOOD }
        imageSize={ OfferCardImage.List }
      />
  );
  expect(tree).toMatchSnapshot();
});
