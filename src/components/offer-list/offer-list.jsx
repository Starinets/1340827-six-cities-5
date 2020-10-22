import React from 'react';
import * as Type from '../../types';

import OfferCard from './../offer-card/offer-card';

const OfferList = (props) => {

  const offers = props.offers.map((offer) => {
    return (
      <OfferCard
        key = { offer.id }
        offer = { offer }
        onCardMouseEnter = { props.onCardMouseEnter }
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
  offers: Type.OFFERS.isRequired,
  onCardMouseEnter: Type.FUNCTION.isRequired
};

export default OfferList;
