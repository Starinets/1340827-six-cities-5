const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  GET_OFFERS: `GET_OFFERS`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
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

const getOffers = () => ({
  type: ActionType.GET_OFFERS
});

export {
  ActionType,
  setCurrentCity,
  setCurrentSort,
  setHoveredOffer,
  getOffers
};
