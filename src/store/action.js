const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS
  })
};

export {
  ActionType,
  ActionCreator
};
