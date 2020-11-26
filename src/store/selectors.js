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

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getCurrentCity = (state) => state[NameSpace.APP_STATE].currentCity;

const getCities = (state) => state[NameSpace.APP_STATE].cities;

const getCurrentSort = (state) => state[NameSpace.APP_STATE].currentSorting;

const getHoveredOffer = (state) => state[NameSpace.APP_STATE].hoveredOffer;

const adaptedOfferList = createSelector(
    getOfferList,
    (offers) => adaptOffersToClient(offers)
);

const getFilteredOfferList = createSelector(
    adaptedOfferList,
    getCurrentCity,
    getCurrentSort,
    (offers, currentCity, currentSort) => sortOfferListBy[currentSort](getCurrentCityOfferList(offers, currentCity).slice())
);

const getAuthInfo = (state) => state[NameSpace.USER].authInfo;

const getCurrentOfferFromOfferDetails = (state) => state[NameSpace.API_DATA].offerDetails.offer;

const getReviewsFromOfferDetails = (state) => state[NameSpace.API_DATA].offerDetails.reviews;

const getNeighborhoodsFromOfferDetails = (state) =>state[NameSpace.API_DATA].offerDetails.neighborhoods;

const getCurrentOffer = createSelector(
    getCurrentOfferFromOfferDetails,
    (offer) => adaptOfferToClient(offer)
);

const getReviews = createSelector(
    getReviewsFromOfferDetails,
    (reviews) => adaptReviewsToClient(reviews)
);

const getNeighborhoods = createSelector(
    getNeighborhoodsFromOfferDetails,
    (neighborhoods) => adaptOffersToClient(neighborhoods)
);

const getReviewFormState = (state) => state[NameSpace.APP_STATE].reviewFormState;

export {
  getOfferList,
  getAuthorizationStatus,
  getCurrentCity,
  getCities,
  getCurrentSort,
  getHoveredOffer,
  adaptedOfferList,
  getFilteredOfferList,
  getAuthInfo,
  getCurrentOffer,
  getReviews,
  getNeighborhoods,
  getReviewFormState
};
