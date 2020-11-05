import offers from "../mocks/offers";
import {ActionType} from './action';
import {
  City,
  Sorting
} from "../constants";

const initialState = {
  offers,
  cityList: Object.values(City),
  currentCity: City.PARIS,
  sortingList: Object.values(Sorting),
  activeSorting: Sorting.POPULAR
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return Object.assign(
          {},
          state,
          {currentCity: action.payload}
      );

    case ActionType.GET_OFFERS:
      return state.offers;
  }

  return state;
};

export {reducer};
