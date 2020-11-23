import {
  loadOfferList,
  setAuthorizationStatus,
  setAuthInfo,
  redirectToRoute
} from "./action";
import {
  AuthorizationStatus,
  APIRoute,
  AppRoute
} from "../constants";

const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOfferList(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
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
  checkAuth,
  login
};
