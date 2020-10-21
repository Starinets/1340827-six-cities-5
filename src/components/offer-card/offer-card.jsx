import React from 'react';
import * as Type from '../../types';

const OfferCard = (props) => {
  const RATE_MULTIPLICATOR = 20;
  const {
    id,
    image,
    price,
    isFavorite,
    rate,
    name,
    type
  } = props;

  const rateToWidth = Math.trunc(rate) * RATE_MULTIPLICATOR;

  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={ `/offer/${ id }` }>
          <img className="place-card__image" src={ image } width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ `place-card__bookmark-button ${ isFavorite ? `place-card__bookmark-button--active` : `` } button` } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rateToWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={ `/offer/${ id }` }>{ name }</a>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = Type.OFFER.isRequired;

export default OfferCard;
