import {ActionType} from '../../action';
import {SortList, City} from '../../../constants';

const initialState = {
  cityList: Object.values(City),
  currentCity: City.PARIS,
  currentSorting: SortList.POPULAR,
  hoveredOffer: null
};

const appState = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export {appState};
