import React from 'react';
import * as Type from '../../types';
import {NavLink} from 'react-router-dom';

import FavoriteButton from '../favorite-button/favorite-button';

import {transformRatingToWidth} from '../../utils';
import {
  AppRoute,
  FavoriteButtonProperty
} from '../../constants';

const OfferCard = (props) => {

  const {
    offer,
    offerPlace,
    imageSize,
    onMouseOver
  } = props;
  const {
    id,
    image,
    price,
    isFavorite,
    rating,
    name,
    type
  } = offer;

  const width = transformRatingToWidth(rating);

  let callback = () => {};
  if (onMouseOver !== undefined) {
    callback = (param) => {
      onMouseOver(param);
    };
  }

  return (
    <article
      className={ `${ offerPlace }card place-card` }
      onMouseOver={ () => callback(offer) }
      onMouseOut={ () => callback(null) }
      onClick={ () => callback(null) }
    >
      <div className={`${ offerPlace }image-wrapper place-card__image-wrapper`}>
        <NavLink
          to={ `${ AppRoute.OFFER }/${ id }` }
        >
          <img className="place-card__image" src={ image } width={ imageSize.WIDTH } height={ imageSize.HEIGHT } alt="Place image" />
        </NavLink>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            id={ id }
            className={ FavoriteButtonProperty.PlaceCard.CLASS_NAME }
            buttonWidth={ FavoriteButtonProperty.PlaceCard.WIDTH }
            buttonHeight={ FavoriteButtonProperty.PlaceCard.HEIGHT }
            isFavorite={ isFavorite }
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ {width} }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <NavLink
            to={ `${ AppRoute.OFFER }/${ id }` }
          >
            { name }
          </NavLink>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: Type.OFFER.isRequired,
  offerPlace: Type.OFFER_PLACE.isRequired,
  imageSize: Type.IMAGE_SIZE,
  onMouseOver: Type.FUNCTION
};

export default OfferCard;
