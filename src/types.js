import {
  number,
  string,
  bool,
  arrayOf,
  oneOf,
  shape,
  func,
  oneOfType
} from 'prop-types';
import {
  MapPlace,
  OfferPlace,
  City,
  SortList
} from './constants';

const COUNT = number;

const CITY = oneOf(Object.values(City));

const CITIES = arrayOf(CITY);

const SORTING = oneOf(Object.values(SortList));

const OFFER_DESCRIPTION = string;

const USER = shape({
  id: number.isRequired,
  name: string.isRequired,
  isPro: bool.isRequired,
  avatar: string.isRequired
});

const IMAGES = arrayOf(
    string
);

const FEATURE = string;

const FEATURES = arrayOf(
    FEATURE
);

const REVIEW = shape({
  user: USER.isRequired,
  rating: number.isRequired,
  text: string.isRequired,
  date: string.isRequired,
});

const REVIEWS = arrayOf(
    REVIEW
);

const OFFER = shape({
  id: number.isRequired,
  city: shape({
    name: string.isRequired,
    location: shape({
      latitude: number.isRequired,
      longitude: number.isRequired
    })
  }).isRequired,
  isPremium: bool.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  isFavorite: bool.isRequired,
  rating: number.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  bedroomsCount: number.isRequired,
  adultsCount: number.isRequired,
  description: OFFER_DESCRIPTION.isRequired,
  host: USER.isRequired,
  images: IMAGES,
  features: FEATURES.isRequired,
});

const OFFERS = arrayOf(OFFER);

const MAP_PLACE = oneOf([
  MapPlace.CITIES,
  MapPlace.OFFER,
]);

const OFFER_PLACE = oneOf([
  OfferPlace.CITIES,
  OfferPlace.NEIGHBORHOOD
]);

const AUTH_INFO = shape({
  email: oneOfType([
    oneOf([null]),
    string
  ])
});

export {
  number as NUMBER,
  string as STRING,
  bool as BOOLEAN,
  func as FUNCTION,
  COUNT,
  CITIES,
  CITY,
  SORTING,
  USER,
  IMAGES,
  FEATURE,
  FEATURES,
  REVIEW,
  REVIEWS,
  OFFER,
  OFFERS,
  MAP_PLACE,
  OFFER_PLACE,
  AUTH_INFO
};
