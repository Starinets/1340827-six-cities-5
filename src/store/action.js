const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFER_LIST: `LOAD_OFFER_LIST`,
  SET_AUTH_INFO: `SET_AUTH_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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

export {
  ActionType,
  setCurrentCity,
  setCurrentSort,
  setHoveredOffer,
  setAuthorizationStatus,
  loadOfferList,
};
