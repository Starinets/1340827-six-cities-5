import React from 'react';
import * as Type from '../../types';

import withOfferList from '../hocs/with-offer-list/with-offer-list';
import withSorting from '../hocs/with-sorting/with-sorting';

import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import Sorting from '../sorting/sorting';

import {
  MapPlace,
  OfferPlace
} from '../../constants';

const SortingWrapped = withSorting(Sorting);
const OfferListWrapper = withOfferList(OfferList);

const MainContent = (props) => {

  const {
    cityOffers,
    currentCity,
    currentSorting,
    onSortingClick
  } = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{ cityOffers.length } places to stay in { currentCity }</b>
          <SortingWrapped
            currentSorting = { currentSorting }
            onSortingClick = { onSortingClick }
          />

          <OfferListWrapper
            offers = { cityOffers }
            offerPlace = { OfferPlace.CITIES }
          />

        </section>
        <div className="cities__right-section">
          <Map
            offers = { cityOffers }
            mapPlace = { MapPlace.CITIES }
          />
        </div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  cityOffers: Type.OFFERS.isRequired,
  currentCity: Type.CITY.isRequired,
  currentSorting: Type.STRING.isRequired,
  onSortingClick: Type.FUNCTION.isRequired
};

export default MainContent;
