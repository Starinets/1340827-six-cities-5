const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFER_LIST: `LOAD_OFFER_LIST`
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

export {
  ActionType,
  setCurrentCity,
  setCurrentSort,
  setHoveredOffer,
  setAuthorizationStatus,
  loadOfferList,
};
