import React from 'react';
import * as Type from '../../types';
import {NavLink} from "react-router-dom";

import OfferList from './../offer-list/offer-list';
import Map from './../map/map';

const Main = (props) => {

  const {
    rentalOffersCount,
    currentCity
  } = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <NavLink className="header__logo-link header__logo-link--active" to="/">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <NavLink className="locations__item-link tabs__item" to="/">
                  <span>Paris</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className="locations__item-link tabs__item" to="/">
                  <span>Cologne</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className="locations__item-link tabs__item" to="/">
                  <span>Brussels</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className="locations__item-link tabs__item tabs__item--active" to="/">
                  <span>Amsterdam</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className="locations__item-link tabs__item" to="/">
                  <span>Hamburg</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className="locations__item-link tabs__item" to="/">
                  <span>Dusseldorf</span>
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ rentalOffersCount } places to stay in { currentCity }</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>

              <OfferList
                offers = { props.offers }
                onCardMouseEnter = { props.onCardMouseEnter }
              />

            </section>
            <div className="cities__right-section">
              <Map
                offers = { props.offers }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: Type.OFFERS.isRequired,
  rentalOffersCount: Type.COUNT.isRequired,
  currentCity: Type.CITY.isRequired,
  onCardMouseEnter: Type.FUNCTION.isRequired
};

export default Main;
