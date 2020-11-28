import {appState} from './app-state';
import {ActionType} from '../../action';
import {Offers} from '../../../test-data/test-data';
import {
  City,
  SortList,
  ReviewFormState,
} from '../../../constants';

describe(`app-state reducer testing`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appState(void 0, {})).toEqual({
      cityList: Object.values(City),
      currentCity: City.PARIS,
      currentSorting: SortList.POPULAR,
      hoveredOffer: null,
      reviewFormState: ReviewFormState.EDITING
    });
  });

  it(`Reducer changes current city`, () => {
    expect(appState(
        {
          currentCity: City.PARIS,
        },
        {
          type: ActionType.SET_CURRENT_CITY,
          payload: City.DUSSELDORF
        }
    )).toEqual({
      currentCity: City.DUSSELDORF,
    });
  });

  it(`Reducer changes current sort type`, () => {
    expect(appState(
        {
          currentSorting: SortList.POPULAR,
        },
        {
          type: ActionType.SET_CURRENT_SORT,
          payload: SortList.TOP_RATED_FIRST
        }
    )).toEqual({
      currentSorting: SortList.TOP_RATED_FIRST
    });
  });

  it(`Reducer changes hovered card`, () => {
    expect(appState(
        {
          hoveredOffer: null,
        },
        {
          type: ActionType.SET_HOVERED_OFFER,
          payload: Offers[0]
        }
    )).toEqual({
      hoveredOffer: Offers[0],
    });
  });

  it(`Reducer changes current review form state`, () => {
    expect(appState(
        {
          reviewFormState: ReviewFormState.EDITING
        },
        {
          type: ActionType.SET_STATE_REVIEW_FORM,
          payload: ReviewFormState.DEFAULT
        }
    )).toEqual({
      reviewFormState: ReviewFormState.DEFAULT
    });
  });
});
