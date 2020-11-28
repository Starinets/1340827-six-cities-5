import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card';

import {
  Offers,
  OfferPlace,
  OfferCardImage
} from '../../test-data/test-data';

configure({adapter: new Adapter()});

it(`OfferCard mouseout, mouseover and click testing`, () => {
  const onMouseOver = jest.fn();

  const wrapper = shallow(
      <OfferCard
        onMouseOver={ onMouseOver }
        offer={ Offers[0] }
        offerPlace={ OfferPlace.CITIES }
        imageSize={ OfferCardImage.List }
      />
  );

  const article = wrapper.find(`article`);
  article.simulate(`mouseout`);
  article.simulate(`mouseover`);
  article.simulate(`click`);

  expect(onMouseOver).toHaveBeenCalledTimes(3);
});
