import React from 'react';
import * as Type from '../../types';
import {connect} from 'react-redux';

import {
  setCurrentCity,
  setCurrentSort
} from '../../store/action';
import {
  getCurrentCitySelector,
  getCitiesSelector,
  getCurrentSortSelector,
  getFilteredOfferListSelector
} from '../../store/selectors';

import Header from '../header/header';
import CityList from '../city-list/city-list';
import MainContent from '../main-content/main-content';
import MainEmpty from '../main-empty/main-empty';

const Main = (props) => {

  const {
    offers,
    currentCity,
    onCityClick,
    currentSorting,
    onSortingClick
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={ `page__main page__main--index ${ offers.length === 0 ? `page__main--index-empty` : `` }` }>
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          currentCity = { currentCity }
          onCityClick = { onCityClick }
        />
        {
          offers.length > 0 ?
            <MainContent
              cityOffers = { offers }
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

Main.propTypes = {
  offers: Type.OFFERS.isRequired,
  currentCity: Type.CITY.isRequired,
  onCityClick: Type.FUNCTION.isRequired,
  currentSorting: Type.SORTING.isRequired,
  onSortingClick: Type.FUNCTION.isRequired
};

const mapStateToProps = (state) => ({
  offers: getFilteredOfferListSelector(state),
  cityList: getCitiesSelector(state),
  currentCity: getCurrentCitySelector(state),
  currentSorting: getCurrentSortSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(setCurrentCity(city));
  },
  onSortingClick(newSorting) {
    dispatch(setCurrentSort(newSorting));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
