import React from 'react';
import * as Type from '../../types';
import {NavLink} from 'react-router-dom';

import OfferCard from '../offer-card/offer-card';

import {
  OfferPlace,
  AppRoute,
  OfferCardImage
} from '../../constants';

const FavoriteItems = (props) => {

  const {city, favorites} = props.favoritesByCity;
  const {onCityClick} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <NavLink
            className="locations__item-link"
            to={ AppRoute.ROOT }
            onClick={() => onCityClick(city)}
          >
            <span>{city}</span>
          </NavLink>
        </div>
      </div>
      <div className="favorites__places">
        {
          favorites.map((favoriteItem) => (
            <OfferCard
              key = { favoriteItem.id }
              offer = { favoriteItem }
              offerPlace = { OfferPlace.FAVORITES }
              imageSize = { OfferCardImage.Favorite }
              onMouseOver = { () => {} }
            />
          ))
        }
      </div>
    </li>
  );
};

FavoriteItems.propTypes = {
  favoritesByCity: Type.FAVORITES_BY_CITY.isRequired,
  onCityClick: Type.FUNCTION
};

export default FavoriteItems;
