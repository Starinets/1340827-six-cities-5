import React from 'react';
import * as Type from '../../types';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";

import CityList from '../city-list/city-list';
import OfferList from './../offer-list/offer-list';
import Map from './../map/map';

import {MapPlace} from '../../constants';

const Main = (props) => {

  const {
    offers,
    currentCity,
    onCityClick
  } = props;

  const cityOffers = offers.filter((offer) => {
    return offer.city === currentCity;
  });

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
        <CityList
          currentCity={ currentCity }
          onCityClick={ onCityClick }
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ cityOffers.length } places to stay in { currentCity }</b>
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
                offers = { cityOffers }
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
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cityList: state.cityList,
  currentCity: state.currentCity,
  sortingList: state.filters,
  activeSorting: state.activeFilter
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCurrentCity(city));
  }
});

Main.propTypes = {
  offers: Type.OFFERS.isRequired,
  currentCity: Type.CITY.isRequired,
  onCityClick: Type.FUNCTION.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
