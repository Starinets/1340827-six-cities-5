import configureStore from "redux-mock-store";
import {
  Offers,
  reviews,
  City,
  SortList,
  AuthorizationStatus
} from "../test-data/test-data";

const createStore = configureStore();

const mockStore = createStore({
  API_DATA: {
    offers: Offers,
    favorites: Offers,
    offerDetails: {
      offer: Offers[0],
      reviews,
      neighborhoods: Offers
    }
  },
  APP_STATE: {
    cityList: Object.values(City),
    currentCity: City.BRUSSELS,
    currentSorting: SortList.TOP_RATED_FIRST,
    hoveredOffer: null,
    reviewFormState: `EDITING`
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {
      email: null
    }
  }
});

export {mockStore};
