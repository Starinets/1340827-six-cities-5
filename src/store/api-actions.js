import {
  loadOffersAction,
  requiredAuthorizationAction,
  setAuthInfo,
  redirectToRoute
} from "./action";
import {
  AuthorizationStatus,
  APIRoute,
  AppRoute
} from "../const";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffersAction(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requiredAuthorizationAction(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(requiredAuthorizationAction(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export {
  fetchOffersList,
  checkAuth,
  login
};
