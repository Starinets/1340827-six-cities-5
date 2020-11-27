const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFER_LIST: `LOAD_OFFER_LIST`,
  SET_AUTH_INFO: `SET_AUTH_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_OFFER_DETAILS: `LOAD_OFFER_DETAILS`,
  SET_REVIEWS: `SET_REVIEWS`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_FAVORITES: `UPDATE_FAVORITES`,
  UPDATE_NEIGHBORHOODS: `UPDATE_NEIGHBORHOODS`,
  UPDATE_CURRENT_OFFER: `UPDATE_CURRENT_OFFER`,
  SET_STATE_REVIEW_FORM: `SET_STATE_REVIEW_FORM`
};

const setCurrentCity = (city) => ({
  type: ActionType.SET_CURRENT_CITY,
  payload: city
});

const setCurrentSort = (sorting) => ({
  type: ActionType.SET_CURRENT_SORT,
  payload: sorting
});

const setHoveredOffer = (hoveredOffer) => ({
  type: ActionType.SET_HOVERED_OFFER,
  payload: hoveredOffer
});

const setAuthorizationStatus = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

const loadOfferList = (offers) => ({
  type: ActionType.LOAD_OFFER_LIST,
  payload: offers
});

export const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

const loadFavorites = (offers) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: offers
});

const loadOfferDetails = (offerDetails) => ({
  type: ActionType.LOAD_OFFER_DETAILS,
  payload: offerDetails
});

const setReviews = (reviews) => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews
});

const updateOffer = (offer) => ({
  type: ActionType.UPDATE_OFFERS,
  payload: offer
});

const updateFavorites = (offer) => ({
  type: ActionType.UPDATE_FAVORITES,
  payload: offer
});

const updateNeighborhoods = (offer) => ({
  type: ActionType.UPDATE_NEIGHBORHOODS,
  payload: offer
});

const updateCurrentOffer = (offer) => ({
  type: ActionType.UPDATE_CURRENT_OFFER,
  payload: offer
});

const setReviewFormState = (event) => ({
  type: ActionType.SET_STATE_REVIEW_FORM,
  payload: event
});

export {
  ActionType,
  setCurrentCity,
  setCurrentSort,
  setHoveredOffer,
  setAuthorizationStatus,
  loadOfferList,
  loadFavorites,
  loadOfferDetails,
  setReviews,
  updateOffer,
  updateFavorites,
  updateNeighborhoods,
  updateCurrentOffer,
  setReviewFormState
};
