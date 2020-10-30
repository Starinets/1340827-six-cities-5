import React from 'react';
import * as Type from '../../types';
import {NavLink} from 'react-router-dom';

import OfferCard from './../offer-card/offer-card';

const reduceOffersByCity = (offers) => {

  return offers.reduce((offersByCity, offer) => {

    if (Array.isArray(offersByCity[offer.city])) {
      offersByCity[offer.city].push(offer);
    } else {
      offersByCity[offer.city] = [offer];
    }

    return offersByCity;
  }, {});
};

const generateOfferList = (offers) => {
  return offers.map((offer) => {
    return (
      <OfferCard
        key = { offer.id }
        offer = { offer }
      />
    );
  });
};

const generateCityList = (cities) => {

  return Object.entries(cities)
    .map(([cityName, offers], index) => {
      return (
        <li className="favorites__locations-items" key={ index }>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <NavLink className="locations__item-link" to="/">
                <span>{ cityName }</span>
              </NavLink>
            </div>
          </div>
          <div className="favorites__places">
            { generateOfferList(offers) }
          </div>
        </li>
      );
    });
};

const Favorites = (props) => {

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
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              { generateCityList(reduceOffersByCity(props.offers)) }

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <NavLink className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </NavLink>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: Type.OFFERS.isRequired,
};

export default Favorites;
