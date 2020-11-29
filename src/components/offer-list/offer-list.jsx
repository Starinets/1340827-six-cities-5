import React from 'react';
import * as Type from '../../types';

import OfferCard from './../offer-card/offer-card';

import {
  OfferPlace,
  OfferListClassName,
  OfferCardImage
} from '../../constants';

const OfferList = (props) => {

  const {
    offers,
    offerPlace,
    changeHoveredOffer
  } = props;

  const className = offerPlace === OfferPlace.CITIES
    ? OfferListClassName.CITIES
    : OfferListClassName.NEIGHBORHOOD;

  const offersList = offers.map((offer) => {
    return (
      <OfferCard
        key = { offer.id }
        offer = { offer }
        offerPlace = { offerPlace }
        imageSize = { OfferCardImage.List }
        onMouseOver = { changeHoveredOffer }
      />
    );
  });

  return (
    <div className={ className }>
      { offersList }
    </div>
  );
};

OfferList.propTypes = {
  offers: Type.OFFERS.isRequired,
  offerPlace: Type.OFFER_PLACE.isRequired,
  changeHoveredOffer: Type.FUNCTION.isRequired
};

export default OfferList;
