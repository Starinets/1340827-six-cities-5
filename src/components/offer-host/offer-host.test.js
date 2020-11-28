import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferHost from './offer-host';
import {offer} from '../../test-data/test-data';

it(`Component rendered correctly -> OfferHost`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OfferHost
        offer={ offer }
      />
  );
  expect(tree).toMatchSnapshot();
});
