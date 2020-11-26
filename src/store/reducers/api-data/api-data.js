import {ActionType} from '../../action';
import {
  extend,
  updateOffer,
  updateFavorite
} from '../../../utils';

const initialState = {
  offers: [],
  favorite: [],
  offerDetails: {
    offer: null,
    reviews: [],
    neighborhoods: []
  }
};

const apiData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_OFFER_LIST:
      return extend(
          state,
          {offers: action.payload}
      );

    case ActionType.LOAD_FAVORITES:
      return extend(
          state,
          {favorites: action.payload}
      );

    case ActionType.LOAD_OFFER_DETAILS:
      return extend(
          state,
          {offerDetails: action.payload}
      );

    case ActionType.SET_REVIEWS:
      return extend(
          state,
          {offerDetails: extend(
              state.offerDetails,
              {reviews: action.payload}
          )}
      );

    case ActionType.UPDATE_OFFERS:
      return extend(
          state,
          {offers: updateOffer(
              state.offers,
              action.payload
          )}
      );

    case ActionType.UPDATE_FAVORITES:
      return extend(
          state,
          {favorites: updateFavorite(
              state.favorites,
              action.payload
          )}
      );

    case ActionType.UPDATE_NEIGHBORHOODS:
      return extend(
          state,
          {offerDetails: extend(
              state.offerDetails,
              {neighborhoods: updateOffer(
                  state.offerDetails.neighborhoods,
                  action.payload
              )}
          )}
      );

    case ActionType.UPDATE_CURRENT_OFFER:
      return extend(
          state,
          {offerDetails: extend(
              state.offerDetails,
              {offer: action.payload}
          )}
      );
    default:
      return state;
  }
};

export {apiData};
