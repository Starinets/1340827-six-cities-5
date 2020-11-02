import React from 'react';
import * as Type from '../../types';

import OfferCard from './../offer-card/offer-card';

import {OfferPlace} from '../../constants';

const OfferList = (props) => {

  const offers = props.offers.map((offer) => {
    return (
      <OfferCard
        key = { offer.id }
        offer = { offer }
        offerPlace = { OfferPlace.CITIES }
      />
    );
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers }
    </div>
  );
};

OfferList.propTypes = {
  offers: Type.OFFERS.isRequired
};

export default OfferList;
