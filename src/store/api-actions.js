import {
  loadOfferList,
  setAuthorizationStatus,
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
} from "./action";
import {
  AuthorizationStatus,
  APIRoute,
  AppRoute,
  ReviewFormState
} from "../constants";

const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOfferList(data)))
);

const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data)))
);

const getOfferDetails = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.HOTELS}/${id}`),
    api.get(`${APIRoute.COMMENTS}/${id}`),
    api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
  ])
  .then((details) => {
    dispatch(loadOfferDetails({
      offer: details[0].data,
      reviews: details[1].data,
      neighborhoods: details[2].data
    }));
  })
  .catch(() => {
    dispatch(redirectToRoute(AppRoute.ROOT));
  })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

const postComment = ({id, rating, review: comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(setReviews(data));
      dispatch(setReviewFormState(ReviewFormState.DEFAULT));
      dispatch(setReviewFormState(ReviewFormState.EDITING));
    })
    .catch(() => dispatch(setReviewFormState(ReviewFormState.SENDING_ERROR)))
);

const setOfferStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateOffer(data));
      dispatch(updateFavorites(data));
      dispatch(updateNeighborhoods(data));
      dispatch(updateCurrentOffer(data));
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export {
  fetchOfferList,
  fetchFavoriteList,
  getOfferDetails,
  checkAuth,
  postComment,
  setOfferStatus,
  login
};
