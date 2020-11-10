const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  GET_OFFERS: `GET_OFFERS`,
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
  getOffers: () => ({
    type: ActionType.GET_OFFERS
  })
};

export {
  ActionType,
  ActionCreator
};
