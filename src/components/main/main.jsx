import React from 'react';
import * as Type from '../../types';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";

import CityList from '../city-list/city-list';
import withOfferList from '../hocs/with-offer-list/with-offer-list';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import withSorting from '../hocs/with-sorting/with-sorting';
import Sorting from '../sorting/sorting';

import {sortOffersBy} from '../../utils';
import {
  MapPlace,
  OfferPlace
} from '../../constants';

const SortingWrapped = withSorting(Sorting);
const OfferListWrapper = withOfferList(OfferList);

const Main = (props) => {

  const {
    offers,
    currentCity,
    onCityClick,
    currentSorting,
    onSortingClick
  } = props;

  const cityOffers = sortOffersBy[currentSorting](
      offers.filter((offer) => {
        return offer.city === currentCity;
      })
  );

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
          currentCity = { currentCity }
          onCityClick = { onCityClick }
        />
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
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cityList: state.cityList,
  currentCity: state.currentCity,
  sortingList: state.sortingList,
  currentSorting: state.currentSorting
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCurrentCity(city));
  },
  onSortingClick(newSorting) {
    dispatch(ActionCreator.setCurrentSort(newSorting));
  }
});

Main.propTypes = {
  offers: Type.OFFERS.isRequired,
  currentCity: Type.CITY.isRequired,
  onCityClick: Type.FUNCTION.isRequired,
  currentSorting: Type.SORTING.isRequired,
  onSortingClick: Type.FUNCTION.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
