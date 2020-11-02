import {
  number,
  string,
  bool,
  arrayOf,
  oneOf,
  shape,
  func
} from 'prop-types';

const COUNT = number;

const CITY = oneOf([
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
]);

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
  `cities`,
  `property`
]);

export {
  number as NUMBER,
  string as STRING,
  bool as BOOLEAN,
  func as FUNCTION,
  COUNT,
  CITY,
  USER,
  IMAGES,
  FEATURE,
  FEATURES,
  REVIEW,
  REVIEWS,
  OFFER,
  OFFERS,
  MAP_PLACE
};
