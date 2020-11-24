import {ActionType} from '../../action';

const initialState = {
  offers: [],
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
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
