import {ActionType} from '../../action';
import {AuthorizationStatus} from '../../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offers: [],
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign(
          {},
          state,
          {authorizationStatus: action.payload}
      );
    case ActionType.LOAD_OFFER_LIST:
      return Object.assign(
          {},
          state,
          {offers: action.payload}
      );
    default:
      return state;
  }
};

export {apiData};
