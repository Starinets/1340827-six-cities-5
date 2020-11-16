import React from 'react';
import * as Type from '../../types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  setCurrentCity,
  setCurrentSort
} from '../../store/action';

import CityList from '../city-list/city-list';
import MainContent from '../main-content/main-content';
import MainEmpty from '../main-empty/main-empty';

import {sortOffersBy} from '../../utils';

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
        {
          cityOffers.length ?
            <MainContent
              cityOffers = { cityOffers }
              currentCity = { currentCity }
              currentSorting = { currentSorting }
              onSortingClick = { onSortingClick }
            /> :
            <MainEmpty
              currentCity = { currentCity }
            />
        }
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
    dispatch(setCurrentCity(city));
  },
  onSortingClick(newSorting) {
    dispatch(setCurrentSort(newSorting));
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
