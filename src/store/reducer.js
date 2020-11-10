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
  currentSorting: Sorting.POPULAR
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionType.SET_CURRENT_CITY:
      return Object.assign(
          {},
          state,
          {currentCity: action.payload}
      );

    case ActionType.SET_CURRENT_SORT:
      return Object.assign(
          {},
          state,
          {currentSorting: action.payload}
      );

    case ActionType.GET_OFFERS:
      return state.offers;
  }

  return state;
};

export {reducer};
