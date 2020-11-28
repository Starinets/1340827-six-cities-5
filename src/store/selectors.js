import {NameSpace} from './reducers/reducer';
import {createSelector} from 'reselect';
import {
  getCurrentCityOfferList,
  sortOfferListBy,
  adaptOfferToClient,
  adaptOffersToClient,
  adaptReviewsToClient,
} from '../utils';

const getOfferList = (state) => state[NameSpace.API_DATA].offers;

const getAuthorizationStatusSelector = (state) => state[NameSpace.USER].authorizationStatus;

const getCurrentCitySelector = (state) => state[NameSpace.APP_STATE].currentCity;

const getCitiesSelector = (state) => state[NameSpace.APP_STATE].cities;

const getCurrentSortSelector = (state) => state[NameSpace.APP_STATE].currentSorting;

const getHoveredOfferSelector = (state) => state[NameSpace.APP_STATE].hoveredOffer;

const adaptedOfferListSelector = createSelector(
    getOfferList,
    (offers) => adaptOffersToClient(offers)
);

const getFilteredOfferListSelector = createSelector(
    adaptedOfferListSelector,
    getCurrentCitySelector,
    getCurrentSortSelector,
    (offers, currentCity, currentSort) => sortOfferListBy[currentSort](getCurrentCityOfferList(offers, currentCity).slice())
);

const getAuthInfoSelector = (state) => state[NameSpace.USER].authInfo;

const getCurrentOfferFromOfferDetails = (state) => state[NameSpace.API_DATA].offerDetails.offer;

const getReviewsFromOfferDetails = (state) => state[NameSpace.API_DATA].offerDetails.reviews;

const getNeighborhoodsFromOfferDetails = (state) =>state[NameSpace.API_DATA].offerDetails.neighborhoods;

const getCurrentOfferSelector = createSelector(
    getCurrentOfferFromOfferDetails,
    (offer) => adaptOfferToClient(offer)
);

const getReviewsSelector = createSelector(
    getReviewsFromOfferDetails,
    (reviews) => adaptReviewsToClient(reviews)
);

const getNeighborhoodsSelector = createSelector(
    getNeighborhoodsFromOfferDetails,
    (neighborhoods) => adaptOffersToClient(neighborhoods)
);

const getReviewFormStateSelector = (state) => state[NameSpace.APP_STATE].reviewFormState;

const getFavorites = (state) => state[NameSpace.API_DATA].favorites;

const getFavoriteOfferListSelector = createSelector(
    getFavorites,
    (offers) => {
      const offersByCity = [];
      const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));

      cities.forEach((city) => {
        offersByCity.push({
          city,
          favorites: adaptOffersToClient(offers.filter((offer) => offer.city.name === city))
        });
      });

      return offersByCity;
    }
);

export {
  getAuthorizationStatusSelector,
  getCurrentCitySelector,
  getCitiesSelector,
  getCurrentSortSelector,
  getHoveredOfferSelector,
  adaptedOfferListSelector,
  getFilteredOfferListSelector,
  getAuthInfoSelector,
  getCurrentOfferSelector,
  getReviewsSelector,
  getNeighborhoodsSelector,
  getReviewFormStateSelector,
  getFavoriteOfferListSelector
};
