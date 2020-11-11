import offers from "../mocks/offers";
import {ActionType} from './action';
import {
  City,
  SortList
} from "../constants";

const initialState = {
  offers,
  cityList: Object.values(City),
  currentCity: City.PARIS,
  sortingList: Object.values(SortList),
  currentSorting: SortList.POPULAR,
  hoveredOffer: null
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

    case ActionType.SET_HOVERED_OFFER:
      return Object.assign(
          {},
          state,
          {hoveredOffer: action.payload}
      );

    case ActionType.GET_OFFERS:
      return state.offers;
  }

  return state;
};

export {reducer};
