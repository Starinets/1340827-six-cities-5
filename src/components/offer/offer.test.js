import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Offer} from './offer';
import {
  emptyFunction,
  offer,
  Offers,
  reviews,
  matchOfferID
} from '../../test-data/test-data';

it(`Component rendered correctly -> Offer`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Offer
        offer={ offer }
        reviews={ reviews }
        neighborhoods={ Offers }
        getCurrentOffer={ emptyFunction }
        removeActiveCard={ emptyFunction }
        match={ matchOfferID }
      />
  );
  expect(tree).toMatchSnapshot();
});
