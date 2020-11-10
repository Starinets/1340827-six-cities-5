import {
  number,
  string,
  bool,
  arrayOf,
  oneOf,
  shape,
  func
} from 'prop-types';
import {
  MapPlace,
  OfferPlace,
  City,
  Sorting
} from './constants';

const COUNT = number;

const CITY = oneOf(Object.values(City));

const CITIES = arrayOf(CITY);

const SORTING = oneOf(Object.values(Sorting));

const OFFER_DESCRIPTION = arrayOf(
    string
);

const USER = shape({
  name: string.isRequired,
  isPro: bool.isRequired,
  avatar: string.isRequired
});

const IMAGES = arrayOf(
    string
);

const FEATURE = oneOf([
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cable TV`,
  `Fridge`
]);

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
  city: CITY.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
  isPremium: bool.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  isFavorite: bool.isRequired,
  rating: number.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  bedroomsCount: number.isRequired,
  adultsCount: number.isRequired,
  offerDescription: OFFER_DESCRIPTION.isRequired,
  host: USER.isRequired,
  images: IMAGES,
  features: FEATURES.isRequired,
  reviews: REVIEWS.isRequired,
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
  OFFER_PLACE
};
