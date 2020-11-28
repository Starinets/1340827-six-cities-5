import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {apiData} from './api-data';
import {ActionType} from '../../action';
import {
  fetchOfferList,
  fetchFavoriteList,
  getOfferDetails,
  setOfferStatus,
  postComment
} from '../../api-actions';
import {APIRoute} from '../../../constants';
import {Offers, reviews} from '../../../test-data/test-data';

const api = createAPI(() => {});

describe(`api-data reducer testing`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(apiData(void 0, {})).toEqual({
      offers: [],
      favorites: [],
      offerDetails: {
        offer: null,
        reviews: [],
        neighborhoods: []
      }
    });
  });

  it(`Reducer loading offers`, () => {
    expect(apiData(
        {
          offers: []
        },
        {
          type: ActionType.LOAD_OFFER_LIST,
          payload: Offers
        }
    )).toEqual({
      offers: Offers
    });
  });

  it(`Reducer loading favorite offers`, () => {
    expect(apiData(
        {
          favorites: []
        },
        {
          type: ActionType.LOAD_FAVORITES,
          payload: Offers
        }
    )).toEqual({
      favorites: Offers
    });
  });

  it(`Reducer loading offer details`, () => {
    expect(apiData(
        {
          offerDetails: {
            offer: null,
            reviews: [],
            neighborhoods: []
          }
        },
        {
          type: ActionType.LOAD_OFFER_DETAILS,
          payload: {
            offer: Offers[0],
            reviews,
            neighborhoods: Offers
          }
        }
    )).toEqual({
      offerDetails: {
        offer: Offers[0],
        reviews,
        neighborhoods: Offers
      }
    });
  });

  it(`Reducer setting reviews`, () => {
    expect(apiData(
        {
          offerDetails: {
            offer: null,
            reviews: [],
            neighborhoods: []
          }
        },
        {
          type: ActionType.SET_REVIEWS,
          payload: reviews
        }
    )).toEqual({
      offerDetails: {
        offer: null,
        reviews,
        neighborhoods: []
      }
    });
  });

  it(`Reducer updating the offer`, () => {
    expect(apiData(
        {
          offers: [
            {id: 1, name: `offer1`},
            {id: 2, name: `offer2`},
            {id: 3, name: `offer3`}
          ]
        },
        {
          type: ActionType.UPDATE_OFFERS,
          payload: {id: 1, name: `New offer`}
        }
    )).toEqual({
      offers: [
        {id: 1, name: `New offer`},
        {id: 2, name: `offer2`},
        {id: 3, name: `offer3`}
      ]
    });
  });

  it(`Reducer updating favorite offers`, () => {
    expect(apiData(
        {
          favorites: [
            {id: 1, name: `offer1`},
            {id: 2, name: `offer2`},
            {id: 3, name: `offer3`}
          ]
        },
        {
          type: ActionType.UPDATE_FAVORITES,
          payload: {id: 1, name: `offer1`}
        }
    )).toEqual({
      favorites: [
        {id: 2, name: `offer2`},
        {id: 3, name: `offer3`}
      ]
    });

    expect(apiData(
        {
          favorites: [
            {id: 1, name: `offer1`},
            {id: 2, name: `offer2`},
            {id: 3, name: `offer3`}
          ]
        },
        {
          type: ActionType.UPDATE_FAVORITES,
          payload: {id: 4, name: `offer1`}
        }
    )).toEqual({
      favorites: [
        {id: 1, name: `offer1`},
        {id: 2, name: `offer2`},
        {id: 3, name: `offer3`}
      ]
    });
  });

  it(`Reducer update neighborhoods`, () => {
    expect(apiData(
        {
          offerDetails: {
            offer: null,
            reviews: [],
            neighborhoods: [
              {id: 1, name: `offer1`},
              {id: 2, name: `offer2`},
              {id: 3, name: `offer3`}
            ]
          }
        },
        {
          type: ActionType.UPDATE_NEIGHBORHOODS,
          payload: {id: 1, name: `New offer`}
        }
    )).toEqual({
      offerDetails: {
        offer: null,
        reviews: [],
        neighborhoods: [
          {id: 1, name: `New offer`},
          {id: 2, name: `offer2`},
          {id: 3, name: `offer3`}
        ]
      }
    });
  });

  it(`Reducer update offer from offer details`, () => {
    expect(apiData(
        {
          offerDetails: {
            offer: {id: 1, name: `Old offer`},
          }
        },
        {
          type: ActionType.UPDATE_CURRENT_OFFER,
          payload: {id: 1, name: `New offer`}
        }
    )).toEqual({
      offerDetails: {
        offer: {id: 1, name: `New offer`},
      }
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotel's`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, Offers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_LIST,
          payload: Offers,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, Offers);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: Offers,
        });
      });
  });

  it(`Should make a correct API getDetailsOffer`, () => {
    const id = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const detailsLoader = getOfferDetails(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200, {offerID: 1})
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, {reviewID: 2})
      .onGet(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
      .reply(200, {neighborhoodsID: 3});

    return detailsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_DETAILS,
          payload: {
            offer: {offerID: 1},
            reviews: {reviewID: 2},
            neighborhoods: {neighborhoodsID: 3}
          },
        });
      });
  });

  it(`Should make a correct API call to /favorite/: hotel_id/: status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteStatus = setOfferStatus(1, 1);

    apiMock
      .onPost(`favorite/1/1`)
      .reply(200, [{offerID: 1}]);

    return changeFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: [{offerID: 1}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_FAVORITES,
          payload: [{offerID: 1}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.UPDATE_NEIGHBORHOODS,
          payload: [{offerID: 1}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.UPDATE_CURRENT_OFFER,
          payload: [{offerID: 1}],
        });
      });
  });

  it(`Should make a correct API call to /comments/: id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const mockReview = {
      comment: `Some comment from user`,
      rating: 4,
      id: 10
    };

    const commentPoster = postComment(mockReview);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${mockReview.id}`)
      .reply(200, reviews);

    return commentPoster(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEWS,
          payload: reviews,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_STATE_REVIEW_FORM,
          payload: `DEFAULT`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_STATE_REVIEW_FORM,
          payload: `EDITING`,
        });
      });
  });
});

