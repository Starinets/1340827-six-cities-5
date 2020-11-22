import {ActionType} from '../../action';
import {AuthorizationStatus} from '../../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign(
          {},
          state,
          {authorizationStatus: action.payload}
      );
    case ActionType.SET_AUTH_INFO:
      return Object.assign(
          {},
          state,
          {authInfo: action.payload}
      );
    default:
      return state;
  }
};

export {user};
