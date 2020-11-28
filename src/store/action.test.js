import {
  ActionType,
  setCurrentCity,
  setCurrentSort,
  setHoveredOffer,
  setAuthorizationStatus,
  loadOfferList,
  setAuthInfo,
  redirectToRoute,
  loadFavorites,
  loadOfferDetails,
  setReviews,
  updateOffer,
  updateFavorites,
  updateNeighborhoods,
  updateCurrentOffer,
  setReviewFormState
} from './action';

describe(`Action creators are work correctly`, () => {
  it(`setCurrentCity return correct action`, () => {
    expect(setCurrentCity(`City name`)).toEqual({
      type: ActionType.SET_CURRENT_CITY,
      payload: `City name`
    });
  });

  it(`setCurrentSort return correct action`, () => {
    expect(setCurrentSort(`Sort type`)).toEqual({
      type: ActionType.SET_CURRENT_SORT,
      payload: `Sort type`
    });
  });

  it(`setHoveredOffer return correct action`, () => {
    expect(setHoveredOffer({id: 1})).toEqual({
      type: ActionType.SET_HOVERED_OFFER,
      payload: {id: 1}
    });
  });

  it(`setAuthorizationStatus return correct action`, () => {
    expect(setAuthorizationStatus(`Auth status`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `Auth status`
    });
  });

  it(`loadOfferList return correct action`, () => {
    expect(loadOfferList([
      {offer: `Offer1`},
      {offer: `Offer2`}
    ])).toEqual({
      type: ActionType.LOAD_OFFER_LIST,
      payload: [
        {offer: `Offer1`},
        {offer: `Offer2`}
      ]
    });
  });

  it(`setAuthInfo return correct action`, () => {
    expect(setAuthInfo({authStatus: `Auth status`})).toEqual({
      type: ActionType.SET_AUTH_INFO,
      payload: {authStatus: `Auth status`}
    });
  });

  it(`redirectToRoute return correct action`, () => {
    expect(redirectToRoute(`/somePage`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/somePage`
    });
  });

  it(`loadFavorites return correct action`, () => {
    expect(loadFavorites([
      {offer: `Offer1`},
      {offer: `Offer2`}
    ])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [
        {offer: `Offer1`},
        {offer: `Offer2`}
      ]
    });
  });

  it(`loadOfferDetails return correct action`, () => {
    expect(loadOfferDetails({id: 1})).toEqual({
      type: ActionType.LOAD_OFFER_DETAILS,
      payload: {id: 1}
    });
  });

  it(`setReviews return correct action`, () => {
    expect(setReviews([{id: 1}])).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: [{id: 1}]
    });
  });

  it(`updateOffer return correct action`, () => {
    expect(updateOffer({id: 1})).toEqual({
      type: ActionType.UPDATE_OFFERS,
      payload: {id: 1}
    });
  });

  it(`updateFavorites return correct action`, () => {
    expect(updateFavorites([{id: 1}])).toEqual({
      type: ActionType.UPDATE_FAVORITES,
      payload: [{id: 1}]
    });
  });

  it(`updateNeighborhoods return correct action`, () => {
    expect(updateNeighborhoods([{id: 1}])).toEqual({
      type: ActionType.UPDATE_NEIGHBORHOODS,
      payload: [{id: 1}]
    });
  });

  it(`updateCurrentOffer return correct action`, () => {
    expect(updateCurrentOffer({id: 1})).toEqual({
      type: ActionType.UPDATE_CURRENT_OFFER,
      payload: {id: 1}
    });
  });

  it(`setReviewFormState return correct action`, () => {
    expect(setReviewFormState({value: 1})).toEqual({
      type: ActionType.SET_STATE_REVIEW_FORM,
      payload: {value: 1}
    });
  });
});
