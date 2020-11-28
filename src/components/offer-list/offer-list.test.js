import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferList from './offer-list';
import {
  emptyFunction,
  OfferPlace,
  Offers
} from '../../test-data/test-data';

describe(`Component rendered correctly -> OfferList`, () => {
  it(`on Main page`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <OfferList
          offers={ Offers }
          offerPlace={ OfferPlace.CITIES }
          changeHoveredOffer={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`on Offer page, as neighborhood list`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <OfferList
          offers={ Offers }
          offerPlace={ OfferPlace.NEIGHBORHOOD }
          changeHoveredOffer={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`on Favorites page`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <OfferList
          offers={ Offers }
          offerPlace={ OfferPlace.FAVORITES }
          changeHoveredOffer={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
