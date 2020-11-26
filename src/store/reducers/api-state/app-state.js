import {ActionType} from '../../action';
import {extend} from '../../../utils';
import {
  SortList,
  City,
  ReviewFormState
} from '../../../constants';

const initialState = {
  cityList: Object.values(City),
  currentCity: City.PARIS,
  currentSorting: SortList.POPULAR,
  hoveredOffer: null,
  reviewFormState: ReviewFormState.EDITING
};

const appState = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_CURRENT_CITY:
      return extend(
          state,
          {currentCity: action.payload}
      );

    case ActionType.SET_CURRENT_SORT:
      return extend(
          state,
          {currentSorting: action.payload}
      );

    case ActionType.SET_HOVERED_OFFER:
      return extend(
          state,
          {hoveredOffer: action.payload}
      );

    case ActionType.SET_STATE_REVIEW_FORM:
      return extend(
          state,
          {reviewFormState: action.payload}
      );

    default:
      return state;
  }
};

export {appState};
