const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  GET_OFFERS: `GET_OFFERS`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
};

const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city
  }),
  setCurrentSort: (sorting) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload: sorting
  }),
  setHoveredOffer: (hoveredOffer) => ({
    type: ActionType.SET_HOVERED_OFFER,
    payload: hoveredOffer
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS
  })
};

export {
  ActionType,
  ActionCreator
};
