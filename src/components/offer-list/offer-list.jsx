import React from 'react';
import * as Type from '../../types';

import OfferCard from './../offer-card/offer-card';

import {
  OfferPlace,
  OfferListClassName
} from '../../constants';

const OfferList = (props) => {

  const className = props.offerPlace === OfferPlace.CITIES
    ? OfferListClassName.CITIES
    : OfferListClassName.NEIGHBORHOOD;

  const offers = props.offers.map((offer) => {
    return (
      <OfferCard
        key = { offer.id }
        offer = { offer }
        offerPlace = { props.offerPlace }
      />
    );
  });

  return (
    <div className={ className }>
      { offers }
    </div>
  );
};

OfferList.propTypes = {
  offers: Type.OFFERS.isRequired,
  offerPlace: Type.OFFER_PLACE.isRequired
};

export default OfferList;
