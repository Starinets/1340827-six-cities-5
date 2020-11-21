import {NameSpace} from './reducers/reducer';
import {createSelector} from 'reselect';
import {getCurrentCityOfferList, sortOfferListBy, adaptDataToClient} from '../utils';

const getOfferList = (state) => state[NameSpace.API_DATA].offers;

const getAuthorizationStatus = (state) => state[NameSpace.API_DATA].authorizationStatus;

const getCurrentCity = (state) => state[NameSpace.APP_STATE].currentCity;

const getCities = (state) => state[NameSpace.APP_STATE].cities;

const getCurrentSort = (state) => state[NameSpace.APP_STATE].currentSorting;

const getHoveredOffer = (state) => state[NameSpace.APP_STATE].hoveredOffer;

const adaptedOfferList = createSelector(
    getOfferList,
    (offers) => adaptDataToClient(offers)
);

const getFilteredOfferList = createSelector(
    adaptedOfferList,
    getCurrentCity,
    getCurrentSort,
    (offers, currentCity, currentSort) => sortOfferListBy[currentSort](getCurrentCityOfferList(offers, currentCity).slice())
);

export {
  getOfferList,
  getAuthorizationStatus,
  getCurrentCity,
  getCities,
  getCurrentSort,
  getHoveredOffer,
  adaptedOfferList,
  getFilteredOfferList
};
