import React from 'react';
import * as Type from '../../types';
import {NavLink} from "react-router-dom";

import PremiumLabel from '../premium-label/premium-label';
import OfferImageList from '../offer-image-list/offer-image-list';
import OfferFeatureList from '../offer-feature-list/offer-feature-list';
import OfferHost from '../offer-host/offer-host';
import OfferReviewList from '../offer-review-list/offer-review-list';
import OfferCard from '../offer-card/offer-card';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';

import {transformRatingToWidth} from '../../utils';
import {
  MapPlace,
  OfferPlace
} from '../../constants';

const Offer = ({offerID, offers}) => {

  const SINGULAR_MEANING = 2;

  const offer = offers[offerID];

  if (offer === undefined) {
    return (null);
  }

  const width = transformRatingToWidth(offer.rating);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <NavLink className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </NavLink>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink className="header__nav-link header__nav-link--profile" to="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <OfferImageList imageList={ offer.images } />
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <PremiumLabel isPremium={ offer.isPremium } />
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { offer.name }
                </h1>
                <button className={ `property__bookmark-button ${ offer.isFavorite ? `property__bookmark-button--active` : `` } button` } type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ {width} }></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ offer.rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { offer.type }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { offer.bedroomsCount < SINGULAR_MEANING ? `${ offer.bedroomsCount } Bedroom` : `${ offer.bedroomsCount } Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  { offer.adult < SINGULAR_MEANING ? `Max ${ offer.adultsCount } adult` : `Max ${ offer.adultsCount } adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{ offer.price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <OfferFeatureList featureList={ offer.features }/>
                </ul>
              </div>
              <OfferHost offer={ offer } />
              <section className="property__reviews reviews">
                <OfferReviewList reviewList={ offer.reviews } />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
            offers = { offers }
            mapPlace = { MapPlace.OFFER }
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                offers.map((neighbor, index) => {
                  return (
                    <OfferCard
                      key = { index }
                      offer = { neighbor }
                      offerPlace = { OfferPlace.NEIGHBORHOOD }
                    />
                  );
                })
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offerID: Type.STRING,
  offers: Type.OFFERS,
};

export default Offer;
